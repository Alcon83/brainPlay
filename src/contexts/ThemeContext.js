import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('light');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userPref = window.localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia(preferDarkQuery).matches;
      const initialMode = userPref || (systemPrefersDark ? 'dark' : 'light');

      setMode(initialMode);
      setIsDarkMode(initialMode === 'dark');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(mode === 'dark');
      document.documentElement.className = mode;
    }
  }, [mode]);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    window.localStorage.setItem('theme', newMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
