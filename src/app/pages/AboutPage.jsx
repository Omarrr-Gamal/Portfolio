import React from 'react';
import { motion } from 'motion/react';
import { useData } from '../contexts/DataContext';
import { Code, Palette, Zap, Award } from 'lucide-react';

export const AboutPage = () => {
  const { aboutData, skills } = useData();
  const { projects } = useData();


  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful user interfaces'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed and efficiency'
    },
    {
      icon: Award,
      title: 'Best Practices',
      description: 'Following industry standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my journey and expertise
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Story
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {aboutData.text}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Years Experience</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Building web apps</p>
                </div>
              </div>
              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{projects.length}+</span>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Projects Completed</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Across various domains</p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{skills.length}+</span>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Technologies</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tools & frameworks</p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all flex items-start gap-4"
              >
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-xl"
              >
                <div className="text-center">
                  {skill.icon?.includes('/') ? (
                    <img src={skill.icon} className="w-10 h-10 mx-auto mb-1" />
                  ) : (
                    <div className="text-4xl mb-1">{skill.icon}</div>
                  )}

                  <p className="text-xs font-medium">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
