import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { Save, RefreshCw } from 'lucide-react';

export const AdminTheme = () => {
  const { colors, updateColors } = useTheme();
  const [formData, setFormData] = useState(colors);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateColors(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    const defaultColors = {
      primary: '#6366f1',
      secondary: '#06b6d4',
      bgLight: '#f9fafb',
      bgDark: '#0f172a',
    };
    setFormData(defaultColors);
    updateColors(defaultColors);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Theme Customization
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Customize the color scheme of your portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Color Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Color Settings
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Primary Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Color (Indigo/Purple)
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  name="primary"
                  value={formData.primary}
                  onChange={handleChange}
                  className="w-20 h-12 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={formData.primary}
                  onChange={(e) => handleChange({ target: { name: 'primary', value: e.target.value } })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono"
                  placeholder="#6366f1"
                />
              </div>
              <div
                className="mt-2 h-12 rounded-lg"
                style={{ backgroundColor: formData.primary }}
              />
            </div>

            {/* Secondary Color */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Secondary Color (Cyan/Blue)
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  name="secondary"
                  value={formData.secondary}
                  onChange={handleChange}
                  className="w-20 h-12 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={formData.secondary}
                  onChange={(e) => handleChange({ target: { name: 'secondary', value: e.target.value } })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono"
                  placeholder="#06b6d4"
                />
              </div>
              <div
                className="mt-2 h-12 rounded-lg"
                style={{ backgroundColor: formData.secondary }}
              />
            </div>

            {/* Light Background */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Light Mode Background
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  name="bgLight"
                  value={formData.bgLight}
                  onChange={handleChange}
                  className="w-20 h-12 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={formData.bgLight}
                  onChange={(e) => handleChange({ target: { name: 'bgLight', value: e.target.value } })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono"
                  placeholder="#f9fafb"
                />
              </div>
              <div
                className="mt-2 h-12 rounded-lg border border-gray-300"
                style={{ backgroundColor: formData.bgLight }}
              />
            </div>

            {/* Dark Background */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Dark Mode Background
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="color"
                  name="bgDark"
                  value={formData.bgDark}
                  onChange={handleChange}
                  className="w-20 h-12 rounded-lg cursor-pointer border-2 border-gray-300 dark:border-gray-600"
                />
                <input
                  type="text"
                  value={formData.bgDark}
                  onChange={(e) => handleChange({ target: { name: 'bgDark', value: e.target.value } })}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono"
                  placeholder="#0f172a"
                />
              </div>
              <div
                className="mt-2 h-12 rounded-lg border border-gray-300"
                style={{ backgroundColor: formData.bgDark }}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                onClick={handleReset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Reset
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Save className="w-5 h-5" />
                {saved ? 'Saved!' : 'Save Changes'}
              </motion.button>
            </div>

            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center"
              >
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Theme updated successfully!
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Preview
          </h2>

          <div className="space-y-4">
            {/* Gradient Button */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Gradient Button</p>
              <button
                className="px-6 py-3 rounded-lg text-white font-semibold w-full"
                style={{
                  background: `linear-gradient(to right, ${formData.primary}, ${formData.secondary})`
                }}
              >
                Sample Button
              </button>
            </div>

            {/* Primary Color Block */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Primary Color</p>
              <div
                className="h-20 rounded-lg flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: formData.primary }}
              >
                Primary
              </div>
            </div>

            {/* Secondary Color Block */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Secondary Color</p>
              <div
                className="h-20 rounded-lg flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: formData.secondary }}
              >
                Secondary
              </div>
            </div>

            {/* Text with Gradient */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Gradient Text</p>
              <h3
                className="text-3xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${formData.primary}, ${formData.secondary})`
                }}
              >
                Sample Heading
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
