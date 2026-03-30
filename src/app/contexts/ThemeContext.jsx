import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [colors, setColors] = useState(() => {
    const saved = localStorage.getItem('themeColors');
    return saved ? JSON.parse(saved) : {
      primary: '#6366f1', // Indigo
      secondary: '#06b6d4', // Cyan
      bgLight: '#f9fafb',
      bgDark: '#0f172a',
    };
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('themeColors', JSON.stringify(colors));
    // Apply CSS custom properties
    document.documentElement.style.setProperty('--color-primary', colors.primary);
    document.documentElement.style.setProperty('--color-secondary', colors.secondary);
  }, [colors]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const updateColors = (newColors) => {
    setColors(prev => ({ ...prev, ...newColors }));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, colors, updateColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
