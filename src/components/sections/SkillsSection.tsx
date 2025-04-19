'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Skill data structured from skills.txt with descriptions
const skillCategories = [
  { 
    name: 'Platform & Infrastructure', 
    description: 'Expertise in container orchestration, deployment platforms, and infrastructure management tools.',
    skills: [
      { name: 'Kubernetes', level: 95 },
      { name: 'OpenShift', level: 85 },
      { name: 'Docker', level: 95 },
      { name: 'Rancher', level: 90 },
      { name: 'Helm', level: 90 },
      { name: 'Kustomize', level: 85 },
    ]
  },
  { 
    name: 'Infrastructure as Code', 
    description: 'Tools and practices for managing and provisioning infrastructure through code instead of manual processes.',
    skills: [
      { name: 'Terraform', level: 95 },
      { name: 'Ansible', level: 90 },
      { name: 'Plumi', level: 85 },
    ]
  },
  { 
    name: 'Cloud', 
    description: 'Experience with major cloud providers and their services for building scalable and reliable applications.',
    skills: [
      { name: 'GCP', level: 95 },
      { name: 'Azure', level: 90 },
      { name: 'AWS', level: 85 },
    ]
  },
  { 
    name: 'Operating Systems', 
    description: 'Proficiency in managing and maintaining various operating systems for development and production environments.',
    skills: [
      { name: 'Linux', level: 90 },
      { name: 'MacOS', level: 85 },
      { name: 'Windows', level: 85 },
    ]
  },
  { 
    name: 'Networking', 
    description: 'Understanding of network protocols, architecture, and services essential for distributed systems.',
    skills: [
      { name: 'TCP/IP', level: 90 },
      { name: 'DNS', level: 85 },
      { name: 'VPNs', level: 85 },
      { name: 'Load Balancing', level: 85 },
    ]
  },
  { 
    name: 'Other Infrastructure', 
    description: 'Additional infrastructure tools and services that complement modern platform engineering.',
    skills: [
      { name: 'Istio', level: 85 },
      { name: 'Kong', level: 80 },
      { name: 'Cert Manager', level: 80 },
      { name: 'Intune', level: 75 },
      { name: 'Jamf', level: 75 },
      { name: 'NinjaOne', level: 75 },
    ]
  },
  { 
    name: 'CI/CD & DevOps', 
    description: 'Continuous integration, delivery, and deployment tools for automating software development workflows.',
    skills: [
      { name: 'GitHub Actions', level: 90 },
      { name: 'ArgoCD', level: 95 },
      { name: 'Tekton', level: 85 },
      { name: 'Jenkins', level: 85 },
      { name: 'Azure DevOps', level: 90 },
      { name: 'GitLab', level: 85 },
      { name: 'Artifactory', level: 80 },
    ]
  },
  { 
    name: 'Monitoring & Security', 
    description: 'Tools for observability, monitoring, and securing applications and infrastructure.',
    skills: [
      { name: 'Prometheus', level: 90 },
      { name: 'Grafana', level: 90 },
      { name: 'ELK', level: 85 },
      { name: 'Splunk', level: 80 },
      { name: 'GCP Monitoring', level: 85 },
      { name: 'Fluentbit', level: 85 },
      { name: 'IAM', level: 90 },
      { name: 'Secrets Management', level: 85 },
      { name: 'Network Security', level: 85 },
      { name: 'ZTN', level: 80 },
      { name: 'Twingate', level: 80 },
      { name: 'Trivy', level: 80 },
    ]
  },
  { 
    name: 'Programming & Data', 
    description: 'Programming languages, frameworks, and database technologies for developing and managing applications.',
    skills: [
      { name: 'Bash', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Go', level: 75 },
      { name: 'PowerShell', level: 85 },
      { name: '.NET Framework', level: 80 },
      { name: '.NET Core (C#)', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Oracle', level: 80 },
      { name: 'RavenDB', level: 75 },
      { name: 'Cosmos DB', level: 75 },
      { name: 'Redis', level: 80 },
    ]
  },
  { 
    name: 'Additional Tools', 
    description: 'Supplementary tools and technologies that enhance development workflow and quality.',
    skills: [
      { name: 'Kafka', level: 80 },
      { name: 'Lens', level: 75 },
      { name: 'k9s', level: 75 },
      { name: 'SonarCloud', level: 75 },
      { name: 'Codecov', level: 75 },
    ]
  },
];

interface SkillsSectionProps {
  variant?: 'simple' | 'detailed';
}

export default function SkillsSection({ variant = 'detailed' }: SkillsSectionProps) {
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  
  interface ExpandedCategories {
    [key: string]: boolean;
  }

  const toggleCategory = (categoryName: string): void => {
    setExpandedCategories((prev: ExpandedCategories) => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };
  
  // Icons for technical skills categories
  const getCategoryIcon = (category: string): React.ReactElement => {
    switch(category) {
      case 'Platform & Infrastructure':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'Infrastructure as Code':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'Cloud':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'Operating Systems':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'Networking':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'CI/CD & DevOps':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case 'Monitoring & Security':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'Programming & Data':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'Additional Tools':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      case 'Other Infrastructure':
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
    }
  };

  // For simple variant, only show a subset of categories
  const displayedCategories = variant === 'simple' 
    ? skillCategories.filter(cat => 
        ['Platform & Infrastructure', 'Cloud', 'CI/CD & DevOps', 'Programming & Data'].includes(cat.name)
      )
    : skillCategories;

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in a variety of technologies focused on Cloud Infrastructure, DevOps, and Platform Engineering.
          </p>
        </div>

        {/* All Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Card Header - Always visible */}
              <div 
                className="p-6 cursor-pointer" 
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 mr-4 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    {getCategoryIcon(category.name)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>
                {variant === 'detailed' && (
                  <div className="flex justify-end mt-4">
                    <div className="text-blue-600 dark:text-blue-400 transition-transform duration-300" style={{ 
                      transform: expandedCategories[category.name] ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Expandable Content - Only for detailed variant */}
              {variant === 'detailed' && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategories[category.name] ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                  style={{ 
                    opacity: expandedCategories[category.name] ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill.name} className="flex items-center text-gray-700 dark:text-gray-300">
                            <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                            {skill.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show "View All Skills" button on home page */}
        {variant === 'simple' && (
          <div className="mt-10 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Skills
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}