import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange
}) => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', native: 'Español' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', native: 'हिंदी' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩', native: 'বাংলা' },
    { code: 'fr', name: 'French', flag: '🇫🇷', native: 'Français' },
    { code: 'de', name: 'German', flag: '🇩🇪', native: 'Deutsch' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', native: '日本語' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷', native: '한국어' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳', native: '中文' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦', native: 'العربية' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺', native: 'Русский' },
    { code: 'pt', name: 'Portuguese', flag: '🇧🇷', native: 'Português' },
    { code: 'it', name: 'Italian', flag: '🇮🇹', native: 'Italiano' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷', native: 'Türkçe' },
    { code: 'nl', name: 'Dutch', flag: '🇳🇱', native: 'Nederlands' },
    { code: 'sv', name: 'Swedish', flag: '🇸🇪', native: 'Svenska' },
    { code: 'pl', name: 'Polish', flag: '🇵🇱', native: 'Polski' },
    { code: 'th', name: 'Thai', flag: '🇹🇭', native: 'ไทย' },
    { code: 'vi', name: 'Vietnamese', flag: '🇻🇳', native: 'Tiếng Việt' },
    { code: 'id', name: 'Indonesian', flag: '🇮🇩', native: 'Bahasa Indonesia' }
  ];

  const currentLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="font-medium">{currentLang.native}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      <div className="absolute top-full left-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 min-w-64 max-h-80 overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="p-2">
          <div className="text-xs text-gray-400 px-3 py-2 font-semibold">Choose Your Language</div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-left ${
                selectedLanguage === lang.code
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.native}</div>
                <div className="text-xs opacity-75">{lang.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};