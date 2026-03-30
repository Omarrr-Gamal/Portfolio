import React from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { LayoutDashboard, FolderOpen, User, Wrench, Palette, FileText , Contact } from 'lucide-react';

export const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/projects', icon: FolderOpen, label: 'Projects' },
    { path: '/admin/hero', icon: User, label: 'Hero Section' },
    { path: '/admin/skills', icon: Wrench, label: 'Skills' },
    { path: '/admin/theme', icon: Palette, label: 'Theme' },
    { path: '/admin/about', icon: FileText, label: 'About' },
    { path: '/admin/contact', icon: Contact, label: 'Contact' },
  ];

  return (
    <div className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Admin Panel
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Back to Site */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            ← Back to Site
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
