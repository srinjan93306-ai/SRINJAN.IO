import React from 'react';
import { Play, Copy, Save, Settings } from 'lucide-react';
import { getTranslation } from '../utils/languageTranslations';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  onRun: () => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  humanLanguage: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  setCode,
  onRun,
  selectedLanguage,
  setSelectedLanguage,
  humanLanguage
}) => {
  const languages = [
    { id: 'srinjan', name: 'SRINJAN', color: 'bg-indigo-500' },
    { id: 'c', name: 'C', color: 'bg-blue-500' },
    { id: 'cpp', name: 'C++', color: 'bg-purple-500' },
    { id: 'java', name: 'Java', color: 'bg-red-500' },
    { id: 'python', name: 'Python', color: 'bg-green-500' },
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500' }
  ];

  const getSrinjanExamples = () => {
    return {
      hello: getTranslation(humanLanguage, 'helloWorld'),
      input: getTranslation(humanLanguage, 'userInput'),
      loop: getTranslation(humanLanguage, 'loop'),
      condition: `${getTranslation(humanLanguage, 'if')} age > 18\n  ${getTranslation(humanLanguage, 'display')} "Adult"\n${getTranslation(humanLanguage, 'otherwise')}\n  ${getTranslation(humanLanguage, 'display')} "Minor"\n${getTranslation(humanLanguage, 'endif')}`,
      array: `${getTranslation(humanLanguage, 'create')} ${getTranslation(humanLanguage, 'array')} numbers SIZE 5\n${getTranslation(humanLanguage, 'store')} 10 AT numbers[0]\n${getTranslation(humanLanguage, 'display')} numbers[0]`,
      function: `${getTranslation(humanLanguage, 'function')} calculate(x, y)\n  ${getTranslation(humanLanguage, 'return')} x + y\n${getTranslation(humanLanguage, 'endfunction')}\n\n${getTranslation(humanLanguage, 'call')} calculate(5, 3)`
    };
  };

  const srinjanExamples = getSrinjanExamples();

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold text-white">Code Editor</h2>
            <div className="flex space-x-1">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedLanguage === lang.id
                      ? `${lang.color} text-white`
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
              <Copy className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
              <Save className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {selectedLanguage === 'srinjan' && (
        <div className="bg-gray-750 px-4 py-2 border-b border-gray-700">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Quick Examples ({humanLanguage.toUpperCase()}):</span>
            {Object.entries(srinjanExamples).map(([key, example]) => (
              <button
                key={key}
                onClick={() => setCode(example)}
                className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-xs transition-colors"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={selectedLanguage === 'srinjan' ? 
            `Enter SRINJAN code in ${humanLanguage.toUpperCase()} here...\n\nExample:\n${getTranslation(humanLanguage, 'helloWorld')}\n${getTranslation(humanLanguage, 'userInput')}` :
            'Enter your code here...'
          }
          className="w-full h-96 bg-gray-800 text-white p-4 font-mono text-sm resize-none border-none outline-none"
          style={{ lineHeight: '1.5' }}
        />
        <div className="absolute top-0 right-0 p-2">
          <div className="text-xs text-gray-500">
            Lines: {code.split('\n').length} | Chars: {code.length}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 px-4 py-3 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onRun}
              className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Play className="w-4 h-4" />
              <span className="font-semibold">Execute Code</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Square className="w-4 h-4" />
              <span>Stop</span>
            </button>
            <div className="text-sm text-gray-400 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Ready to execute</span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Syntax: <span className="text-indigo-400">{languages.find(l => l.id === selectedLanguage)?.name}</span> | 
            Language: <span className="text-green-400">{humanLanguage.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};