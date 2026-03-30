import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useData } from '../contexts/DataContext';
import { Save } from 'lucide-react';

export const AdminAbout = () => {
  const { aboutData, updateAbout } = useData();
  const [text, setText] = useState(aboutData.text);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAbout(text);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          About Section
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Edit the about section content
        </p>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              About Text
            </label>
            <textarea
              required
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              placeholder="Tell your story..."
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {text.length} characters
            </p>
          </div>

          {/* Save Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Save className="w-5 h-5" />
            {saved ? 'Saved!' : 'Save Changes'}
          </motion.button>

          {saved && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center"
            >
              <p className="text-green-700 dark:text-green-300 font-medium">
                Changes saved successfully!
              </p>
            </motion.div>
          )}
        </form>
      </motion.div>

      {/* Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Preview
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
