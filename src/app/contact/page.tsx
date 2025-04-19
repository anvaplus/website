import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import { SlideIn, FadeIn } from '@/components/ui/Animations';

export const metadata: Metadata = {
  title: 'Contact | Andrei Vasiliu',
  description: 'Get in touch for collaborations, job opportunities, or just to say hello',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <SlideIn>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have a question or want to work together? I'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
      </SlideIn>

      {/* Contact Form and Info */}
      <FadeIn delay={0.1}>
        <ContactForm />
      </FadeIn>
    </div>
  );
}