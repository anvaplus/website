import type { Metadata } from 'next';
import Link from 'next/link';
import SkillsSection from '@/components/sections/SkillsSection';
import { FadeIn, ScaleIn, SlideIn } from '@/components/ui/Animations';

export const metadata: Metadata = {
  title: 'Andrei Vasiliu | Platform Engineering',
  description: 'Explore my technical skills in Platform Engineering, DevOps, Cloud Infrastructure, and more',
};

export default function SkillsPage() {
  // Define language skills from skills.txt
  const languageSkills = [
    {
      language: 'Romanian',
      level: 'Native',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      language: 'Italian',
      level: 'Fluent (Written and Spoken)',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      language: 'English',
      level: 'Proficient (Written and Spoken)',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
  ];

  // Define personal skills from skills.txt with more detailed descriptions
  const personalSkills = [
    {
      title: 'Leadership & Communication',
      description: 'Excellent communication, collaboration, and leadership skills, with a proven ability to mentor teams and articulate complex technical concepts to both technical and non-technical audiences.',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Problem Solving & Analytical Thinking',
      description: 'Strong analytical and problem-solving abilities, adept at identifying root causes, developing innovative solutions, and optimizing system performance in complex environments.',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Adaptability & Learning Agility',
      description: 'Fast learner and technology adopter, with a demonstrated capacity to quickly master new tools, technologies, and methodologies in the rapidly evolving field of DevOps and platform engineering.',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Project Management & Organization',
      description: 'Ability to think methodically, design, plan, and manage projects effectively, ensuring timely delivery and adherence to quality standards.',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Autonomy & Resilience',
      description: 'Autonomous and able to work effectively under pressure, with strong prioritization skills and a commitment to taking ownership and responsibility.',
      icon: (
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];



  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <SlideIn>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                My professional toolkit spans Platform Engineering, DevOps, and Cloud Infrastructure
                with expertise in designing, implementing, and managing secure and scalable systems.
              </p>
            </div>
          </div>
        </section>
      </SlideIn>

      {/* Technical Skills Section */}
      <FadeIn delay={0.1}>
        <SkillsSection />
      </FadeIn>

      {/* Personal Skills Section */}
      <FadeIn delay={0.2}>
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Personal Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Beyond technical expertise, I bring a set of essential soft skills that enable successful collaboration and project delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Language Skills Section */}
      <FadeIn delay={0.3}>
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Language Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                I am proficient in multiple languages, which allows me to communicate effectively in diverse environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languageSkills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.language}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Call to Action */}
      <ScaleIn delay={0.4}>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how my skills and expertise can help your organization build better platforms and infrastructure.
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