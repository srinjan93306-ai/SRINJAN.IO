import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Square, RotateCcw, Download, Copy, CheckCircle, AlertCircle, Clock, Zap, Activity, Cpu, HardDrive, Send } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  isRunning?: boolean;
  executionTime?: string;
  memoryUsage?: string;
  exitCode?: number;
  onUserInput?: (input: string) => void;
  waitingForInput?: boolean;
  inputPrompt?: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ 
  output, 
  isRunning = false,
  executionTime = "0.001s",
  memoryUsage = "2.4 KB",
  exitCode = 0,
  onUserInput,
  waitingForInput = false,
  inputPrompt = ""
}) => {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showInputField, setShowInputField] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (output && output.trim().length > 0) {
      simulateTyping(output);
    }
  }, [output]);

  useEffect(() => {
    if (waitingForInput) {
      setShowInputField(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [waitingForInput]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory, currentLine, showInputField]);

  const simulateTyping = (text: string) => {
    setIsTyping(true);
    setTerminalHistory([]);
    setCurrentLine('');
    
    const lines = text.split('\n');
    let lineIndex = 0;
    
    const typeLine = () => {
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex < line.length) {
            setCurrentLine(prev => prev + line[charIndex]);
            charIndex++;
            setTimeout(typeChar, Math.random() * 20 + 5); // Faster typing
          } else {
            setTerminalHistory(prev => [...prev, currentLine]);
            setCurrentLine('');
            lineIndex++;
            setTimeout(typeLine, 50);
          }
        };
        
        typeChar();
      } else {
        setIsTyping(false);
      }
    };
    
    setTimeout(typeLine, 100);
  };

  const handleUserInputSubmit = () => {
    if (userInput.trim() && onUserInput) {
      // Add user input to terminal history
      setTerminalHistory(prev => [...prev, `📝 User Input: ${userInput}`]);
      onUserInput(userInput);
      setUserInput('');
      setShowInputField(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUserInputSubmit();
    }
  };

  const clearTerminal = () => {
    setTerminalHistory([]);
    setCurrentLine('');
    setShowInputField(false);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(terminalHistory.join('\n'));
  };

  const downloadOutput = () => {
    const blob = new Blob([terminalHistory.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'srinjan_output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = () => {
    if (isRunning || isTyping) return 'text-yellow-400';
    if (waitingForInput) return 'text-blue-400';
    if (exitCode === 0) return 'text-green-400';
    return 'text-red-400';
  };

  const getStatusText = () => {
    if (isRunning) return 'Running...';
    if (isTyping) return 'Executing...';
    if (waitingForInput) return 'Waiting for Input';
    if (exitCode === 0) return 'Completed Successfully';
    return 'Error';
  };

  const getStatusIcon = () => {
    if (isRunning || isTyping) return <Activity className="w-4 h-4 animate-pulse" />;
    if (waitingForInput) return <Terminal className="w-4 h-4 animate-pulse text-blue-400" />;
    if (exitCode === 0) return <CheckCircle className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer transition-colors"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 cursor-pointer transition-colors"></div>
            </div>
            <Terminal className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">SRINJAN Interactive Terminal</h2>
            <div className={`flex items-center space-x-2 text-sm ${getStatusColor()}`}>
              {getStatusIcon()}
              <span className="font-medium">{getStatusText()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={clearTerminal}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              title="Clear Terminal"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={copyOutput}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              title="Copy Output"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={downloadOutput}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              title="Download Output"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* System Information Bar */}
      <div className="bg-gray-850 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-blue-400">
              <Clock className="w-3 h-3" />
              <span>Execution: {executionTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <HardDrive className="w-3 h-3" />
              <span>Memory: {memoryUsage}</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Cpu className="w-3 h-3" />
              <span>Exit Code: {exitCode}</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Zap className="w-3 h-3" />
              <span>SRINJAN Runtime v3.0</span>
            </div>
          </div>
          <div className="text-gray-400">
            Lines: {terminalHistory.length} | Interactive Mode: ON
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-96 bg-black p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {terminalHistory.length === 0 && !currentLine && !isTyping && !showInputField && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Terminal className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg mb-2">🚀 SRINJAN Interactive Terminal Ready</p>
            <p className="text-sm mb-4">Execute your code to see beautiful, interactive results</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-center">
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-green-400 mb-1">✨ Real-time execution</div>
                <div>Watch your code come to life</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-blue-400 mb-1">📝 Interactive input</div>
                <div>Type directly in terminal</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-purple-400 mb-1">🎨 Beautiful formatting</div>
                <div>Professional output display</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-yellow-400 mb-1">🤖 AI assistance</div>
                <div>Get help when you need it</div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal Prompt */}
        {(terminalHistory.length > 0 || currentLine || isTyping || showInputField) && (
          <div className="mb-2">
            <span className="text-green-400">srinjan@terminal</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~/project</span>
            <span className="text-white">$ </span>
            <span className="text-yellow-400">srinjan run main.srj</span>
          </div>
        )}

        {/* Output Lines */}
        {terminalHistory.map((line, index) => (
          <div key={index} className="mb-1 flex">
            <span className="text-gray-500 mr-3 select-none">{String(index + 1).padStart(3, '0')}:</span>
            <span className="text-green-300 flex-1">{line}</span>
          </div>
        ))}

        {/* Current Typing Line */}
        {currentLine && (
          <div className="mb-1 flex">
            <span className="text-gray-500 mr-3 select-none">{String(terminalHistory.length + 1).padStart(3, '0')}:</span>
            <span className="text-green-300 flex-1">{currentLine}</span>
            <span className="text-green-400 animate-pulse">|</span>
          </div>
        )}

        {/* Interactive Input Field */}
        {showInputField && (
          <div className="mb-2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-blue-400">📝 {inputPrompt || "Enter your input:"}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">→</span>
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Type your input and press Enter..."
              />
              <button
                onClick={handleUserInputSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors flex items-center space-x-1"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </div>
          </div>
        )}

        {/* Typing Indicator */}
        {isTyping && !currentLine && (
          <div className="flex items-center space-x-2 text-yellow-400 mb-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span>Processing your code...</span>
          </div>
        )}

        {/* Completion Message */}
        {!isTyping && !showInputField && terminalHistory.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="flex items-center space-x-2 text-green-400 mb-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Program executed successfully! 🎉</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-blue-400 font-semibold">Execution Time</div>
                <div className="text-white">{executionTime}</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-purple-400 font-semibold">Memory Used</div>
                <div className="text-white">{memoryUsage}</div>
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <div className="text-green-400 font-semibold">Status</div>
                <div className="text-white">Success ✅</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-indigo-400">SRINJAN Interactive Runtime v3.0</span>
            <span>•</span>
            <span>World's Most Advanced Natural Language Programming</span>
            <span>•</span>
            <span>Real-time Interactive Execution</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ready for input</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};