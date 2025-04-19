# Anvaplus Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- **Clean, modern design** with intuitive navigation
- **Responsive layout** for all devices (mobile, tablet, desktop)
- **Dark/light mode** toggle for user preference
- **Project showcase** with detailed project pages
- **About section** highlighting skills and experience
- **Contact options** with social media integration
- **Optimized performance** with Next.js static export
- **Accessibility** focused with WCAG compliance
- **SEO optimized** with proper meta tags

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build and Deploy

Build the website for production:

```bash
npm run build
```

This will create a production build that can be deployed to any hosting service.

## Docker Deployment

This project includes Docker configuration for easy deployment.

### Using Docker Directly

Build the Docker image:

```bash
docker build -t anvaplus-website .
```

Run the container:

```bash
docker run -p 3000:3000 anvaplus-website
```

Your website will be available at http://localhost:3000.

### Using Docker Compose

The simplest way to deploy is using Docker Compose:

```bash
docker-compose up -d
```

This will build the image and start the container in detached mode.

To stop the container:

```bash
docker-compose down
```

# GitHub Actions for Docker Deployment

This repository includes a GitHub Actions workflow that automatically builds a Docker image of the website and pushes it to DockerHub whenever changes are pushed to the main branch.

## Setting Up DockerHub Integration

To use this workflow, you need to add two secrets to your GitHub repository:

1. `DOCKERHUB_USERNAME`: Your DockerHub username
2. `DOCKERHUB_TOKEN`: A DockerHub personal access token (not your password)

### How to Create a DockerHub Token

1. Log in to [DockerHub](https://hub.docker.com/)
2. Click on your username > Account Settings > Security
3. Click "New Access Token"
4. Give it a name (e.g., "GitHub Actions") and set appropriate permissions
5. Copy the token immediately (you won't be able to see it again)

### How to Add Secrets to GitHub

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add both the `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets

## Using the Docker Image

Once built, the image will be available at:
```
docker pull yourusername/website:latest
```

You can run it locally with:
```
docker run -p 3000:3000 yourusername/website:latest
```

## Available Tags

The workflow creates multiple tags for versioning:
- `latest`: The most recent build
- Date-based tag (e.g., `2025-04-18`): Build from that date
- Commit SHA: For tracking exactly which code is in the image

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
