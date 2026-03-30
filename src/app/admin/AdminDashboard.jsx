import React from 'react';
import { motion } from 'motion/react';
import { useData } from '../contexts/DataContext';
import { FolderOpen, Wrench, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export const AdminDashboard = () => {
  const { projects, skills } = useData();

  const stats = [
    {
      icon: FolderOpen,
      label: 'Total Projects',
      value: projects.length,
      color: 'from-indigo-500 to-purple-500',
      link: '/admin/projects'
    },
    {
      icon: Wrench,
      label: 'Skills & Tools',
      value: skills.length,
      color: 'from-cyan-500 to-blue-500',
      link: '/admin/skills'
    },
    {
      icon: FileText,
      label: 'Content Sections',
      value: 3,
      color: 'from-green-500 to-emerald-500',
      link: '/admin/about'
    },
    {
      icon: TrendingUp,
      label: 'Featured Projects',
      value: projects.filter(p => p.featured).length,
      color: 'from-orange-500 to-red-500',
      link: '/admin/projects'
    }
  ];

  const quickActions = [
    { label: 'Add New Project', path: '/admin/projects', color: 'indigo' },
    { label: 'Edit Hero Section', path: '/admin/hero', color: 'purple' },
    { label: 'Manage Skills', path: '/admin/skills', color: 'cyan' },
    { label: 'Customize Theme', path: '/admin/theme', color: 'pink' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your portfolio content and settings
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Link to={stat.link}>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.path}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-4 py-3 bg-${action.color}-100 dark:bg-${action.color}-900/20 text-${action.color}-700 dark:text-${action.color}-300 rounded-lg font-medium hover:bg-${action.color}-200 dark:hover:bg-${action.color}-900/30 transition-colors`}
              >
                {action.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Recent Projects
          </h2>
          <Link to="/admin/projects">
            <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium">
              View All
            </button>
          </Link>
        </div>
        <div className="space-y-3">
          {projects.slice(0, 5).map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">
              No projects yet. Create your first one!
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};
