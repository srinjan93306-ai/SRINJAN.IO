import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Lightbulb, Code, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  codeExample?: string;
}

interface AIAssistantProps {
  currentCode: string;
  selectedLanguage: string;
  humanLanguage: string;
  onCodeSuggestion: (code: string) => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  currentCode,
  selectedLanguage,
  humanLanguage,
  onCodeSuggestion
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `Hello! I'm your SRINJAN coding assistant. I can help you write code in ${humanLanguage.toUpperCase()}, debug issues, explain concepts, and provide examples. What would you like to code today?`,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): { content: string; codeExample?: string } => {
    const message = userMessage.toLowerCase();
    
    // Code help responses
    if (message.includes('hello world') || message.includes('start') || message.includes('begin')) {
      return {
        content: `Here's a simple Hello World program in ${humanLanguage.toUpperCase()}:`,
        codeExample: getTranslation(humanLanguage, 'helloWorld')
      };
    }
    
    if (message.includes('input') || message.includes('user input')) {
      return {
        content: `To get user input and display it, use this pattern:`,
        codeExample: getTranslation(humanLanguage, 'userInput')
      };
    }
    
    if (message.includes('loop') || message.includes('repeat')) {
      return {
        content: `Here's how to create loops in SRINJAN:`,
        codeExample: getTranslation(humanLanguage, 'loop')
      };
    }
    
    if (message.includes('array') || message.includes('list')) {
      return {
        content: `To work with arrays in SRINJAN:`,
        codeExample: `${getTranslation(humanLanguage, 'create')} ${getTranslation(humanLanguage, 'array')} numbers SIZE 5
${getTranslation(humanLanguage, 'store')} 10 AT numbers[0]
${getTranslation(humanLanguage, 'store')} 20 AT numbers[1]
${getTranslation(humanLanguage, 'display')} numbers[0]`
      };
    }
    
    if (message.includes('function') || message.includes('method')) {
      return {
        content: `Here's how to create and use functions:`,
        codeExample: `${getTranslation(humanLanguage, 'function')} greet(name)
  ${getTranslation(humanLanguage, 'display')} "Hello " + name
  ${getTranslation(humanLanguage, 'return')} "Done"
${getTranslation(humanLanguage, 'endfunction')}

${getTranslation(humanLanguage, 'call')} greet("World")`
      };
    }
    
    if (message.includes('condition') || message.includes('if')) {
      return {
        content: `For conditional statements, use this structure:`,
        codeExample: `${getTranslation(humanLanguage, 'input')} age
${getTranslation(humanLanguage, 'if')} age >= 18
  ${getTranslation(humanLanguage, 'display')} "Adult"
${getTranslation(humanLanguage, 'otherwise')}
  ${getTranslation(humanLanguage, 'display')} "Minor"
${getTranslation(humanLanguage, 'endif')}`
      };
    }
    
    if (message.includes('stack') || message.includes('push') || message.includes('pop')) {
      return {
        content: `Here's how to work with stacks:`,
        codeExample: `${getTranslation(humanLanguage, 'create')} ${getTranslation(humanLanguage, 'stack')} myStack
${getTranslation(humanLanguage, 'push')} myStack VALUE 10
${getTranslation(humanLanguage, 'push')} myStack VALUE 20
${getTranslation(humanLanguage, 'display')} ${getTranslation(humanLanguage, 'pop')} myStack`
      };
    }
    
    if (message.includes('error') || message.includes('not working') || message.includes('help')) {
      return {
        content: `I can help debug your code! Common issues:
        
1. **Syntax**: Make sure you're using the correct SRINJAN keywords
2. **Variables**: Declare variables before using them
3. **Structure**: Check if your IF/REPEAT blocks are properly closed
4. **Spelling**: Verify keyword spelling in your chosen language

What specific error are you seeing?`
      };
    }
    
    if (message.includes('calculator') || message.includes('math')) {
      return {
        content: `Here's a simple calculator example:`,
        codeExample: `${getTranslation(humanLanguage, 'input')} num1
${getTranslation(humanLanguage, 'input')} num2
${getTranslation(humanLanguage, 'calculate')} result = num1 + num2
${getTranslation(humanLanguage, 'display')} "Result: " + result`
      };
    }
    
    // Default helpful response
    return {
      content: `I can help you with:
      
• **Basic syntax** - Hello world, variables, input/output
• **Control structures** - IF conditions, loops, functions  
• **Data structures** - Arrays, stacks, queues, trees
• **Algorithms** - Sorting, searching, recursion
• **Debugging** - Finding and fixing errors
• **Examples** - Code samples for any concept

Just ask me what you'd like to learn or code!`
    };
  };

  const getTranslation = (lang: string, key: string): string => {
    const translations: any = {
      en: {
        helloWorld: 'DISPLAY "Hello World!"',
        userInput: 'INPUT BY USER name\nDISPLAY "Hello " + name',
        loop: 'REPEAT 5 TIMES\n  DISPLAY "Iteration"\nEND REPEAT',
        create: 'CREATE',
        array: 'ARRAY',
        stack: 'STACK',
        store: 'STORE',
        display: 'DISPLAY',
        input: 'INPUT BY USER',
        function: 'DEFINE FUNCTION',
        endfunction: 'END FUNCTION',
        call: 'CALL',
        return: 'RETURN',
        if: 'IF',
        otherwise: 'OTHERWISE',
        endif: 'END IF',
        push: 'PUSH',
        pop: 'POP',
        calculate: 'CALCULATE'
      },
      hi: {
        helloWorld: 'दिखाएं "नमस्ते दुनिया!"',
        userInput: 'उपयोगकर्ता से इनपुट नाम\nदिखाएं "नमस्ते " + नाम',
        loop: 'दोहराएं 5 बार\n  दिखाएं "पुनरावृत्ति"\nदोहराना समाप्त',
        create: 'बनाएं',
        array: 'सरणी',
        stack: 'स्टैक',
        store: 'संग्रहीत करें',
        display: 'दिखाएं',
        input: 'उपयोगकर्ता से इनपुट',
        function: 'फ़ंक्शन परिभाषित करें',
        endfunction: 'फ़ंक्शन समाप्त',
        call: 'कॉल करें',
        return: 'वापस करें',
        if: 'यदि',
        otherwise: 'अन्यथा',
        endif: 'यदि समाप्त',
        push: 'धक्का दें',
        pop: 'निकालें',
        calculate: 'गणना करें'
      },
      es: {
        helloWorld: 'MOSTRAR "¡Hola Mundo!"',
        userInput: 'ENTRADA DEL USUARIO nombre\nMOSTRAR "Hola " + nombre',
        loop: 'REPETIR 5 VECES\n  MOSTRAR "Iteración"\nFIN REPETIR',
        create: 'CREAR',
        array: 'ARREGLO',
        stack: 'PILA',
        store: 'ALMACENAR',
        display: 'MOSTRAR',
        input: 'ENTRADA DEL USUARIO',
        function: 'DEFINIR FUNCIÓN',
        endfunction: 'FIN FUNCIÓN',
        call: 'LLAMAR',
        return: 'RETORNAR',
        if: 'SI',
        otherwise: 'DE LO CONTRARIO',
        endif: 'FIN SI',
        push: 'EMPUJAR',
        pop: 'SACAR',
        calculate: 'CALCULAR'
      }
    };
    
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.content,
        codeExample: aiResponse.codeExample,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const quickActions = [
    { label: 'Hello World', action: () => setInputMessage('Show me hello world example') },
    { label: 'User Input', action: () => setInputMessage('How to get user input?') },
    { label: 'Loops', action: () => setInputMessage('How to create loops?') },
    { label: 'Functions', action: () => setInputMessage('How to create functions?') },
    { label: 'Arrays', action: () => setInputMessage('How to work with arrays?') },
    { label: 'Debug Help', action: () => setInputMessage('My code is not working, help me debug') }
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 px-4 py-3 border-b border-gray-700 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">SRINJAN AI Assistant</h3>
            <p className="text-sm text-purple-200">Coding help in {humanLanguage.toUpperCase()}</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center space-x-2 text-sm text-purple-200">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-b border-gray-700 bg-gray-750">
        <div className="text-xs text-gray-400 mb-2">Quick Help:</div>
        <div className="flex flex-wrap gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded-full transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
              <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-indigo-600' 
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  {message.codeExample && (
                    <div className="mt-3">
                      <div className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Code className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs text-gray-400">SRINJAN Code</span>
                          </div>
                          <button
                            onClick={() => onCodeSuggestion(message.codeExample!)}
                            className="px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs rounded transition-colors"
                          >
                            Use Code
                          </button>
                        </div>
                        <pre className="text-indigo-300 font-mono text-xs leading-relaxed">
                          {message.codeExample}
                        </pre>
                      </div>
                    </div>
                  )}
                  <div className="text-xs opacity-75 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-700 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={`Ask me anything about coding in ${humanLanguage.toUpperCase()}...`}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center">
          AI Assistant • Powered by SRINJAN Intelligence
        </div>
      </div>
    </div>
  );
};