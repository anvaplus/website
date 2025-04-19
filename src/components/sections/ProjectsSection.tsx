'use client';

import Link from 'next/link';

// Project type definition for type safety
type Project = {
  id: string;
  title: string;
  client: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
};

// Project data based on anvaplus.com
const projects = [
  {
    id: 'isms-implementation',
    title: 'ISO 27001 Certification',
    client: 'Alpian Technologies',
    description:
      'Implementation and maintenance of the Information Security Management System (ISMS) leading to successful ISO 27001 certification.',
    tags: ['ISO 27001', 'Security', 'ISMS', 'Compliance', 'Risk Assessment'],
    image: '/images/projects/project-iso27001.jpg',
    featured: true,
  },
  {
    id: 'nemo-rental-platform',
    title: 'NEMO - Long-term Rental Platform',
    client: 'ALD Automotive',
    description:
      'Development of a long-term rental platform capable of covering the entire life cycle of the vehicle, from delivery to return. Built with cloud-native technologies on Azure.',
    tags: ['Azure', 'Kubernetes', 'DevOps', 'CI/CD', 'Microservices'],
    image: '/images/projects/project-1.jpg',
    featured: true,
  },
  {
    id: 'graph-analysis',
    title: 'Graph Analysis on Transport Network',
    client: 'Vodafone',
    description:
      'Development of an AI & Advanced Data Visualization solution that allows to efficiently inspect the Client\'s Fixed Network Topology.',
    tags: ['Data Analysis', 'Network Topology', 'Visualization', 'AI'],
    image: '/images/projects/project-2.jpg',
    featured: true,
  },
  {
    id: 'argo-financial',
    title: 'ARGO - Financial Monitoring System',
    client: 'Borsa Italiana',
    description:
      'Application that monitors financial transactions and reports any illicit behavior to the relevant authorities.',
    tags: ['FinTech', 'Security', 'Monitoring', 'Compliance'],
    image: '/images/projects/project-3.jpg',
    featured: true,
  },
  {
    id: 'sls-safety',
    title: 'SLS - Laser Safety System',
    client: 'Datalogic',
    description: 'Designing and developing Graphical User Interfaces for Windows using .NET (C#), WPF, XAML, XML.',
    tags: ['.NET', 'C#', 'WPF', 'XAML', 'UI/UX'],
    image: '/images/projects/project-4.jpg',
    featured: true,
  },
  {
    id: 'jira-confluence-docker',
    title: 'Jira/Confluence on Docker',
    client: 'Internal Project',
    description:
      'A containerized deployment of Atlassian Jira and Confluence for team collaboration and project management.',
    tags: ['Docker', 'DevOps', 'Jira', 'Confluence'],
    image: '/images/projects/project-5.jpg',
    featured: false,
  },
  {
    id: 'xml-binary-converter',
    title: 'XML Binary Converter',
    client: 'Internal Project',
    description:
      'A .NET Core utility for converting between XML and binary formats, optimizing data transfer and storage.',
    tags: ['.NET Core', 'XML', 'Binary Conversion'],
    image: '/images/projects/project-6.jpg',
    featured: false,
  },
];

export default function ProjectsSection({ featured }: { featured?: boolean }) {
  // If featured is true, filter for featured projects, otherwise show all
  const projectsToShow = featured ? projects.filter((project) => project.featured) : projects;

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{featured ? 'Featured Projects' : 'All Projects'}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my recent work across cloud infrastructure, DevOps, and platform engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {featured && (
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Projects
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Header with company name in top right */}
      <div className="flex justify-end mb-4">
        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
          {project.client}
        </span>
      </div>
      
      {/* Title and description */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {project.description}
      </p>
    </div>
  );
}