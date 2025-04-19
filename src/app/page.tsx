'use client';

import Link from 'next/link';

// Component imports
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import { FadeIn, SlideIn, ScaleIn } from '@/components/ui/Animations';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                <span className="block">Hello, I'm <span className="text-blue-600 dark:text-blue-400">Andrei Vasiliu</span></span>
                <span className="block">Platform Engineer</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Spent years developing the skills to increase velocity, reliability, and quality with focus on security. 
                Deep experience with GCP, Azure, Kubernetes, Docker, and helping organizations adopt DevOps for the modern age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  View My Work
                </Link>
                <Link 
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Download CV
                  <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </SlideIn>
            <ScaleIn className="order-1 lg:order-2 flex justify-center" delay={0.2}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl">
                {/* Replace with your actual profile image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  AV
                </div>
                {/* Uncomment when you have an actual image
                <Image 
                  src="/images/profile.jpg" 
                  alt="Andrei Vasiliu" 
                  fill
                  className="object-cover"
                  priority
                />
                */}
              </div>
            </ScaleIn>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full opacity-50 blur-3xl"></div>
      </section>

      {/* Services Section */}
      <FadeIn>
        <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                I offer specialized services to help organizations transform their infrastructure and development processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Platform Engineering</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building and operating self-service internal developer platforms (IDPs) for software delivery and life cycle management.
                </p>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">DevOps Implementation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  DevOps solutions that automate away inefficiencies and improve the quality and reliability of software using Kubernetes, Terraform, Ansible, and ArgoCD.
                </p>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cloud Migration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Start or migrate your project to the cloud and transfer the responsibility of running on-premises hardware and software to specialist providers like Azure, GCP or AWS.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Featured Projects Section */}
      <FadeIn delay={0.1}>
        <div className="bg-white dark:bg-gray-900">
          <ProjectsSection featured={true} />
        </div>
      </FadeIn>

      {/* Skills Section */}
      <FadeIn delay={0.1}>
        <div className="bg-gray-50 dark:bg-gray-800/30">
          <SkillsSection variant="simple" />
        </div>
      </FadeIn>

      {/* Call to Action */}
      <ScaleIn delay={0.2}>
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's collaborate to build secure, scalable, and efficient platform solutions that empower your development teams.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </ScaleIn>
    </div>
  );
}
