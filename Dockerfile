# Dockerfile
# Stage 1: Build the application
FROM node:23-slim AS deps

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Stage 2: Builder
FROM node:23-slim AS builder

WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy project files
COPY . .

# Build the application
RUN npm run build

# Stage 3: Runner (production)
FROM node:23-slim AS runner

WORKDIR /app

# Set to production environment
ENV NODE_ENV=production

# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Optimize by removing unnecessary files
RUN find . -type f -name "*.map" -delete && \
    find ./node_modules -type d -name "examples" -exec rm -rf {} +; \
    find ./node_modules -type d -name "docs" -exec rm -rf {} +; \
    find ./node_modules -type d -name "test" -exec rm -rf {} +;

# Set correct permissions
RUN chown -R nextjs:nodejs /app

# Use non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]