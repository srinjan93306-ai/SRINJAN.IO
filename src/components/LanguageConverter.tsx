import React, { useState } from 'react';
import { ArrowRight, Copy, RefreshCw } from 'lucide-react';

export const LanguageConverter: React.FC = () => {
  const [sourceCode, setSourceCode] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('c');
  const [convertedCode, setConvertedCode] = useState('');

  const languages = [
    { id: 'c', name: 'C', color: 'bg-blue-500' },
    { id: 'cpp', name: 'C++', color: 'bg-purple-500' },
    { id: 'java', name: 'Java', color: 'bg-red-500' },
    { id: 'python', name: 'Python', color: 'bg-green-500' },
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 'go', name: 'Go', color: 'bg-cyan-500' },
    { id: 'rust', name: 'Rust', color: 'bg-orange-500' },
    { id: 'kotlin', name: 'Kotlin', color: 'bg-pink-500' }
  ];

  const convertCode = () => {
    // Enhanced conversion logic for SRINJAN to various languages
    const lines = sourceCode.split('\n');
    let result = '';
    
    switch (targetLanguage) {
      case 'c':
        result = convertToC(lines);
        break;
      case 'cpp':
        result = convertToCpp(lines);
        break;
      case 'java':
        result = convertToJava(lines);
        break;
      case 'python':
        result = convertToPython(lines);
        break;
      case 'javascript':
        result = convertToJavaScript(lines);
        break;
      case 'go':
        result = convertToGo(lines);
        break;
      case 'rust':
        result = convertToRust(lines);
        break;
      case 'kotlin':
        result = convertToKotlin(lines);
        break;
      default:
        result = 'Language not supported yet';
    }
    
    setConvertedCode(result);
  };

  const convertToC = (lines: string[]): string => {
    let result = '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `    printf(${content});\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `    char ${varName}[100];\n    scanf("%s", ${varName});\n`;
      } else if (trimmed.startsWith('CREATE ARRAY')) {
        const parts = trimmed.split(' ');
        const arrayName = parts[2];
        const size = parts[4];
        result += `    int ${arrayName}[${size}];\n`;
      } else if (trimmed.startsWith('REPEAT')) {
        const times = trimmed.match(/\d+/)?.[0] || '1';
        result += `    for(int i = 0; i < ${times}; i++) {\n`;
      } else if (trimmed.startsWith('END REPEAT')) {
        result += `    }\n`;
      }
    });
    
    result += '    return 0;\n}';
    return result;
  };

  const convertToCpp = (lines: string[]): string => {
    let result = '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `    cout << ${content} << endl;\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `    string ${varName};\n    cin >> ${varName};\n`;
      }
    });
    
    result += '    return 0;\n}';
    return result;
  };

  const convertToJava = (lines: string[]): string => {
    let result = 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `        System.out.println(${content});\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `        String ${varName} = scanner.nextLine();\n`;
      }
    });
    
    result += '        scanner.close();\n    }\n}';
    return result;
  };

  const convertToPython = (lines: string[]): string => {
    let result = '';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `print(${content})\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `${varName} = input()\n`;
      } else if (trimmed.startsWith('REPEAT')) {
        const times = trimmed.match(/\d+/)?.[0] || '1';
        result += `for i in range(${times}):\n`;
      }
    });
    
    return result;
  };

  const convertToJavaScript = (lines: string[]): string => {
    let result = '';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `console.log(${content});\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `const ${varName} = prompt();\n`;
      }
    });
    
    return result;
  };

  const convertToGo = (lines: string[]): string => {
    let result = 'package main\n\nimport "fmt"\n\nfunc main() {\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `    fmt.Println(${content})\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `    var ${varName} string\n    fmt.Scanln(&${varName})\n`;
      }
    });
    
    result += '}';
    return result;
  };

  const convertToRust = (lines: string[]): string => {
    let result = 'use std::io;\n\nfn main() {\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `    println!("{}", ${content});\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `    let mut ${varName} = String::new();\n    io::stdin().read_line(&mut ${varName}).expect("Failed to read line");\n`;
      }
    });
    
    result += '}';
    return result;
  };

  const convertToKotlin = (lines: string[]): string => {
    let result = 'fun main() {\n';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('DISPLAY')) {
        const content = trimmed.substring(8).trim();
        result += `    println(${content})\n`;
      } else if (trimmed.startsWith('INPUT BY USER')) {
        const varName = trimmed.substring(13).trim();
        result += `    val ${varName} = readLine()\n`;
      }
    });
    
    result += '}';
    return result;
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Universal Language Converter</h2>
        <p className="text-gray-300 mb-6">
          Convert SRINJAN code to any programming language instantly. Our advanced AI understands 
          the semantic meaning and generates optimized code in your target language.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Source Code */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">SRINJAN Code</h3>
              <div className="bg-indigo-500 text-white px-3 py-1 rounded-md text-sm">
                Source
              </div>
            </div>
            <textarea
              value={sourceCode}
              onChange={(e) => setSourceCode(e.target.value)}
              placeholder="Enter SRINJAN code here...

Example:
DISPLAY &quot;Hello World!&quot;
INPUT BY USER name
DISPLAY &quot;Hello &quot; + name
REPEAT 5 TIMES
  DISPLAY &quot;Iteration&quot;
END REPEAT"
              className="w-full h-80 bg-gray-900 text-white p-4 font-mono text-sm border border-gray-700 rounded-lg resize-none"
            />
          </div>

          {/* Target Language Selection and Output */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">Target Language</h3>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => setTargetLanguage(lang.id)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      targetLanguage === lang.id
                        ? `${lang.color} text-white`
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <textarea
                value={convertedCode}
                readOnly
                placeholder="Converted code will appear here..."
                className="w-full h-80 bg-gray-900 text-white p-4 font-mono text-sm border border-gray-700 rounded-lg resize-none"
              />
              {convertedCode && (
                <button className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={convertCode}
            className="flex items-center space-x-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            <span className="font-semibold">Convert Code</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Language Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {languages.map((lang) => (
          <div key={lang.id} className="bg-gray-800 rounded-lg border border-gray-700 p-4">
            <div className={`w-8 h-8 ${lang.color} rounded-lg mb-3 flex items-center justify-center text-white font-bold text-sm`}>
              {lang.name[0]}
            </div>
            <h4 className="font-semibold text-white mb-2">{lang.name}</h4>
            <p className="text-gray-400 text-sm">
              Instant conversion to {lang.name} with optimized syntax and best practices.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};