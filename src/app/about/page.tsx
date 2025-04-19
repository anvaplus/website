'use client';

import Link from 'next/link';
import { FadeIn, SlideIn, ScaleIn } from '@/components/ui/Animations';
import { VerticalTimeline } from '@/components/ui/VerticalTimeline';

export default function AboutPage() {
  // Define experience items
  const experienceItems = [
    {
      date: 'May 2023 – Present',
      title: 'Head of Platform',
      company: 'Alpian Technologies',
      location: 'Rome, Italy',
      description: [
        'Spearheaded the strategic vision and leadership for the Platform Engineering team, integrating security best practices into platform initiatives to align with organizational goals and developer needs.',
        'Led the development and implementation of the Internal Developer Platform (IDP) based on Backstage, empowering Platform Engineers to streamline developer workflows and enhance self-service capabilities, resulting in a 40% improvement in developer onboarding time.',
        'Oversaw the administration and optimization of critical platform infrastructure and services, including the management of 4 GKE clusters.',
        'Designed and implemented secure cloud networking architectures, including VPC design, network segmentation, and security groups.',
        'Implemented Zero Trust Network principles to enhance security and control access to internal resources.',
        'Built, mentored, and managed a team of Platform Engineers, fostering a collaborative and innovative environment.',
      ],
    },
    {
      date: 'Apr 2024 – Present',
      title: 'ISMS Manager (Concurrent Role)',
      company: 'Alpian Technologies',
      location: 'Rome, Italy',
      description: [
        'Championed the maintenance and enhancement of the Information Security Management System (ISMS) in accordance with ISO 27001 standards.',
        'Contributed to risk assessments, policy development, and internal audits, supporting successful ISO 27001 certification.',
        'Ensured ongoing compliance with security best practices and regulatory requirements.',
      ],
    },
    {
      date: 'Apr 2022 – Apr 2023',
      title: 'Head of DevOps',
      company: 'Alpian Technologies',
      location: 'Rome, Italy',
      description: [
        'Directed the architecture, development, and administration of Kubernetes clusters for the software factory.',
        'Led the design and implementation of a GitOps-based workflow using Terraform for Infrastructure as Code.',
        'Orchestrated the integration of diverse CI pipelines into the GitOps framework.',
        'Provided technical leadership and mentorship to a team of 3 DevOps engineers.',
      ],
    },
    {
      date: 'Jan 2021 – Apr 2022',
      title: 'Senior DevOps Consultant',
      company: 'Capgemini',
      location: 'Bologna, Italy',
      description: [
        'Supported various client engagements as part of the DevOps DCX taskforce.',
        'Led CI/CD pipeline design and implementation for the Nemo project at ALD Automotive, accelerating time to market by 15%.',
        'Optimized Azure cloud infrastructure, reducing costs by 25%.',
        'Oversaw administration and monitoring of AKS clusters across complex environments.',
        'Provided DevOps consultation for the Graph Analysis on Transport Network project at Vodafone.',
      ],
    },
    {
      date: 'Apr 2020 – Jan 2021',
      title: 'DevOps Engineer / Technical Leader',
      company: 'Modis',
      location: 'Bologna, Italy',
      description: [
        'Led a team of 3 engineers to implement CI/CD pipelines using Azure DevOps, improving deployment efficiency by 20%.',
        'Managed Azure cloud infrastructure and AKS clusters for high availability and scalability.',
        'Contributed to agile planning processes, aligning DevOps strategies with project objectives.',
      ],
    },
    {
      date: 'Jan 2018 – Jan 2021',
      title: 'Software Developer',
      company: 'Modis',
      location: 'Bologna, Italy',
      description: [
        'Developed a financial transaction monitoring application for Borsa Italiana (Argo project).',
        'Built GUIs for Windows systems at Datalogic (SLS project).',
        'Created an internal resource management website.',
      ],
    },
    {
      date: 'Dec 2018',
      title: 'Azure DevOps Instructor',
      company: 'Modis Academy',
      location: 'Bologna, Italy',
      description: [
        'Delivered hands-on Azure DevOps training sessions to academy participants.',
      ],
    },
    {
      date: 'Sep 2017 – Dec 2017',
      title: 'Intern Software Developer',
      company: 'Coderollers',
      location: 'Málaga, Spain',
      description: [
        'Contributed to backend development projects within an Agile environment.',
      ],
    },
    {
      date: '2006 – 2017',
      title: 'Civil Engineering Consultant',
      company: 'Freelance',
      location: 'Romania / Italy',
      description: [
        'Provided freelance consulting services in civil engineering projects.',
      ],
    },
  ];

  const educationItems = [
    {
      date: 'September 2013 - July 2014',
      title: "International Master's Degree in Civil Engineering",
      company: 'University of Bologna - Italy',
      location: '',
      description: ['Final mark 110/110 (Civil/Structural Engineering specialization)'],
    },
    {
      date: 'September 2010 - July 2012',
      title: "Bachelor's Degree in Civil Engineering",
      company: '"Ovidius" University of Constanța - Romania',
      location: '',
      description: ['Final mark 8.75/10'],
    },
    {
      date: 'September 2004 - July 2009',
      title: 'Degree in Economic Engineering in Construction',
      company: '"Ovidius" University of Constanța - Romania',
      location: '',
      description: ['5-year programme – final mark 8.75/10'],
    },
  ];

  return (
    <main className="pt-16 pb-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <SlideIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Platform Engineer with expertise in DevOps, cloud infrastructure, and automated workflows.
            </p>
          </div>
        </SlideIn>
        
        {/* Bio section */}
        <ScaleIn delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Header with name */}
              <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hello, I'm Andrei Vasiliu</h2>
                <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">Platform Engineering Leader & DevOps Specialist</p>
              </div>
              
              {/* Content organized by categories */}
              <div className="space-y-8">
                {/* Overview section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Throughout my career, I've dedicated myself to mastering the art of building resilient, efficient, and secure digital infrastructures. My journey has taken me from civil engineering to becoming a leader in platform engineering and DevOps practices, where I create robust frameworks that enable development teams to deliver exceptional software with confidence.
                  </p>
                </div>
                
                {/* Current Role section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Current Role
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Currently serving as Head of Platform at Alpian Technologies, I lead strategic initiatives to implement self-service platforms that enhance developer productivity while maintaining the highest security standards. I've successfully managed the implementation of Internal Developer Platforms based on Backstage, reducing developer onboarding time by 40% and streamlining workflows across the organization.
                  </p>
                </div>
                
                {/* Quote section */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    &quot;Platform engineering is the discipline of building and operating self-service internal developer platforms (IDPs) 
                    for software delivery and life cycle management.&quot;
                  </p>
                  <p className="mt-2 text-right text-gray-600 dark:text-gray-400 font-medium">
                    - <a href="https://www.gartner.com/en/infrastructure-and-it-operations-leaders/topics/platform-engineering" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                        Gartner
                      </a>
                  </p>
                </div>
                
                {/* Expertise section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-md">
                      <span className="font-medium text-gray-800 dark:text-gray-200">Cloud Technologies</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">GCP, Azure, Infrastructure Management</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-md">
                      <span className="font-medium text-gray-800 dark:text-gray-200">Container Orchestration</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Kubernetes, Docker, Container Management</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-md">
                      <span className="font-medium text-gray-800 dark:text-gray-200">Infrastructure as Code</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Terraform, GitOps Workflows, CI/CD</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-3 rounded-md">
                      <span className="font-medium text-gray-800 dark:text-gray-200">Security</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Zero Trust Networks, ISO 27001, ISMS</p>
                    </div>
                  </div>
                </div>
                
                {/* Philosophy section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    My Philosophy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    I believe in automating everything that can be automated, creating self-service platforms that empower development teams, 
                    and maintaining a strong focus on security and reliability throughout the software delivery lifecycle. My goal is to remove friction from the development process while ensuring that infrastructure remains secure, compliant, and optimized for performance and cost.
                  </p>
                </div>
              </div>
              
              {/* Download CV button */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Download CV
                  <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScaleIn>
        
        {/* Experience section - Timeline */}
        <FadeIn delay={0.2}>
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Professional Experience</h2>
            <VerticalTimeline items={experienceItems} />
          </section>
        </FadeIn>
        
        {/* Education section - Timeline */}
        <FadeIn delay={0.3}>
          <section className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Education</h2>
            <VerticalTimeline items={educationItems} />
          </section>
        </FadeIn>
      </div>
    </main>
  );
}