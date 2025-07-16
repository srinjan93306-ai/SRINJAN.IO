import React, { useState } from 'react';
import { Header } from './components/Header';
import { CodeEditor } from './components/CodeEditor';
import { OutputPanel } from './components/OutputPanel';
import { DSAReference } from './components/DSAReference';
import { LanguageConverter } from './components/LanguageConverter';
import { QuickStart } from './components/QuickStart';
import { MultilingualExamples } from './components/MultilingualExamples';
import { translateCode } from './utils/languageTranslations';

function App() {
  const [activeTab, setActiveTab] = useState<'editor' | 'dsa' | 'converter' | 'quickstart' | 'multilingual'>('editor');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('srinjan');
  const [humanLanguage, setHumanLanguage] = useState('en');

  const runCode = () => {
    // Simulate code execution with SRINJAN syntax
    const lines = code.split('\n');
    let result = '';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += content.replace(/['"]/g, '') + '\n';
      } else if (trimmed.startsWith('INPUT BY USER')) {
        result += 'User input received\n';
      } else if (trimmed.startsWith('CALCULATE')) {
        result += 'Calculation executed\n';
      } else if (trimmed.startsWith('REPEAT')) {
        result += 'Loop executed\n';
      } else if (trimmed.startsWith('IF')) {
        result += 'Condition checked\n';
      }
    });
    
    setOutput(result || 'Code executed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        selectedLanguage={humanLanguage}
        onLanguageChange={setHumanLanguage}
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap space-x-1 mb-6 bg-gray-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'editor' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Code Editor
          </button>
          <button
            onClick={() => setActiveTab('dsa')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'dsa' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            DSA Reference
          </button>
          <button
            onClick={() => setActiveTab('converter')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'converter' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Language Converter
          </button>
          <button
            onClick={() => setActiveTab('multilingual')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'multilingual' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Universal Languages
          </button>
          <button
            onClick={() => setActiveTab('quickstart')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'quickstart' 
                ? 'bg-indigo-600 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            Quick Start
          </button>
        </div>

        {/* Main Content */}
        {activeTab === 'editor' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeEditor 
              code={code} 
              setCode={setCode} 
              onRun={runCode}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              humanLanguage={humanLanguage}
            />
            <OutputPanel output={output} />
          </div>
        )}
        
        {activeTab === 'dsa' && <DSAReference />}
        {activeTab === 'converter' && <LanguageConverter />}
        {activeTab === 'multilingual' && <MultilingualExamples />}
        {activeTab === 'quickstart' && <QuickStart />}
      </div>
    </div>
  );
}

export default App;