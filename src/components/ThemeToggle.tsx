import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: string;
  toggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => (
  <div className="flex items-center space-x-3">
    <Sun className={`w-5 h-5 transition-colors ${darkMode === "dark" ? 'text-gray-500' : 'text-yellow-500'}`} />
    <button
      onClick={toggleDarkMode}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        darkMode === "dark"  ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          darkMode === "dark"  ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
    <Moon className={`w-5 h-5 transition-colors ${darkMode === "dark"  ? 'text-blue-400' : 'text-gray-400'}`} />
  </div>
);