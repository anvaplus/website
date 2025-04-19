'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItemProps {
  date: string
  title: string
  company: string
  location: string
  description: string[]
}

export const VerticalTimeline: React.FC<{ items: TimelineItemProps[] }> = ({ items }) => {
  return (
    <div className="relative container mx-auto w-full py-10">
      {/* Continuous vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-1 bg-blue-500 dark:bg-blue-400"></div>
      
      <div className="space-y-20">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex w-full overflow-visible"
          >
            {/* Dot - centered on the line */}
            <div className="absolute left-3.5 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border-4 border-blue-500 dark:border-blue-400 rounded-full"></div>

            {/* Content card */}
            <div className="ml-12 w-full p-6 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.date}</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{item.company}, {item.location}</p>
              <ul className="list-disc pl-5 space-y-1">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400">{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}