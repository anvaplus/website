'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FadeIn, SlideIn, ScaleIn } from '@/components/ui/Animations';

// Define the Project type for better TypeScript support
type Project = {
  id: string;
  title: string;
  client: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

// Define project details based on projects.txt and experience.txt
const projectDetails: Project[] = [
  {
    id: 'internal-developer-platform',
    title: 'Internal Developer Platform (IDP)',
    client: 'Alpian Technologies',
    period: 'May 2023 – Present',
    description: 'Design and implementation of an Internal Developer Platform based on Backstage to empower platform engineers and streamline developer workflows.',
    responsibilities: [
      'Led the development and implementation of the IDP based on Backstage',
      'Integrated security controls and access management into the platform',
      'Improved developer onboarding time by 40% through self-service capabilities',
      'Managed and optimized 4 GKE clusters supporting the platform infrastructure'
    ],
    technologies: ['Kubernetes', 'GKE', 'Backstage', 'GitOps', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Zero Trust Network']
  },
  {
    id: 'isms-implementation',
    title: 'ISO 27001 Certification',
    client: 'Alpian Technologies',
    period: 'April 2024 – Present',
    description: 'Implementation and maintenance of the Information Security Management System (ISMS) leading to successful ISO 27001 certification.',
    responsibilities: [
      'Championed the maintenance and enhancement of the ISMS',
      'Contributed to risk assessments, policy development, and internal audits',
      'Played a key role in attaining ISO 27001 certification',
      'Ensured ongoing compliance with security best practices and regulations'
    ],
    technologies: ['ISO 27001', 'Risk Assessment', 'Security Policies', 'Compliance', 'Audit Processes', 'ISMS', 'Intune', 'Jamf', 'NinjaOne']
  },
  {
    id: 'gitops-workflow',
    title: 'GitOps Transformation',
    client: 'Alpian Technologies',
    period: 'April 2022 – April 2023',
    description: 'Transformation of infrastructure management to a GitOps-based workflow using Infrastructure as Code approach.',
    responsibilities: [
      'Directed the architecture and administration of Kubernetes clusters',
      'Led the design and implementation of a GitOps-based workflow',
      'Transformed infrastructure management to an IaC approach using Terraform',
      'Orchestrated the integration of CI pipelines into the GitOps framework'
    ],
    technologies: ['GitOps', 'Kubernetes', 'Terraform', 'Githun Actions', 'ArgoCD', 'Helm']
  },
  {
    id: 'azure-devops-training',
    title: 'Azure DevOps Training Program',
    client: 'Modis Academy',
    period: 'December 2018',
    description: 'Developed and delivered comprehensive training on Azure DevOps practices and tools for new developers.',
    responsibilities: [
      'Created technical curriculum for Azure DevOps practices',
      'Conducted hands-on training sessions for junior developers',
      'Provided mentorship on CI/CD implementation and best practices',
      'Developed practical exercises to reinforce learning objectives'
    ],
    technologies: ['Azure DevOps', 'CI/CD', 'Git', 'Azure Pipelines', 'Technical Training']
  },
  {
    id: 'nemo-rental-platform',
    title: 'NEMO - Long-term Rental Platform',
    client: 'ALD Automotive',
    period: 'February 2021 – April 2022',
    description: 'Development of a long-term rental platform capable of covering the entire life cycle of the NLT vehicle, from delivery to return.',
    responsibilities: [
      'Architected, developed and improved DevOps tools to optimize and automate the application lifecycle',
      'Administered and monitored AKS Kubernetes clusters across all environments (DEV, UAT, PREPROD, PROD, FAILOVER)',
      'Reduced Azure cloud infrastructure cost by 25% through clusters and cloud optimizations'
    ],
    technologies: ['Azure', 'Kubernetes', 'ArgoCD', 'Ansible', 'Lens', 'Jenkins', 'Prometheus', 'Grafana', 'Elasticsearch', 'Kibana', 'Kafka', 'PostgreSQL', 'Bash', 'PowerShell', 'Azure CLI']
  },
  {
    id: 'graph-analysis',
    title: 'Graph Analysis on Transport Network',
    client: 'Vodafone',
    period: 'January 2021 – February 2021',
    description: 'Development of an AI & Advanced Data Visualization solution that allows to efficiently inspect the Client&apos;s Fixed Network Topology.',
    responsibilities: [
      'Containerized applications and automated the solution deployment',
      'Implemented app authentication via Keycloak using LDAP',
      'Configured Nginx as reverse proxy'
    ],
    technologies: ['Bitbucket', 'Docker', 'Nexus', 'Keycloak', 'LDAP', 'Nginx']
  },
  {
    id: 'argo-financial',
    title: 'ARGO - Financial Monitoring System',
    client: 'Borsa Italiana',
    period: 'April 2020 – January 2021',
    description: 'Application that monitors financial transactions and reports any illicit behaviour to the relevant authorities.',
    responsibilities: [
      'Developed financial monitoring application',
      'Implemented reporting mechanisms for compliance with financial regulations',
      'Maintained and enhanced application features'
    ],
    technologies: ['.NET (C#)', 'Windows Form', 'WPF', 'XML', 'WCF', 'SQL', 'Oracle Database', 'Microsoft SQL Server', 'Git', 'Subversion']
  },
  {
    id: 'sls-safety',
    title: 'SLS (Security Laser Safety)',
    client: 'Datalogic',
    period: 'January 2018 – April 2020',
    description: 'Designed and developed Graphical User Interfaces for Windows systems.',
    responsibilities: [
      'Developed Windows GUI applications',
      'Implemented safety-critical interfaces',
      'Designed intuitive user experiences'
    ],
    technologies: ['.NET (C#)', 'WPF', 'XAML', 'XML', 'Git', 'Gitblit', 'Jazz IBM']
  }
];

// Helper function to convert period string to date for sorting
const getPeriodStartDate = (period: string): Date => {
  // Extract the start date from period strings like "May 2023 – Present" or "January 2018 – April 2020"
  const startDateStr = period.split('–')[0].trim();
  const months: Record<string, number> = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  
  const parts = startDateStr.split(' ');
  const month = months[parts[0]] || 0; // Default to 0 if month not found
  const year = parseInt(parts[1]);
  
  return new Date(year, month);
};

export default function ProjectsClient() {
  // State to hold sorted projects
  const [sortedProjects, setSortedProjects] = useState<Project[]>([]);
  
  // Sort projects when component mounts
  useEffect(() => {
    // Sort projects by date (newest first)
    const sorted = [...projectDetails].sort((a, b) => {
      const dateA = getPeriodStartDate(a.period).getTime();
      const dateB = getPeriodStartDate(b.period).getTime();
      return dateB - dateA; // Descending order (newest first)
    });
    
    setSortedProjects(sorted);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <SlideIn>
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A showcase of my platform engineering, DevOps, and software development work.
              </p>
            </div>
          </div>
        </section>
      </SlideIn>

      {/* Projects Section */}
      <FadeIn delay={0.1}>
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Featured Projects</h2>
              
              {/* Project Cards with Integrated Details */}
              <div className="space-y-16">
                {sortedProjects.map((project, index) => (
                  <ScaleIn key={project.id} delay={0.1 + (index * 0.05)}>
                    <div id={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      {/* Card Header with Badge */}
                      <div className="h-16 w-full relative bg-gradient-to-r from-blue-500 to-blue-600">
                        <div className="absolute top-4 right-4 px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full">
                          {project.client}
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-8 pt-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{project.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities</h4>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {project.responsibilities.map((responsibility, idx) => (
                              <li key={idx}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Contact CTA */}
      <ScaleIn delay={0.2}>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always looking for interesting projects to work on. Let's discuss how I can help you bring your ideas to life.
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