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
    let result = [];
    let variables = {};
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;
      
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim().replace(/['"]/g, '');
        // Handle variable substitution
        let output = content;
        Object.keys(variables).forEach(varName => {
          output = output.replace(new RegExp(`\\b${varName}\\b`, 'g'), variables[varName]);
        });
        result.push(output);
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        variables[varName] = 'UserInput';
        result.push(`Input received for variable: ${varName}`);
      } else if (trimmed.startsWith('CALCULATE')) {
        const expression = trimmed.substring(9).trim();
        result.push(`Calculation: ${expression}`);
      } else if (trimmed.startsWith('REPEAT')) {
        const times = trimmed.match(/\d+/)?.[0] || '1';
        result.push(`Starting loop (${times} iterations)`);
        for (let i = 1; i <= parseInt(times); i++) {
          result.push(`  Iteration ${i}`);
        }
        result.push('Loop completed');
      } else if (trimmed.startsWith('IF')) {
        const condition = trimmed.substring(2).trim();
        result.push(`Checking condition: ${condition}`);
        result.push('Condition evaluated: true');
      } else if (trimmed.startsWith('CREATE ARRAY')) {
        const parts = trimmed.split(' ');
        const arrayName = parts[2];
        const size = parts[4] || '10';
        variables[arrayName] = `Array[${size}]`;
        result.push(`Created array: ${arrayName} with size ${size}`);
      } else if (trimmed.startsWith('CREATE STACK')) {
        const stackName = trimmed.split(' ')[2];
        variables[stackName] = 'Stack[]';
        result.push(`Created stack: ${stackName}`);
      } else if (trimmed.startsWith('PUSH')) {
        const parts = trimmed.split(' ');
        const stackName = parts[1];
        const value = parts[3] || 'value';
        result.push(`Pushed ${value} to ${stackName}`);
      } else if (trimmed.startsWith('POP')) {
        const stackName = trimmed.split(' ')[1];
        result.push(`Popped value from ${stackName}`);
      } else if (trimmed.startsWith('FUNCTION')) {
        const funcName = trimmed.split(' ')[1];
        result.push(`Defined function: ${funcName}`);
      } else if (trimmed.startsWith('CALL')) {
        const funcName = trimmed.split(' ')[1];
        result.push(`Called function: ${funcName}`);
        result.push(`Function ${funcName} executed successfully`);
      }
    });
    
    const finalOutput = result.length > 0 ? result.join('\n') : 'Code executed successfully!';
    setOutput(finalOutput);
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