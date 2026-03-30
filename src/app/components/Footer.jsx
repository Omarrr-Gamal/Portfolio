import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export const Footer = () => {

  const { contactData } = useData();

  const currentYear = new Date().getFullYear();

  const socials = contactData?.socials || {};

  return (

    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-b border-gray-200 dark:border-gray-800 pb-8">

          {/* BRAND */}

          <div>

            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>

          </div>

          {/* LINKS */}

          <div>

            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">

              {[
                { name: 'Home', path: '/' },
                { name: 'Projects', path: '/projects' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item, i) => (

                <li key={i}>

                  <Link
                    to={item.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* CONNECT */}

          <div>

            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
              Connect
            </h4>

            <div className="flex gap-4">

              {/* GITHUB */}

              <motion.a

                whileHover={{ scale: 1.2 }}

                href={socials?.github || undefined}

                target="_blank"

                rel="noopener noreferrer"

                className={`p-3 rounded-full border transition-all duration-300 shadow-sm

                ${socials?.github
                    ? 'border-gray-300 hover:border-black hover:bg-black hover:text-white cursor-pointer hover:shadow-xl'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  }`}

              >

                <Github className="w-5 h-5" />

              </motion.a>


              {/* LINKEDIN */}

              <motion.a

                whileHover={{ scale: 1.2 }}

                href={socials?.linkedin || undefined}

                target="_blank"

                rel="noopener noreferrer"

                className={`p-3 rounded-full border transition-all duration-300 shadow-sm

                ${socials?.linkedin
                    ? 'border-gray-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer hover:shadow-xl'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  }`}

              >

                <Linkedin className="w-5 h-5" />

              </motion.a>


              {/* EMAIL */}

              <motion.a

                whileHover={{ scale: 1.2 }}

                href={contactData?.email ? `mailto:${contactData.email}` : undefined}

                className={`p-3 rounded-full border transition-all duration-300 shadow-sm

                ${contactData?.email
                    ? 'border-gray-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer hover:shadow-xl'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  }`}

              >

                <Mail className="w-5 h-5" />

              </motion.a>

            </div>

          </div>

        </div>


      </div>

    </footer>

  );

};