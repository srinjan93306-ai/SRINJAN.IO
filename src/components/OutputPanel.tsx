import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Square, RotateCcw, Download, Copy, CheckCircle, AlertCircle, Clock, Zap, Activity, Cpu, HardDrive } from 'lucide-react';

interface OutputPanelProps {
  output: string;
  isRunning?: boolean;
  executionTime?: string;
  memoryUsage?: string;
  exitCode?: number;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ 
  output, 
  isRunning = false,
  executionTime = "0.001s",
  memoryUsage = "2.4 KB",
  exitCode = 0
}) => {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (output && output.trim().length > 0) {
      simulateTyping(output);
    }
  }, [output]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory, currentLine]);

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
            setTimeout(typeChar, Math.random() * 30 + 10); // Random typing speed
          } else {
            setTerminalHistory(prev => [...prev, currentLine]);
            setCurrentLine('');
            lineIndex++;
            setTimeout(typeLine, 100);
          }
        };
        
        typeChar();
      } else {
        setIsTyping(false);
      }
    };
    
    setTimeout(typeLine, 200);
  };

  const clearTerminal = () => {
    setTerminalHistory([]);
    setCurrentLine('');
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
    if (exitCode === 0) return 'text-green-400';
    return 'text-red-400';
  };

  const getStatusText = () => {
    if (isRunning) return 'Running...';
    if (isTyping) return 'Executing...';
    if (exitCode === 0) return 'Completed Successfully';
    return 'Error';
  };

  const getStatusIcon = () => {
    if (isRunning || isTyping) return <Activity className="w-4 h-4 animate-pulse" />;
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
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <Terminal className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">SRINJAN Terminal</h2>
            <div className={`flex items-center space-x-2 text-sm ${getStatusColor()}`}>
              {getStatusIcon()}
              <span>{getStatusText()}</span>
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
          </div>
          <div className="text-gray-400">
            Lines: {terminalHistory.length} | Chars: {terminalHistory.join('\n').length}
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-96 bg-black p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {terminalHistory.length === 0 && !currentLine && !isTyping && (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Terminal className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg mb-2">🚀 SRINJAN Terminal Ready</p>
            <p className="text-sm">Execute your code to see beautiful results here</p>
            <div className="mt-4 text-xs">
              <p>✨ Real-time execution with emojis</p>
              <p>🎨 Beautiful output formatting</p>
              <p>📊 Complete program flow visualization</p>
              <p>🤖 AI assistant for help</p>
            </div>
          </div>
        )}

        {/* Terminal Prompt */}
        <div className="mb-2">
          <span className="text-green-400">srinjan@terminal</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~/project</span>
          <span className="text-white">$ </span>
          <span className="text-yellow-400">srinjan run main.srj</span>
        </div>

        {/* Output Lines */}
        {terminalHistory.map((line, index) => (
          <div key={index} className="mb-1">
            <span className="text-gray-400 mr-2">{String(index + 1).padStart(3, '0')}:</span>
            <span className="text-green-300">{line}</span>
          </div>
        ))}

        {/* Current Typing Line */}
        {currentLine && (
          <div className="mb-1">
            <span className="text-gray-400 mr-2">{String(terminalHistory.length + 1).padStart(3, '0')}:</span>
            <span className="text-green-300">{currentLine}</span>
            <span className="text-green-400 animate-pulse">|</span>
          </div>
        )}

        {/* Typing Indicator */}
        {isTyping && !currentLine && (
          <div className="flex items-center space-x-2 text-yellow-400">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span>Processing...</span>
          </div>
        )}

        {/* Completion Message */}
        {!isTyping && terminalHistory.length > 0 && (
          <div className="mt-4 pt-2 border-t border-gray-700">
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span>Program executed successfully</span>
            </div>
            <div className="text-gray-400 text-xs mt-1">
              Execution completed in {executionTime} • Memory used: {memoryUsage}
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span>SRINJAN Runtime v2.0</span>
            <span>•</span>
            <span>Natural Language Execution Engine</span>
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