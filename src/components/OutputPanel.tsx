import React from 'react';
import { Terminal, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';

interface OutputPanelProps {
  output: string;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({ output }) => {
  const hasOutput = output.trim().length > 0;
  const executionTime = "0.001s";
  const memoryUsage = "2.4 KB";

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Terminal className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">Output Console</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{executionTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>{memoryUsage}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96 bg-gray-900 relative">
        {hasOutput ? (
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Execution Successful</span>
            </div>
            <pre className="text-white font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Terminal className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No output yet</p>
              <p className="text-gray-500 text-xs mt-1">Run your code to see results here</p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-4">
            <span>Status: {hasOutput ? 'Completed' : 'Ready'}</span>
            <span>Language: Natural syntax</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Memory: {memoryUsage}</span>
            <span>Time: {executionTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};