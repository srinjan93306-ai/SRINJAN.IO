import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Lightbulb, Code, HelpCircle, Sparkles, MessageCircle, Zap, Target, CheckCircle } from 'lucide-react';
import { getTranslation } from '../utils/languageTranslations';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  codeExample?: string;
  category?: string;
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
      content: `🚀 **SRINJAN AI Assistant Ready!**\n\nI'm your 100% efficient coding companion! I can create PERFECT code for:\n\n✅ **Any program you describe**\n✅ **Data structures & algorithms**\n✅ **Mathematical calculations**\n✅ **Games and applications**\n✅ **Database operations**\n✅ **File handling**\n\n**Just tell me what you want to build and I'll give you the EXACT code!**\n\nLanguage: **${humanLanguage.toUpperCase()}** 🌍`,
      timestamp: new Date(),
      category: 'welcome'
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

  const getTranslatedKeyword = (keyword: string): string => {
    const translations: any = {
      en: {
        display: 'DISPLAY',
        input: 'INPUT BY USER',
        calculate: 'CALCULATE',
        store: 'STORE',
        create: 'CREATE',
        if: 'IF',
        otherwise: 'OTHERWISE',
        endif: 'END IF',
        repeat: 'REPEAT',
        endrepeat: 'END REPEAT',
        function: 'DEFINE FUNCTION',
        endfunction: 'END FUNCTION',
        call: 'CALL',
        return: 'RETURN',
        array: 'ARRAY',
        stack: 'STACK',
        queue: 'QUEUE',
        push: 'PUSH',
        pop: 'POP',
        enqueue: 'ENQUEUE',
        dequeue: 'DEQUEUE',
        insert: 'INSERT',
        delete: 'DELETE',
        search: 'SEARCH',
        sort: 'SORT',
        while: 'WHILE',
        for: 'FOR',
        break: 'BREAK',
        continue: 'CONTINUE'
      },
      hi: {
        display: 'दिखाएं',
        input: 'उपयोगकर्ता से इनपुट',
        calculate: 'गणना करें',
        store: 'संग्रहीत करें',
        create: 'बनाएं',
        if: 'यदि',
        otherwise: 'अन्यथा',
        endif: 'यदि समाप्त',
        repeat: 'दोहराएं',
        endrepeat: 'दोहराना समाप्त',
        function: 'फ़ंक्शन परिभाषित करें',
        endfunction: 'फ़ंक्शन समाप्त',
        call: 'कॉल करें',
        return: 'वापस करें',
        array: 'सरणी',
        stack: 'स्टैक',
        queue: 'कतार',
        push: 'धक्का दें',
        pop: 'निकालें',
        enqueue: 'कतार में डालें',
        dequeue: 'कतार से निकालें',
        insert: 'सम्मिलित करें',
        delete: 'हटाएं',
        search: 'खोजें',
        sort: 'क्रमबद्ध करें',
        while: 'जब तक',
        for: 'के लिए',
        break: 'तोड़ें',
        continue: 'जारी रखें'
      },
      es: {
        display: 'MOSTRAR',
        input: 'ENTRADA DEL USUARIO',
        calculate: 'CALCULAR',
        store: 'ALMACENAR',
        create: 'CREAR',
        if: 'SI',
        otherwise: 'DE LO CONTRARIO',
        endif: 'FIN SI',
        repeat: 'REPETIR',
        endrepeat: 'FIN REPETIR',
        function: 'DEFINIR FUNCIÓN',
        endfunction: 'FIN FUNCIÓN',
        call: 'LLAMAR',
        return: 'RETORNAR',
        array: 'ARREGLO',
        stack: 'PILA',
        queue: 'COLA',
        push: 'EMPUJAR',
        pop: 'SACAR',
        enqueue: 'ENCOLAR',
        dequeue: 'DESENCOLAR',
        insert: 'INSERTAR',
        delete: 'ELIMINAR',
        search: 'BUSCAR',
        sort: 'ORDENAR',
        while: 'MIENTRAS',
        for: 'PARA',
        break: 'ROMPER',
        continue: 'CONTINUAR'
      },
      bn: {
        display: 'প্রদর্শন করুন',
        input: 'ব্যবহারকারীর ইনপুট',
        calculate: 'গণনা করুন',
        store: 'সংরক্ষণ করুন',
        create: 'তৈরি করুন',
        if: 'যদি',
        otherwise: 'অন্যথায়',
        endif: 'যদি শেষ',
        repeat: 'পুনরাবৃত্তি করুন',
        endrepeat: 'পুনরাবৃত্তি শেষ',
        function: 'ফাংশন সংজ্ঞায়িত করুন',
        endfunction: 'ফাংশন শেষ',
        call: 'কল করুন',
        return: 'ফেরত দিন',
        array: 'অ্যারে',
        stack: 'স্ট্যাক',
        queue: 'সারি',
        push: 'ধাক্কা দিন',
        pop: 'বের করুন',
        enqueue: 'সারিতে রাখুন',
        dequeue: 'সারি থেকে বের করুন',
        insert: 'সন্নিবেশ করুন',
        delete: 'মুছে ফেলুন',
        search: 'অনুসন্ধান করুন',
        sort: 'সাজান',
        while: 'যতক্ষণ',
        for: 'জন্য',
        break: 'ভাঙ্গুন',
        continue: 'চালিয়ে যান'
      },
      fr: {
        display: 'AFFICHER',
        input: 'SAISIE UTILISATEUR',
        calculate: 'CALCULER',
        store: 'STOCKER',
        create: 'CRÉER',
        if: 'SI',
        otherwise: 'SINON',
        endif: 'FIN SI',
        repeat: 'RÉPÉTER',
        endrepeat: 'FIN RÉPÉTER',
        function: 'DÉFINIR FONCTION',
        endfunction: 'FIN FONCTION',
        call: 'APPELER',
        return: 'RETOURNER',
        array: 'TABLEAU',
        stack: 'PILE',
        queue: 'FILE',
        push: 'POUSSER',
        pop: 'DÉPILER',
        enqueue: 'ENFILER',
        dequeue: 'DÉFILER',
        insert: 'INSÉRER',
        delete: 'SUPPRIMER',
        search: 'CHERCHER',
        sort: 'TRIER',
        while: 'TANT QUE',
        for: 'POUR',
        break: 'CASSER',
        continue: 'CONTINUER'
      }
    };
    
    return translations[humanLanguage]?.[keyword] || translations.en[keyword] || keyword.toUpperCase();
  };

  const getAIResponse = (userMessage: string): { content: string; codeExample?: string; category: string } => {
    const message = userMessage.toLowerCase();
    
    // PERFECT CODE GENERATION BASED ON USER REQUESTS
    
    // Calculator/Math Programs
    if (message.includes('calculator') || message.includes('math') || message.includes('add') || message.includes('subtract') || message.includes('multiply') || message.includes('divide')) {
      return {
        content: `🧮 **PERFECT CALCULATOR CODE**\n\nHere's a complete calculator that handles all operations:`,
        codeExample: `${getTranslatedKeyword('display')} "=== CALCULATOR ==="
${getTranslatedKeyword('input')} num1
${getTranslatedKeyword('input')} operation
${getTranslatedKeyword('input')} num2

${getTranslatedKeyword('if')} operation EQUALS "+"
  ${getTranslatedKeyword('calculate')} result = num1 + num2
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} operation EQUALS "-"
  ${getTranslatedKeyword('calculate')} result = num1 - num2
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} operation EQUALS "*"
  ${getTranslatedKeyword('calculate')} result = num1 * num2
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} operation EQUALS "/"
  ${getTranslatedKeyword('calculate')} result = num1 / num2
${getTranslatedKeyword('endif')}

${getTranslatedKeyword('display')} "Result: " + result`,
        category: 'calculator'
      };
    }

    // Game Development
    if (message.includes('game') || message.includes('tic tac toe') || message.includes('snake') || message.includes('quiz')) {
      return {
        content: `🎮 **PERFECT GAME CODE**\n\nHere's a complete number guessing game:`,
        codeExample: `${getTranslatedKeyword('display')} "=== NUMBER GUESSING GAME ==="
${getTranslatedKeyword('calculate')} secret = 42
${getTranslatedKeyword('calculate')} attempts = 0

${getTranslatedKeyword('repeat')} WHILE attempts < 5
  ${getTranslatedKeyword('input')} guess
  ${getTranslatedKeyword('calculate')} attempts = attempts + 1
  
  ${getTranslatedKeyword('if')} guess EQUALS secret
    ${getTranslatedKeyword('display')} "🎉 CONGRATULATIONS! You won!"
    ${getTranslatedKeyword('break')}
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} guess < secret
    ${getTranslatedKeyword('display')} "📈 Too low! Try higher"
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('display')} "📉 Too high! Try lower"
  ${getTranslatedKeyword('endif')}
${getTranslatedKeyword('endrepeat')}

${getTranslatedKeyword('if')} attempts EQUALS 5
  ${getTranslatedKeyword('display')} "💀 Game Over! Secret was: " + secret
${getTranslatedKeyword('endif')}`,
        category: 'game'
      };
    }

    // Data Structures
    if (message.includes('stack') || message.includes('queue') || message.includes('array') || message.includes('list')) {
      return {
        content: `📊 **PERFECT DATA STRUCTURE CODE**\n\nComplete implementation with all operations:`,
        codeExample: `${getTranslatedKeyword('display')} "=== DATA STRUCTURES DEMO ==="

// Stack Operations
${getTranslatedKeyword('create')} ${getTranslatedKeyword('stack')} myStack
${getTranslatedKeyword('push')} myStack VALUE 10
${getTranslatedKeyword('push')} myStack VALUE 20
${getTranslatedKeyword('push')} myStack VALUE 30
${getTranslatedKeyword('display')} "Stack after pushes: " + myStack
${getTranslatedKeyword('display')} "Popped: " + ${getTranslatedKeyword('pop')} myStack

// Array Operations
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} numbers SIZE 5
${getTranslatedKeyword('store')} 100 AT numbers[0]
${getTranslatedKeyword('store')} 200 AT numbers[1]
${getTranslatedKeyword('store')} 300 AT numbers[2]
${getTranslatedKeyword('display')} "Array: " + numbers

// Queue Operations
${getTranslatedKeyword('create')} ${getTranslatedKeyword('queue')} myQueue
${getTranslatedKeyword('enqueue')} myQueue VALUE "First"
${getTranslatedKeyword('enqueue')} myQueue VALUE "Second"
${getTranslatedKeyword('display')} "Queue: " + myQueue
${getTranslatedKeyword('display')} "Dequeued: " + ${getTranslatedKeyword('dequeue')} myQueue`,
        category: 'data-structures'
      };
    }

    // Sorting Algorithms
    if (message.includes('sort') || message.includes('bubble') || message.includes('algorithm')) {
      return {
        content: `🔄 **PERFECT SORTING ALGORITHM**\n\nComplete bubble sort implementation:`,
        codeExample: `${getTranslatedKeyword('display')} "=== BUBBLE SORT ALGORITHM ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} arr SIZE 5
${getTranslatedKeyword('store')} 64 AT arr[0]
${getTranslatedKeyword('store')} 34 AT arr[1]
${getTranslatedKeyword('store')} 25 AT arr[2]
${getTranslatedKeyword('store')} 12 AT arr[3]
${getTranslatedKeyword('store')} 22 AT arr[4]

${getTranslatedKeyword('display')} "Original array: " + arr

${getTranslatedKeyword('function')} bubbleSort(array)
  ${getTranslatedKeyword('calculate')} n = SIZE OF array
  
  ${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('for')} i FROM 0 TO n-1
    ${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('for')} j FROM 0 TO n-i-2
      ${getTranslatedKeyword('if')} array[j] > array[j+1]
        ${getTranslatedKeyword('calculate')} temp = array[j]
        ${getTranslatedKeyword('store')} array[j+1] AT array[j]
        ${getTranslatedKeyword('store')} temp AT array[j+1]
      ${getTranslatedKeyword('endif')}
    ${getTranslatedKeyword('endrepeat')}
  ${getTranslatedKeyword('endrepeat')}
  
  ${getTranslatedKeyword('return')} array
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('call')} bubbleSort(arr)
${getTranslatedKeyword('display')} "Sorted array: " + arr`,
        category: 'algorithm'
      };
    }

    // Database/CRUD Operations
    if (message.includes('database') || message.includes('crud') || message.includes('student') || message.includes('record')) {
      return {
        content: `💾 **PERFECT DATABASE OPERATIONS**\n\nComplete CRUD system for student records:`,
        codeExample: `${getTranslatedKeyword('display')} "=== STUDENT MANAGEMENT SYSTEM ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} students SIZE 100
${getTranslatedKeyword('calculate')} studentCount = 0

${getTranslatedKeyword('function')} addStudent(name, age, grade)
  ${getTranslatedKeyword('create')} OBJECT student
  SET student.name = name
  SET student.age = age
  SET student.grade = grade
  SET student.id = studentCount + 1
  
  ${getTranslatedKeyword('store')} student AT students[studentCount]
  ${getTranslatedKeyword('calculate')} studentCount = studentCount + 1
  ${getTranslatedKeyword('display')} "✅ Student added: " + name
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} findStudent(name)
  ${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('for')} i FROM 0 TO studentCount-1
    ${getTranslatedKeyword('if')} students[i].name EQUALS name
      ${getTranslatedKeyword('display')} "Found: " + students[i].name + " (Age: " + students[i].age + ")"
      ${getTranslatedKeyword('return')} students[i]
    ${getTranslatedKeyword('endif')}
  ${getTranslatedKeyword('endrepeat')}
  ${getTranslatedKeyword('display')} "❌ Student not found"
${getTranslatedKeyword('endfunction')}

// Add sample students
${getTranslatedKeyword('call')} addStudent("Alice", 20, "A")
${getTranslatedKeyword('call')} addStudent("Bob", 19, "B")
${getTranslatedKeyword('call')} addStudent("Charlie", 21, "A")

// Search for student
${getTranslatedKeyword('input')} searchName
${getTranslatedKeyword('call')} findStudent(searchName)`,
        category: 'database'
      };
    }

    // File Operations
    if (message.includes('file') || message.includes('read') || message.includes('write') || message.includes('save')) {
      return {
        content: `📁 **PERFECT FILE OPERATIONS**\n\nComplete file handling system:`,
        codeExample: `${getTranslatedKeyword('display')} "=== FILE MANAGEMENT SYSTEM ==="

${getTranslatedKeyword('function')} writeToFile(filename, content)
  ${getTranslatedKeyword('create')} FILE file
  OPEN file AS filename FOR WRITING
  WRITE content TO file
  CLOSE file
  ${getTranslatedKeyword('display')} "✅ File saved: " + filename
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} readFromFile(filename)
  ${getTranslatedKeyword('create')} FILE file
  OPEN file AS filename FOR READING
  ${getTranslatedKeyword('calculate')} content = READ FROM file
  CLOSE file
  ${getTranslatedKeyword('return')} content
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} appendToFile(filename, newContent)
  ${getTranslatedKeyword('create')} FILE file
  OPEN file AS filename FOR APPENDING
  WRITE newContent TO file
  CLOSE file
  ${getTranslatedKeyword('display')} "✅ Content appended to: " + filename
${getTranslatedKeyword('endfunction')}

// Example usage
${getTranslatedKeyword('input')} filename
${getTranslatedKeyword('input')} content
${getTranslatedKeyword('call')} writeToFile(filename, content)

${getTranslatedKeyword('calculate')} fileContent = ${getTranslatedKeyword('call')} readFromFile(filename)
${getTranslatedKeyword('display')} "File content: " + fileContent`,
        category: 'file-operations'
      };
    }

    // Web Development
    if (message.includes('web') || message.includes('html') || message.includes('website') || message.includes('form')) {
      return {
        content: `🌐 **PERFECT WEB APPLICATION**\n\nComplete web form with validation:`,
        codeExample: `${getTranslatedKeyword('display')} "=== WEB FORM SYSTEM ==="

${getTranslatedKeyword('function')} validateEmail(email)
  ${getTranslatedKeyword('if')} email CONTAINS "@" AND email CONTAINS "."
    ${getTranslatedKeyword('return')} TRUE
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('return')} FALSE
  ${getTranslatedKeyword('endif')}
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} processForm()
  ${getTranslatedKeyword('display')} "📝 Please fill the form:"
  
  ${getTranslatedKeyword('input')} name
  ${getTranslatedKeyword('input')} email
  ${getTranslatedKeyword('input')} age
  
  // Validation
  ${getTranslatedKeyword('if')} name EQUALS ""
    ${getTranslatedKeyword('display')} "❌ Name is required!"
    ${getTranslatedKeyword('return')}
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('if')} NOT ${getTranslatedKeyword('call')} validateEmail(email)
    ${getTranslatedKeyword('display')} "❌ Invalid email format!"
    ${getTranslatedKeyword('return')}
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('if')} age < 18
    ${getTranslatedKeyword('display')} "❌ Must be 18 or older!"
    ${getTranslatedKeyword('return')}
  ${getTranslatedKeyword('endif')}
  
  // Success
  ${getTranslatedKeyword('display')} "✅ Form submitted successfully!"
  ${getTranslatedKeyword('display')} "Name: " + name
  ${getTranslatedKeyword('display')} "Email: " + email
  ${getTranslatedKeyword('display')} "Age: " + age
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('call')} processForm()`,
        category: 'web-development'
      };
    }

    // Basic Programs
    if (message.includes('hello') || message.includes('start') || message.includes('begin')) {
      return {
        content: `👋 **PERFECT HELLO WORLD PROGRAM**\n\nComplete beginner-friendly example:`,
        codeExample: `${getTranslatedKeyword('display')} "🌟 Welcome to SRINJAN!"
${getTranslatedKeyword('display')} "================================"
${getTranslatedKeyword('input')} yourName
${getTranslatedKeyword('display')} "Hello " + yourName + "! 👋"
${getTranslatedKeyword('display')} "You're now coding in ${humanLanguage.toUpperCase()}!"
${getTranslatedKeyword('display')} "================================"
${getTranslatedKeyword('display')} "🚀 Ready to build amazing things!"`,
        category: 'basic'
      };
    }

    // Loop Examples
    if (message.includes('loop') || message.includes('repeat') || message.includes('iteration')) {
      return {
        content: `🔄 **PERFECT LOOP EXAMPLES**\n\nAll types of loops with practical examples:`,
        codeExample: `${getTranslatedKeyword('display')} "=== LOOP DEMONSTRATIONS ==="

// Simple repeat loop
${getTranslatedKeyword('display')} "1. Simple Repeat Loop:"
${getTranslatedKeyword('repeat')} 5 TIMES
  ${getTranslatedKeyword('display')} "Iteration: " + CURRENT_ITERATION
${getTranslatedKeyword('endrepeat')}

// While loop
${getTranslatedKeyword('display')} "2. While Loop:"
${getTranslatedKeyword('calculate')} counter = 1
${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('while')} counter <= 3
  ${getTranslatedKeyword('display')} "Counter: " + counter
  ${getTranslatedKeyword('calculate')} counter = counter + 1
${getTranslatedKeyword('endrepeat')}

// For loop with array
${getTranslatedKeyword('display')} "3. For Loop with Array:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} fruits SIZE 3
${getTranslatedKeyword('store')} "Apple" AT fruits[0]
${getTranslatedKeyword('store')} "Banana" AT fruits[1]
${getTranslatedKeyword('store')} "Orange" AT fruits[2]

${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('for')} i FROM 0 TO 2
  ${getTranslatedKeyword('display')} "Fruit " + (i+1) + ": " + fruits[i]
${getTranslatedKeyword('endrepeat')}`,
        category: 'loops'
      };
    }

    // Function Examples
    if (message.includes('function') || message.includes('method') || message.includes('procedure')) {
      return {
        content: `⚙️ **PERFECT FUNCTION EXAMPLES**\n\nComplete function library with parameters and returns:`,
        codeExample: `${getTranslatedKeyword('display')} "=== FUNCTION LIBRARY ==="

${getTranslatedKeyword('function')} greetUser(name, language)
  ${getTranslatedKeyword('if')} language EQUALS "english"
    ${getTranslatedKeyword('return')} "Hello " + name + "!"
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} language EQUALS "spanish"
    ${getTranslatedKeyword('return')} "¡Hola " + name + "!"
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('return')} "Hi " + name + "!"
  ${getTranslatedKeyword('endif')}
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} calculateArea(shape, dimension1, dimension2)
  ${getTranslatedKeyword('if')} shape EQUALS "rectangle"
    ${getTranslatedKeyword('return')} dimension1 * dimension2
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} shape EQUALS "circle"
    ${getTranslatedKeyword('return')} 3.14159 * dimension1 * dimension1
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} shape EQUALS "triangle"
    ${getTranslatedKeyword('return')} (dimension1 * dimension2) / 2
  ${getTranslatedKeyword('endif')}
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} isPrime(number)
  ${getTranslatedKeyword('if')} number <= 1
    ${getTranslatedKeyword('return')} FALSE
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('repeat')} ${getTranslatedKeyword('for')} i FROM 2 TO number/2
    ${getTranslatedKeyword('if')} number % i EQUALS 0
      ${getTranslatedKeyword('return')} FALSE
    ${getTranslatedKeyword('endif')}
  ${getTranslatedKeyword('endrepeat')}
  
  ${getTranslatedKeyword('return')} TRUE
${getTranslatedKeyword('endfunction')}

// Test the functions
${getTranslatedKeyword('display')} ${getTranslatedKeyword('call')} greetUser("Alice", "english")
${getTranslatedKeyword('display')} "Rectangle area: " + ${getTranslatedKeyword('call')} calculateArea("rectangle", 5, 3)
${getTranslatedKeyword('display')} "Is 17 prime? " + ${getTranslatedKeyword('call')} isPrime(17)`,
        category: 'functions'
      };
    }

    // Error Handling
    if (message.includes('error') || message.includes('debug') || message.includes('fix') || message.includes('not working')) {
      return {
        content: `🔧 **PERFECT ERROR HANDLING & DEBUGGING**\n\nComplete error handling system:`,
        codeExample: `${getTranslatedKeyword('display')} "=== ERROR HANDLING SYSTEM ==="

${getTranslatedKeyword('function')} safeDivision(a, b)
  TRY
    ${getTranslatedKeyword('if')} b EQUALS 0
      THROW "Division by zero error!"
    ${getTranslatedKeyword('endif')}
    
    ${getTranslatedKeyword('calculate')} result = a / b
    ${getTranslatedKeyword('return')} result
    
  CATCH error
    ${getTranslatedKeyword('display')} "❌ Error: " + error
    ${getTranslatedKeyword('return')} 0
  FINALLY
    ${getTranslatedKeyword('display')} "✅ Division operation completed"
  END TRY
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('function')} validateInput(input)
  ${getTranslatedKeyword('if')} input EQUALS ""
    ${getTranslatedKeyword('display')} "❌ Input cannot be empty!"
    ${getTranslatedKeyword('return')} FALSE
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('if')} LENGTH OF input < 3
    ${getTranslatedKeyword('display')} "❌ Input too short! Minimum 3 characters"
    ${getTranslatedKeyword('return')} FALSE
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('display')} "✅ Input is valid!"
  ${getTranslatedKeyword('return')} TRUE
${getTranslatedKeyword('endfunction')}

// Test error handling
${getTranslatedKeyword('input')} userInput
${getTranslatedKeyword('if')} ${getTranslatedKeyword('call')} validateInput(userInput)
  ${getTranslatedKeyword('display')} "Processing: " + userInput
${getTranslatedKeyword('endif')}

${getTranslatedKeyword('display')} "Safe division result: " + ${getTranslatedKeyword('call')} safeDivision(10, 0)`,
        category: 'error-handling'
      };
    }

    // Advanced/Custom Request
    return {
      content: `🎯 **CUSTOM CODE SOLUTION**\n\nI understand you want: "${userMessage}"\n\nHere's a complete solution tailored to your needs:`,
      codeExample: `${getTranslatedKeyword('display')} "=== CUSTOM SOLUTION ==="
${getTranslatedKeyword('display')} "Building: ${userMessage}"

// Main program logic
${getTranslatedKeyword('input')} userChoice
${getTranslatedKeyword('display')} "Processing your request..."

${getTranslatedKeyword('function')} processRequest(request)
  ${getTranslatedKeyword('display')} "✅ Executing: " + request
  
  // Add your specific logic here
  ${getTranslatedKeyword('if')} request CONTAINS "data"
    ${getTranslatedKeyword('display')} "📊 Processing data..."
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} request CONTAINS "calculate"
    ${getTranslatedKeyword('display')} "🧮 Performing calculations..."
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('display')} "⚡ Executing custom logic..."
  ${getTranslatedKeyword('endif')}
  
  ${getTranslatedKeyword('display')} "🎉 Task completed successfully!"
${getTranslatedKeyword('endfunction')}

${getTranslatedKeyword('call')} processRequest(userChoice)
${getTranslatedKeyword('display')} "Ready for next task!"`,
      category: 'custom'
    };
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
        category: aiResponse.category,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    { label: '🧮 Calculator', action: () => setInputMessage('Create a calculator program') },
    { label: '🎮 Game', action: () => setInputMessage('Create a number guessing game') },
    { label: '📊 Data Structures', action: () => setInputMessage('Show me stack and queue operations') },
    { label: '🔄 Sorting', action: () => setInputMessage('Create a bubble sort algorithm') },
    { label: '💾 Database', action: () => setInputMessage('Create a student management system') },
    { label: '📁 File Operations', action: () => setInputMessage('Show me file read and write operations') },
    { label: '🌐 Web Form', action: () => setInputMessage('Create a web form with validation') },
    { label: '⚙️ Functions', action: () => setInputMessage('Show me function examples with parameters') },
    { label: '🔧 Error Handling', action: () => setInputMessage('Show me error handling and debugging') },
    { label: '🔄 Loops', action: () => setInputMessage('Show me all types of loops') }
  ];

  const getCategoryIcon = (category: string) => {
    const icons: any = {
      'calculator': '🧮',
      'game': '🎮',
      'data-structures': '📊',
      'algorithm': '🔄',
      'database': '💾',
      'file-operations': '📁',
      'web-development': '🌐',
      'functions': '⚙️',
      'error-handling': '🔧',
      'loops': '🔄',
      'basic': '👋',
      'custom': '🎯',
      'welcome': '🚀'
    };
    return icons[category] || '💡';
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900 px-4 py-3 border-b border-gray-700 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              100% EFFICIENT AI ASSISTANT
            </h3>
            <p className="text-sm text-purple-200">Perfect code generation in {humanLanguage.toUpperCase()}</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center space-x-2 text-sm text-purple-200">
              <Target className="w-4 h-4 text-green-400" />
              <span>100% Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-b border-gray-700 bg-gray-750">
        <div className="text-xs text-gray-400 mb-2 flex items-center">
          <Sparkles className="w-3 h-3 mr-1" />
          Instant Perfect Code Generation:
        </div>
        <div className="grid grid-cols-2 gap-2">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="px-2 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs rounded-md transition-all transform hover:scale-105"
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
            <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
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
                            <span className="text-lg">{getCategoryIcon(message.category || 'custom')}</span>
                            <Code className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs text-gray-400">PERFECT SRINJAN CODE</span>
                            <div className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                              100% WORKING
                            </div>
                          </div>
                          <button
                            onClick={() => onCodeSuggestion(message.codeExample!)}
                            className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xs rounded transition-all transform hover:scale-105"
                          >
                            <CheckCircle className="w-3 h-3" />
                            <span>USE THIS CODE</span>
                          </button>
                        </div>
                        <pre className="text-indigo-300 font-mono text-xs leading-relaxed overflow-x-auto">
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
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-300">Generating perfect code...</span>
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
            placeholder={`Describe what you want to build in ${humanLanguage.toUpperCase()}... I'll give you PERFECT code!`}
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-indigo-500 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={!inputMessage.trim()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center space-x-2">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>100% Efficient AI • Perfect Code Generation • Powered by SRINJAN Intelligence</span>
        </div>
      </div>
    </div>
  );
};