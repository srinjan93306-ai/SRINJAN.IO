import React from 'react';
import { Code2, Zap, Globe } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                SRINJAN.IO
              </h1>
              <p className="text-sm text-gray-400">Simplified Coding Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Globe className="w-4 h-4 text-green-400" />
              <span>Code in Your Language</span>
            </div>
            <LanguageSelector 
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
            <div className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">
              <span className="text-sm font-medium">Get Started</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};