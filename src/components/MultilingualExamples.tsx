import React, { useState } from 'react';
import { Globe, Code, Play, Copy } from 'lucide-react';
import { getTranslation, translateCode } from '../utils/languageTranslations';

export const MultilingualExamples: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState('hello-world');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', flag: '🇧🇩' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'ru', name: 'Russian', flag: '🇷🇺' }
  ];

  const examples = {
    'hello-world': {
      title: 'Hello World Program',
      description: 'Basic greeting program in your native language',
      getCode: (lang: string) => getTranslation(lang, 'helloWorld')
    },
    'user-input': {
      title: 'User Input & Output',
      description: 'Get user input and display personalized message',
      getCode: (lang: string) => getTranslation(lang, 'userInput')
    },
    'loop-example': {
      title: 'Loop Structure',
      description: 'Repeat operations multiple times',
      getCode: (lang: string) => getTranslation(lang, 'loop')
    },
    'data-structures': {
      title: 'Data Structures',
      description: 'Work with arrays, stacks, and queues',
      getCode: (lang: string) => `${getTranslation(lang, 'create')} ${getTranslation(lang, 'array')} numbers SIZE 5
${getTranslation(lang, 'create')} ${getTranslation(lang, 'stack')} myStack
${getTranslation(lang, 'create')} ${getTranslation(lang, 'queue')} myQueue

${getTranslation(lang, 'push')} myStack VALUE 10
${getTranslation(lang, 'enqueue')} myQueue VALUE 20
${getTranslation(lang, 'display')} ${getTranslation(lang, 'pop')} myStack`
    },
    'algorithms': {
      title: 'Algorithm Implementation',
      description: 'Implement sorting and searching algorithms',
      getCode: (lang: string) => `${getTranslation(lang, 'function')} bubbleSort(arr)
  ${getTranslation(lang, 'repeat')} FOR i FROM 0 TO SIZE OF arr - 1
    ${getTranslation(lang, 'repeat')} FOR j FROM 0 TO SIZE OF arr - i - 2
      ${getTranslation(lang, 'if')} arr[j] > arr[j + 1]
        SWAP arr[j] WITH arr[j + 1]
      ${getTranslation(lang, 'endif')}
    ${getTranslation(lang, 'endrepeat')}
  ${getTranslation(lang, 'endrepeat')}
${getTranslation(lang, 'endfunction')}`
    }
  };

  const currentExample = examples[selectedExample as keyof typeof examples];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <Globe className="w-6 h-6 mr-3" />
              Choose Your Language & Start Coding
            </h2>
            <p className="text-gray-300">First select your preferred language, then write code naturally in that language!</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Available Languages</div>
            <div className="text-2xl font-bold text-white">20+</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
        {/* Language Selector */}
        <div className="bg-gray-750 border-r border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Choose Language</h3>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center ${
                  selectedLanguage === lang.code
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="text-lg mr-3">{lang.flag}</span>
                <div>
                  <div className="font-medium">{lang.name}</div>
                  <div className="text-xs opacity-75">{lang.code.toUpperCase()}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Example Selector */}
        <div className="bg-gray-750 border-r border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Examples</h3>
          <div className="space-y-2">
            {Object.entries(examples).map(([key, example]) => (
              <button
                key={key}
                onClick={() => setSelectedExample(key)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                  selectedExample === key
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="font-medium text-sm">{example.title}</div>
                <div className="text-xs opacity-75 mt-1">{example.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Code Display */}
        <div className="lg:col-span-2 p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">
                {currentExample.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{languages.find(l => l.code === selectedLanguage)?.flag}</span>
                <span className="text-sm text-gray-400">{languages.find(l => l.code === selectedLanguage)?.name}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{currentExample.description}</p>
          </div>
          
          <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-white">SRINJAN Code</span>
              </div>
              <button className="p-1 text-gray-400 hover:text-white transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4">
              <pre className="text-indigo-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {currentExample.getCode(selectedLanguage)}
              </pre>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-3">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              <Play className="w-4 h-4" />
              <span className="font-semibold">Execute Code</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Globe className="w-4 h-4" />
              <span>Translate to Other Languages</span>
            </button>
          </div>
        </div>
      </div>

      {/* Language Comparison */}
      <div className="bg-gray-750 border-t border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Same Logic, Different Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.slice(0, 4).map((lang) => (
            <div key={lang.code} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-white">{lang.name}</span>
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {getTranslation(lang.code, 'display')} "Hello!"
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};