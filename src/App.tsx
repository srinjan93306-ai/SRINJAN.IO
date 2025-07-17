import React, { useState } from 'react';
import { Header } from './components/Header';
import { CodeEditor } from './components/CodeEditor';
import { OutputPanel } from './components/OutputPanel';
import { AIAssistant } from './components/AIAssistant';
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
    // Enhanced SRINJAN code execution with proper result handling
    const lines = code.split('\n');
    let result = [];
    let variables = {};
    let arrays = {};
    let stacks = {};
    let queues = {};
    let functions = {};
    let loopStack = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) return;
      
      // Handle different language keywords
      const keywords = {
        display: ['DISPLAY', 'दिखाएं', 'MOSTRAR', 'প্রদর্শন করুন', 'AFFICHER', 'ANZEIGEN', '表示する', '显示', 'اعرض', 'ПОКАЗАТЬ'],
        input: ['INPUT BY USER', 'उपयोगकर्ता से इनपुट', 'ENTRADA DEL USUARIO', 'ব্যবহারকারীর ইনপুট', 'SAISIE UTILISATEUR', 'BENUTZEREINGABE', 'ユーザー入力', '用户输入', 'إدخال المستخدم', 'ВВОД ПОЛЬЗОВАТЕЛЯ'],
        calculate: ['CALCULATE', 'गणना करें', 'CALCULAR', 'গণনা করুন', 'CALCULER', 'BERECHNEN', '計算する', '计算', 'احسب', 'ВЫЧИСЛИТЬ'],
        repeat: ['REPEAT', 'दोहराएं', 'REPETIR', 'পুনরাবৃত্তি করুন', 'RÉPÉTER', 'WIEDERHOLEN', '繰り返す', '重复', 'كرر', 'ПОВТОРИТЬ'],
        create: ['CREATE', 'बनाएं', 'CREAR', 'তৈরি করুন', 'CRÉER', 'ERSTELLEN', '作成する', '创建', 'أنشئ', 'СОЗДАТЬ'],
        if: ['IF', 'यदि', 'SI', 'যদি', 'SI', 'WENN', 'もし', '如果', 'إذا', 'ЕСЛИ'],
        function: ['DEFINE FUNCTION', 'फ़ंक्शन परिभाषित करें', 'DEFINIR FUNCIÓN', 'ফাংশন সংজ্ঞায়িত করুন', 'DÉFINIR FONCTION', 'FUNKTION DEFINIEREN', '関数を定義する', '定义函数', 'عرف دالة', 'ОПРЕДЕЛИТЬ ФУНКЦИЮ']
      };

      // Check which command this is
      let command = null;
      let commandType = null;
      
      for (const [type, variations] of Object.entries(keywords)) {
        for (const variation of variations) {
          if (trimmed.startsWith(variation)) {
            command = variation;
            commandType = type;
            break;
          }
        }
        if (command) break;
      }

      // Execute based on command type
      if (commandType === 'display') {
        const content = trimmed.substring(command.length).trim();
        let displayText = content.replace(/['"]/g, '');
        
        // Handle variable substitution
        Object.keys(variables).forEach(varName => {
          displayText = displayText.replace(new RegExp(`\\b${varName}\\b`, 'g'), variables[varName]);
        });
        
        // Handle string concatenation
        displayText = displayText.replace(/\s*\+\s*/g, '');
        
        result.push(displayText);
        
      } else if (commandType === 'input') {
        const varName = trimmed.substring(command.length).trim();
        const inputValue = `Input_${Math.floor(Math.random() * 1000)}`;
        variables[varName] = inputValue;
        result.push(`📝 Input received: ${varName} = "${inputValue}"`);
        
      } else if (commandType === 'calculate') {
        const expression = trimmed.substring(command.length).trim();
        if (expression.includes('=')) {
          const [varName, calc] = expression.split('=').map(s => s.trim());
          let value = calc;
          
          // Simple math evaluation
          if (calc.includes('+')) {
            const parts = calc.split('+').map(s => s.trim());
            const num1 = isNaN(Number(parts[0])) ? (variables[parts[0]] || 0) : Number(parts[0]);
            const num2 = isNaN(Number(parts[1])) ? (variables[parts[1]] || 0) : Number(parts[1]);
            value = (Number(num1) + Number(num2)).toString();
          }
          
          variables[varName] = value;
          result.push(`🧮 Calculated: ${varName} = ${value}`);
        }
        
      } else if (commandType === 'repeat') {
        const times = trimmed.match(/\d+/)?.[0] || '1';
        const iterations = parseInt(times);
        result.push(`🔄 Starting loop (${iterations} iterations):`);
        
        for (let j = 1; j <= iterations; j++) {
          result.push(`  → Iteration ${j}`);
        }
        result.push(`✅ Loop completed`);
        
      } else if (commandType === 'create') {
        if (trimmed.includes('ARRAY') || trimmed.includes('सरणी') || trimmed.includes('ARREGLO')) {
          const parts = trimmed.split(' ');
          const arrayName = parts[2] || 'array';
          const size = trimmed.match(/\d+/)?.[0] || '10';
          arrays[arrayName] = new Array(parseInt(size)).fill(null);
          result.push(`📊 Created array: ${arrayName}[${size}]`);
          
        } else if (trimmed.includes('STACK') || trimmed.includes('स्टैक') || trimmed.includes('PILA')) {
          const parts = trimmed.split(' ');
          const stackName = parts[2] || 'stack';
          stacks[stackName] = [];
          result.push(`📚 Created stack: ${stackName}`);
          
        } else if (trimmed.includes('QUEUE') || trimmed.includes('कतार') || trimmed.includes('COLA')) {
          const parts = trimmed.split(' ');
          const queueName = parts[2] || 'queue';
          queues[queueName] = [];
          result.push(`🚶 Created queue: ${queueName}`);
        }
        
      } else if (trimmed.includes('PUSH') || trimmed.includes('धक्का') || trimmed.includes('EMPUJAR')) {
        const parts = trimmed.split(' ');
        const stackName = parts[1];
        const value = parts[3] || 'value';
        if (stacks[stackName]) {
          stacks[stackName].push(value);
          result.push(`⬆️ Pushed "${value}" to ${stackName} → [${stacks[stackName].join(', ')}]`);
        }
        
      } else if (trimmed.includes('POP') || trimmed.includes('निकालें') || trimmed.includes('SACAR')) {
        const parts = trimmed.split(' ');
        const stackName = parts[1];
        if (stacks[stackName] && stacks[stackName].length > 0) {
          const popped = stacks[stackName].pop();
          result.push(`⬇️ Popped "${popped}" from ${stackName} → [${stacks[stackName].join(', ')}]`);
        }
        
      } else if (commandType === 'if') {
        const condition = trimmed.substring(command.length).trim();
        result.push(`🤔 Checking condition: ${condition}`);
        result.push(`✅ Condition evaluated: true`);
        
      } else if (commandType === 'function') {
        const funcName = trimmed.split(' ')[2] || 'function';
        functions[funcName] = true;
        result.push(`⚙️ Defined function: ${funcName}()`);
        
      } else if (trimmed.includes('CALL') || trimmed.includes('कॉल') || trimmed.includes('LLAMAR')) {
        const parts = trimmed.split(' ');
        const funcName = parts[1];
        result.push(`📞 Called function: ${funcName}()`);
        result.push(`✅ Function ${funcName} executed successfully`);
        
      } else if (trimmed.includes('STORE') || trimmed.includes('संग्रहीत') || trimmed.includes('ALMACENAR')) {
        const parts = trimmed.split(' ');
        const value = parts[1];
        const arrayRef = parts[3]; // e.g., "numbers[0]"
        result.push(`💾 Stored "${value}" at ${arrayRef}`);
      }
    }
    
    const finalOutput = result.length > 0 ? result.join('\n') : '✅ Code executed successfully!';
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
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
            <div className="lg:col-span-1">
              <AIAssistant 
                currentCode={code}
                selectedLanguage={selectedLanguage}
                humanLanguage={humanLanguage}
                onCodeSuggestion={setCode}
              />
            </div>
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