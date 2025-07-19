import React, { useState } from 'react';
import { BookOpen, Code, Database, Brain, ChevronRight, Play, Copy, CheckCircle, Star, Zap, Target, Award, Cpu, BarChart3, Network, Calculator, Layers, TrendingUp, GitBranch, Shuffle, Search, Filter, PieChart, LineChart, Activity, Atom } from 'lucide-react';

interface TutorialPanelProps {
  onCodeInsert: (code: string) => void;
  selectedLanguage: string;
}

export const TutorialPanel: React.FC<TutorialPanelProps> = ({ onCodeInsert, selectedLanguage }) => {
  const [activeCategory, setActiveCategory] = useState('basics');
  const [activeLesson, setActiveLesson] = useState('hello-world');

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
        for: 'FOR',
        while: 'WHILE',
        dowhile: 'DO WHILE',
        array: 'ARRAY',
        stack: 'STACK',
        queue: 'QUEUE',
        push: 'PUSH',
        pop: 'POP',
        sort: 'SORT',
        search: 'SEARCH'
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
        for: 'के लिए',
        while: 'जब तक',
        dowhile: 'करें जब तक',
        array: 'सरणी',
        stack: 'स्टैक',
        queue: 'कतार',
        push: 'धक्का दें',
        pop: 'निकालें',
        sort: 'क्रमबद्ध करें',
        search: 'खोजें'
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
        for: 'PARA',
        while: 'MIENTRAS',
        dowhile: 'HACER MIENTRAS',
        array: 'ARREGLO',
        stack: 'PILA',
        queue: 'COLA',
        push: 'EMPUJAR',
        pop: 'SACAR',
        sort: 'ORDENAR',
        search: 'BUSCAR'
      }
    };
    
    return translations[selectedLanguage]?.[keyword] || translations.en[keyword] || keyword.toUpperCase();
  };

  const tutorials = {
    basics: {
      title: '🚀 SRINJAN Fundamentals',
      icon: <Code className="w-5 h-5" />,
      lessons: {
        'hello-world': {
          title: 'Hello World Program',
          difficulty: 'Beginner',
          time: '2 min',
          description: 'Your first SRINJAN program - display text on screen',
          theory: `
**Hello World Program - The Foundation**

Every programming journey starts here! In SRINJAN, we use natural language commands that anyone can understand.

**Key Concepts:**
• DISPLAY - Shows text on screen (like printf in C or cout in C++)
• Quotes ("") - Wrap text messages
• Simple and readable syntax
• No semicolons or complex syntax needed

**Why Start Here:**
This teaches you the basic structure of SRINJAN programs and how to output information to users.

**Real-world Applications:**
• User notifications
• System messages
• Debug output
• Welcome screens
          `,
          code: `${getTranslatedKeyword('display')} "🌟 Hello, World!"
${getTranslatedKeyword('display')} "Welcome to SRINJAN Programming!"
${getTranslatedKeyword('display')} "🚀 Let's start coding in natural language!"
${getTranslatedKeyword('display')} "================================"
${getTranslatedKeyword('display')} "Your first program is running perfectly!"`,
          output: `🌟 Hello, World!
Welcome to SRINJAN Programming!
🚀 Let's start coding in natural language!
================================
Your first program is running perfectly!
✅ Program executed successfully!`
        },
        'variables-input': {
          title: 'Variables & User Input',
          difficulty: 'Beginner',
          time: '5 min',
          description: 'Store data and get user input dynamically',
          theory: `
**Variables and Input in SRINJAN**

Variables are like labeled containers that store information. SRINJAN makes this incredibly simple with natural language.

**Key Concepts:**
• INPUT BY USER - Gets data from user (like scanf in C or cin in C++)
• Variables automatically created when used
• String concatenation with + operator
• Dynamic typing - no need to declare types
• Interactive programming

**Best Practices:**
• Use meaningful variable names
• Always validate user input in production
• Provide clear prompts to users
          `,
          code: `${getTranslatedKeyword('display')} "=== Personal Information System ==="
${getTranslatedKeyword('input')} name
${getTranslatedKeyword('display')} "Hello " + name + "! 👋"

${getTranslatedKeyword('input')} age
${getTranslatedKeyword('display')} "You are " + age + " years old"

${getTranslatedKeyword('input')} city
${getTranslatedKeyword('display')} "You live in " + city

${getTranslatedKeyword('input')} hobby
${getTranslatedKeyword('display')} "Your hobby is " + hobby + "! That's awesome! 🎉"

${getTranslatedKeyword('display')} "================================"
${getTranslatedKeyword('display')} "Profile created for " + name + " successfully!"`,
          output: `=== Personal Information System ===
📝 Enter value for name: [User types: Alice]
Hello Alice! 👋
📝 Enter value for age: [User types: 25]
You are 25 years old
📝 Enter value for city: [User types: New York]
You live in New York
📝 Enter value for hobby: [User types: Reading]
Your hobby is Reading! That's awesome! 🎉
================================
Profile created for Alice successfully!`
        },
        'calculations': {
          title: 'Mathematical Operations',
          difficulty: 'Beginner',
          time: '6 min',
          description: 'Perform all mathematical operations and calculations',
          theory: `
**Mathematics in SRINJAN**

SRINJAN supports all mathematical operations with natural language syntax, making complex calculations simple.

**All Operations Supported:**
• + Addition
• - Subtraction  
• * Multiplication
• / Division
• % Modulus (remainder)
• ^ Power/Exponentiation

**Advanced Math:**
• SQRT - Square root
• SIN, COS, TAN - Trigonometric functions
• LOG - Logarithm
• ABS - Absolute value

**Order of Operations:**
SRINJAN follows standard mathematical order (PEMDAS/BODMAS)
          `,
          code: `${getTranslatedKeyword('display')} "=== Advanced Calculator ==="

${getTranslatedKeyword('calculate')} sum = 15 + 25
${getTranslatedKeyword('display')} "Addition: 15 + 25 = " + sum

${getTranslatedKeyword('calculate')} difference = 50 - 18
${getTranslatedKeyword('display')} "Subtraction: 50 - 18 = " + difference

${getTranslatedKeyword('calculate')} product = 7 * 8
${getTranslatedKeyword('display')} "Multiplication: 7 × 8 = " + product

${getTranslatedKeyword('calculate')} quotient = 84 / 12
${getTranslatedKeyword('display')} "Division: 84 ÷ 12 = " + quotient

${getTranslatedKeyword('calculate')} remainder = 17 % 5
${getTranslatedKeyword('display')} "Modulus: 17 % 5 = " + remainder

${getTranslatedKeyword('calculate')} power = 2 ^ 8
${getTranslatedKeyword('display')} "Power: 2^8 = " + power

${getTranslatedKeyword('input')} num1
${getTranslatedKeyword('input')} operation
${getTranslatedKeyword('input')} num2
${getTranslatedKeyword('calculate')} result = num1 + num2
${getTranslatedKeyword('display')} "Your calculation: " + num1 + " " + operation + " " + num2 + " = " + result`,
          output: `=== Advanced Calculator ===
🧮 Calculated: sum = 40
Addition: 15 + 25 = 40
🧮 Calculated: difference = 32
Subtraction: 50 - 18 = 32
🧮 Calculated: product = 56
Multiplication: 7 × 8 = 56
🧮 Calculated: quotient = 7
Division: 84 ÷ 12 = 7
🧮 Calculated: remainder = 2
Modulus: 17 % 5 = 2
🧮 Calculated: power = 256
Power: 2^8 = 256
📝 Enter num1: [User: 12]
📝 Enter operation: [User: +]
📝 Enter num2: [User: 8]
🧮 Calculated: result = 20
Your calculation: 12 + 8 = 20`
        }
      }
    },
    
    control: {
      title: '🔄 Control Flow & Loops',
      icon: <ChevronRight className="w-5 h-5" />,
      lessons: {
        'conditions': {
          title: 'IF-ELSE Conditions',
          difficulty: 'Beginner',
          time: '8 min',
          description: 'Make intelligent decisions in your code',
          theory: `
**Conditional Logic - Decision Making**

Conditions allow your program to make intelligent decisions based on data, just like if-else in C/C++.

**Complete Structure:**
• IF - Check a condition
• OTHERWISE IF - Check additional conditions
• OTHERWISE - Default action (else)
• END IF - Close the condition block

**All Comparison Operators:**
• EQUALS or == - Check if equal
• GREATER THAN or > - Check if larger
• LESS THAN or < - Check if smaller
• NOT EQUALS or != - Check if different
• >= - Greater than or equal
• <= - Less than or equal

**Logical Operators:**
• AND - Both conditions true
• OR - Either condition true
• NOT - Opposite of condition
          `,
          code: `${getTranslatedKeyword('display')} "=== Smart Grading System ==="
${getTranslatedKeyword('input')} score

${getTranslatedKeyword('if')} score >= 90
  ${getTranslatedKeyword('display')} "Grade: A+ 🌟 EXCELLENT!"
  ${getTranslatedKeyword('display')} "You're in the top 10%!"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} score >= 80
  ${getTranslatedKeyword('display')} "Grade: B+ 👍 GOOD JOB!"
  ${getTranslatedKeyword('display')} "Keep up the great work!"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} score >= 70
  ${getTranslatedKeyword('display')} "Grade: C+ 📚 AVERAGE"
  ${getTranslatedKeyword('display')} "You can do better!"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} score >= 60
  ${getTranslatedKeyword('display')} "Grade: D 📖 NEEDS IMPROVEMENT"
  ${getTranslatedKeyword('display')} "Study harder next time!"
${getTranslatedKeyword('otherwise')}
  ${getTranslatedKeyword('display')} "Grade: F ❌ FAILED"
  ${getTranslatedKeyword('display')} "Don't give up! Try again!"
${getTranslatedKeyword('endif')}

${getTranslatedKeyword('display')} "=== Age Verification ==="
${getTranslatedKeyword('input')} age
${getTranslatedKeyword('if')} age >= 18 AND age <= 65
  ${getTranslatedKeyword('display')} "✅ You are eligible to vote!"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} age < 18
  ${getTranslatedKeyword('display')} "❌ Too young to vote"
${getTranslatedKeyword('otherwise')}
  ${getTranslatedKeyword('display')} "🎉 Senior citizen - special voting privileges!"
${getTranslatedKeyword('endif')}`,
          output: `=== Smart Grading System ===
📝 Enter score: [User: 85]
🤔 Checking condition: score >= 90
❌ Condition evaluated: false
🤔 Checking condition: score >= 80
✅ Condition evaluated: true
Grade: B+ 👍 GOOD JOB!
Keep up the great work!

=== Age Verification ===
📝 Enter age: [User: 25]
🤔 Checking condition: age >= 18 AND age <= 65
✅ Condition evaluated: true
✅ You are eligible to vote!`
        },
        'for-loops': {
          title: 'FOR Loops - Complete Control',
          difficulty: 'Intermediate',
          time: '10 min',
          description: 'Master all types of FOR loops with counters',
          theory: `
**FOR Loops - Controlled Repetition**

FOR loops repeat code a specific number of times with precise control, exactly like C/C++ for loops.

**Complete Syntax:**
FOR variable FROM start TO end
  // Code to repeat
END FOR

**Advanced Features:**
• Custom step sizes: FOR i FROM 0 TO 10 STEP 2
• Reverse counting: FOR i FROM 10 TO 1 STEP -1
• Nested loops for complex patterns
• Break and continue statements

**Use Cases:**
• Processing arrays and lists
• Mathematical sequences
• Pattern generation
• Data processing
• Algorithm implementation

**Loop Variable:**
The loop variable automatically increments/decrements based on step size.
          `,
          code: `${getTranslatedKeyword('display')} "=== FOR Loop Mastery ==="

${getTranslatedKeyword('display')} "1. Basic Counting:"
${getTranslatedKeyword('for')} i FROM 1 TO 5
  ${getTranslatedKeyword('display')} "Count: " + i + " 🔢"
END ${getTranslatedKeyword('for')}

${getTranslatedKeyword('display')} "2. Multiplication Table:"
${getTranslatedKeyword('input')} number
${getTranslatedKeyword('for')} i FROM 1 TO 10
  ${getTranslatedKeyword('calculate')} result = number * i
  ${getTranslatedKeyword('display')} number + " × " + i + " = " + result
END ${getTranslatedKeyword('for')}

${getTranslatedKeyword('display')} "3. Pattern Generation:"
${getTranslatedKeyword('for')} row FROM 1 TO 5
  ${getTranslatedKeyword('for')} col FROM 1 TO row
    ${getTranslatedKeyword('display')} "⭐ " WITHOUT_NEWLINE
  END ${getTranslatedKeyword('for')}
  ${getTranslatedKeyword('display')} ""
END ${getTranslatedKeyword('for')}

${getTranslatedKeyword('display')} "4. Reverse Counting:"
${getTranslatedKeyword('for')} i FROM 10 TO 1 STEP -1
  ${getTranslatedKeyword('display')} "Countdown: " + i + " 🚀"
END ${getTranslatedKeyword('for')}
${getTranslatedKeyword('display')} "🎉 BLAST OFF!"

${getTranslatedKeyword('display')} "5. Even Numbers:"
${getTranslatedKeyword('for')} i FROM 2 TO 20 STEP 2
  ${getTranslatedKeyword('display')} "Even: " + i
END ${getTranslatedKeyword('for')}`,
          output: `=== FOR Loop Mastery ===
1. Basic Counting:
🔄 FOR Loop: i from 1 to 5
  → Count: 1 🔢
  → Count: 2 🔢
  → Count: 3 🔢
  → Count: 4 🔢
  → Count: 5 🔢
✅ FOR Loop completed

2. Multiplication Table:
📝 Enter number: [User: 7]
🔄 FOR Loop: i from 1 to 10
  → 7 × 1 = 7
  → 7 × 2 = 14
  → 7 × 3 = 21
  → 7 × 4 = 28
  → 7 × 5 = 35
  → 7 × 6 = 42
  → 7 × 7 = 49
  → 7 × 8 = 56
  → 7 × 9 = 63
  → 7 × 10 = 70
✅ FOR Loop completed`
        },
        'while-loops': {
          title: 'WHILE & DO-WHILE Loops',
          difficulty: 'Intermediate',
          time: '10 min',
          description: 'Master conditional repetition and loop control',
          theory: `
**WHILE and DO-WHILE Loops**

These loops repeat based on conditions, perfect for unknown repetition counts.

**WHILE Loop:**
• Checks condition BEFORE executing
• May not execute at all if condition is false
• Perfect for input validation

**DO-WHILE Loop:**
• Executes code FIRST, then checks condition
• Always executes at least once
• Great for menu systems

**Loop Control:**
• BREAK - Exit loop immediately
• CONTINUE - Skip to next iteration
• Condition management to avoid infinite loops

**Common Patterns:**
• User input validation
• Game loops
• Processing until completion
• Menu-driven programs
          `,
          code: `${getTranslatedKeyword('display')} "=== Loop Control Mastery ==="

${getTranslatedKeyword('display')} "1. WHILE Loop - Input Validation:"
${getTranslatedKeyword('calculate')} password = ""
${getTranslatedKeyword('while')} password NOT EQUALS "secret123"
  ${getTranslatedKeyword('input')} password
  ${getTranslatedKeyword('if')} password NOT EQUALS "secret123"
    ${getTranslatedKeyword('display')} "❌ Wrong password! Try again."
  ${getTranslatedKeyword('endif')}
END ${getTranslatedKeyword('while')}
${getTranslatedKeyword('display')} "✅ Access granted!"

${getTranslatedKeyword('display')} "2. DO-WHILE Loop - Menu System:"
${getTranslatedKeyword('calculate')} choice = 0
${getTranslatedKeyword('dowhile')}
  ${getTranslatedKeyword('display')} "=== MENU ==="
  ${getTranslatedKeyword('display')} "1. Calculator"
  ${getTranslatedKeyword('display')} "2. Games"
  ${getTranslatedKeyword('display')} "3. Exit"
  ${getTranslatedKeyword('input')} choice
  
  ${getTranslatedKeyword('if')} choice EQUALS 1
    ${getTranslatedKeyword('display')} "🧮 Calculator selected!"
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} choice EQUALS 2
    ${getTranslatedKeyword('display')} "🎮 Games selected!"
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} choice EQUALS 3
    ${getTranslatedKeyword('display')} "👋 Goodbye!"
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('display')} "❌ Invalid choice!"
  ${getTranslatedKeyword('endif')}
${getTranslatedKeyword('while')} choice NOT EQUALS 3

${getTranslatedKeyword('display')} "3. Number Guessing Game:"
${getTranslatedKeyword('calculate')} secret = 42
${getTranslatedKeyword('calculate')} attempts = 0
${getTranslatedKeyword('calculate')} maxAttempts = 5
${getTranslatedKeyword('calculate')} guess = 0

${getTranslatedKeyword('while')} attempts < maxAttempts AND guess NOT EQUALS secret
  ${getTranslatedKeyword('input')} guess
  ${getTranslatedKeyword('calculate')} attempts = attempts + 1
  
  ${getTranslatedKeyword('if')} guess EQUALS secret
    ${getTranslatedKeyword('display')} "🎉 CONGRATULATIONS! You won in " + attempts + " attempts!"
  ${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} guess < secret
    ${getTranslatedKeyword('display')} "📈 Too low! Try higher. Attempts left: " + (maxAttempts - attempts)
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('display')} "📉 Too high! Try lower. Attempts left: " + (maxAttempts - attempts)
  ${getTranslatedKeyword('endif')}
END ${getTranslatedKeyword('while')}

${getTranslatedKeyword('if')} guess NOT EQUALS secret
  ${getTranslatedKeyword('display')} "💀 Game Over! The number was: " + secret
${getTranslatedKeyword('endif')}`,
          output: `=== Loop Control Mastery ===
1. WHILE Loop - Input Validation:
🔄 WHILE Loop: password NOT EQUALS "secret123"
📝 Enter password: [User: wrong]
❌ Wrong password! Try again.
📝 Enter password: [User: secret123]
✅ WHILE Loop completed
✅ Access granted!

2. DO-WHILE Loop - Menu System:
🔄 DO-WHILE Loop: choice NOT EQUALS 3
=== MENU ===
1. Calculator
2. Games  
3. Exit
📝 Enter choice: [User: 1]
🧮 Calculator selected!
📝 Enter choice: [User: 3]
👋 Goodbye!
✅ DO-WHILE Loop completed`
        }
      }
    },

    datastructures: {
      title: '📊 Data Structures',
      icon: <Database className="w-5 h-5" />,
      lessons: {
        'arrays': {
          title: 'Arrays & Dynamic Lists',
          difficulty: 'Intermediate',
          time: '12 min',
          description: 'Master arrays with all operations like C/C++',
          theory: `
**Arrays in SRINJAN - Complete Implementation**

Arrays store multiple values with indexed access, exactly like C/C++ arrays but with natural language syntax.

**Core Operations:**
• CREATE ARRAY - Initialize with size
• STORE AT - Put value at specific index
• GET FROM - Retrieve value from index
• SIZE OF - Get array length
• SORT - Arrange elements in order
• SEARCH - Find elements and their positions
• REVERSE - Reverse array order
• COPY - Duplicate arrays

**Advanced Features:**
• Dynamic resizing
• Multi-dimensional arrays
• Array slicing and manipulation
• Statistical operations on arrays

**Index System:**
• Arrays start at index 0 (like C/C++)
• Last index is (size - 1)
• Bounds checking prevents errors
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Array Operations ==="

${getTranslatedKeyword('display')} "1. Array Creation & Basic Operations:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} numbers SIZE 8
${getTranslatedKeyword('store')} 64 AT numbers[0]
${getTranslatedKeyword('store')} 34 AT numbers[1]
${getTranslatedKeyword('store')} 25 AT numbers[2]
${getTranslatedKeyword('store')} 12 AT numbers[3]
${getTranslatedKeyword('store')} 22 AT numbers[4]
${getTranslatedKeyword('store')} 11 AT numbers[5]
${getTranslatedKeyword('store')} 90 AT numbers[6]
${getTranslatedKeyword('store')} 5 AT numbers[7]

${getTranslatedKeyword('display')} "Original array: " + numbers
${getTranslatedKeyword('calculate')} arraySize = SIZE OF numbers
${getTranslatedKeyword('display')} "Array size: " + arraySize

${getTranslatedKeyword('display')} "2. Array Searching:"
${getTranslatedKeyword('search')} numbers FOR 25
${getTranslatedKeyword('display')} "Found 25 at index: " + SEARCH_RESULT

${getTranslatedKeyword('search')} numbers FOR 100
${getTranslatedKeyword('display')} "Search for 100: " + SEARCH_RESULT

${getTranslatedKeyword('display')} "3. Array Sorting:"
${getTranslatedKeyword('sort')} numbers
${getTranslatedKeyword('display')} "Sorted array: " + numbers

${getTranslatedKeyword('display')} "4. Dynamic Array Operations:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} fruits SIZE 0
ADD TO END fruits VALUE "Apple"
ADD TO END fruits VALUE "Banana"
ADD TO END fruits VALUE "Orange"
ADD TO END fruits VALUE "Mango"
${getTranslatedKeyword('display')} "Dynamic fruits array: " + fruits

INSERT AT fruits INDEX 2 VALUE "Grapes"
${getTranslatedKeyword('display')} "After insertion: " + fruits

REMOVE FROM fruits INDEX 1
${getTranslatedKeyword('display')} "After removal: " + fruits

${getTranslatedKeyword('display')} "5. Array Statistics:"
${getTranslatedKeyword('calculate')} sum = SUM OF numbers
${getTranslatedKeyword('display')} "Sum of all elements: " + sum

${getTranslatedKeyword('calculate')} average = AVERAGE OF numbers
${getTranslatedKeyword('display')} "Average: " + average

${getTranslatedKeyword('calculate')} maximum = MAX OF numbers
${getTranslatedKeyword('display')} "Maximum value: " + maximum

${getTranslatedKeyword('calculate')} minimum = MIN OF numbers
${getTranslatedKeyword('display')} "Minimum value: " + minimum`,
          output: `=== Complete Array Operations ===
1. Array Creation & Basic Operations:
📊 Created array: numbers[8]
💾 Stored "64" at numbers[0]
💾 Stored "34" at numbers[1]
💾 Stored "25" at numbers[2]
💾 Stored "12" at numbers[3]
💾 Stored "22" at numbers[4]
💾 Stored "11" at numbers[5]
💾 Stored "90" at numbers[6]
💾 Stored "5" at numbers[7]
Original array: [64, 34, 25, 12, 22, 11, 90, 5]
🧮 Calculated: arraySize = 8
Array size: 8

2. Array Searching:
🔍 Searched for "25" in numbers → Found at index: 2
Found 25 at index: 2
🔍 Searched for "100" in numbers → Found at index: -1
Search for 100: -1

3. Array Sorting:
🔄 Sorted array numbers → [5, 11, 12, 22, 25, 34, 64, 90]
Sorted array: [5, 11, 12, 22, 25, 34, 64, 90]

4. Dynamic Array Operations:
📊 Created array: fruits[0]
➕ Added "Apple" to end → ["Apple"]
➕ Added "Banana" to end → ["Apple", "Banana"]
➕ Added "Orange" to end → ["Apple", "Banana", "Orange"]
➕ Added "Mango" to end → ["Apple", "Banana", "Orange", "Mango"]
Dynamic fruits array: ["Apple", "Banana", "Orange", "Mango"]`
        },
        'stacks': {
          title: 'Stacks - LIFO Operations',
          difficulty: 'Intermediate',
          time: '10 min',
          description: 'Master stack data structure with all operations',
          theory: `
**Stack Data Structure - Last In, First Out**

Stack follows LIFO principle - like a stack of plates. Last element added is first to be removed.

**Core Operations:**
• PUSH - Add element to top
• POP - Remove and return top element
• PEEK/TOP - View top element without removing
• IS EMPTY - Check if stack is empty
• SIZE - Get number of elements
• CLEAR - Remove all elements

**Advanced Operations:**
• DUPLICATE TOP - Copy top element
• SWAP TOP TWO - Exchange top two elements
• SEARCH - Find element position from top

**Real-world Applications:**
• Function call management (call stack)
• Undo operations in software
• Expression evaluation and parsing
• Browser history navigation
• Backtracking algorithms
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Stack Operations ==="

${getTranslatedKeyword('display')} "1. Basic Stack Operations:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('stack')} myStack

${getTranslatedKeyword('display')} "Pushing elements:"
${getTranslatedKeyword('push')} myStack VALUE 10
${getTranslatedKeyword('push')} myStack VALUE 20
${getTranslatedKeyword('push')} myStack VALUE 30
${getTranslatedKeyword('push')} myStack VALUE 40
${getTranslatedKeyword('display')} "Stack after pushes: " + myStack

${getTranslatedKeyword('display')} "Stack size: " + SIZE OF myStack

${getTranslatedKeyword('display')} "Popping elements:"
${getTranslatedKeyword('calculate')} popped1 = ${getTranslatedKeyword('pop')} myStack
${getTranslatedKeyword('display')} "Popped: " + popped1 + " | Stack now: " + myStack

${getTranslatedKeyword('calculate')} popped2 = ${getTranslatedKeyword('pop')} myStack
${getTranslatedKeyword('display')} "Popped: " + popped2 + " | Stack now: " + myStack

${getTranslatedKeyword('display')} "2. Stack Inspection:"
${getTranslatedKeyword('calculate')} topElement = PEEK myStack
${getTranslatedKeyword('display')} "Top element (without removing): " + topElement
${getTranslatedKeyword('display')} "Stack unchanged: " + myStack

${getTranslatedKeyword('calculate')} stackSize = SIZE OF myStack
${getTranslatedKeyword('display')} "Current stack size: " + stackSize

${getTranslatedKeyword('calculate')} isEmpty = IS EMPTY myStack
${getTranslatedKeyword('display')} "Is stack empty? " + isEmpty

${getTranslatedKeyword('display')} "3. Practical Example - Undo System:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('stack')} undoStack
${getTranslatedKeyword('display')} "Simulating user actions:"

${getTranslatedKeyword('push')} undoStack VALUE "Typed 'Hello'"
${getTranslatedKeyword('display')} "Action: Typed 'Hello' | Undo stack: " + undoStack

${getTranslatedKeyword('push')} undoStack VALUE "Added space"
${getTranslatedKeyword('display')} "Action: Added space | Undo stack: " + undoStack

${getTranslatedKeyword('push')} undoStack VALUE "Typed 'World'"
${getTranslatedKeyword('display')} "Action: Typed 'World' | Undo stack: " + undoStack

${getTranslatedKeyword('display')} "User presses Ctrl+Z (Undo):"
${getTranslatedKeyword('calculate')} lastAction = ${getTranslatedKeyword('pop')} undoStack
${getTranslatedKeyword('display')} "Undoing: " + lastAction + " | Remaining: " + undoStack

${getTranslatedKeyword('display')} "4. Expression Evaluation:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('stack')} operatorStack
${getTranslatedKeyword('display')} "Evaluating: 2 + 3 * 4"
${getTranslatedKeyword('push')} operatorStack VALUE "+"
${getTranslatedKeyword('push')} operatorStack VALUE "*"
${getTranslatedKeyword('display')} "Operator stack: " + operatorStack
${getTranslatedKeyword('display')} "Processing operators in correct order..."`,
          output: `=== Complete Stack Operations ===
1. Basic Stack Operations:
📚 Created stack: myStack

Pushing elements:
⬆️ Pushed "10" to myStack → [10]
⬆️ Pushed "20" to myStack → [10, 20]
⬆️ Pushed "30" to myStack → [10, 20, 30]
⬆️ Pushed "40" to myStack → [10, 20, 30, 40]
Stack after pushes: [10, 20, 30, 40]
Stack size: 4

Popping elements:
⬇️ Popped "40" from myStack → [10, 20, 30]
🧮 Calculated: popped1 = 40
Popped: 40 | Stack now: [10, 20, 30]
⬇️ Popped "30" from myStack → [10, 20]
🧮 Calculated: popped2 = 30
Popped: 30 | Stack now: [10, 20]

2. Stack Inspection:
👁️ Peeked at top of myStack → 20
🧮 Calculated: topElement = 20
Top element (without removing): 20
Stack unchanged: [10, 20]`
        },
        'queues': {
          title: 'Queues - FIFO Operations',
          difficulty: 'Intermediate',
          time: '10 min',
          description: 'Master queue data structure with all operations',
          theory: `
**Queue Data Structure - First In, First Out**

Queue follows FIFO principle - like a line of people. First element added is first to be removed.

**Core Operations:**
• ENQUEUE - Add element to rear/back
• DEQUEUE - Remove element from front
• FRONT - View front element without removing
• REAR - View rear element without removing
• IS EMPTY - Check if queue is empty
• SIZE - Get number of elements

**Advanced Operations:**
• CLEAR - Remove all elements
• CONTAINS - Check if element exists
• PRIORITY QUEUE - Elements with priorities

**Real-world Applications:**
• Print job scheduling
• CPU task scheduling
• Breadth-first search algorithms
• Handling requests in web servers
• Call center systems
• Traffic management
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Queue Operations ==="

${getTranslatedKeyword('display')} "1. Basic Queue Operations:"
${getTranslatedKeyword('create')} QUEUE customerLine

${getTranslatedKeyword('display')} "Customers joining the line:"
ENQUEUE customerLine VALUE "Alice"
ENQUEUE customerLine VALUE "Bob"
ENQUEUE customerLine VALUE "Charlie"
ENQUEUE customerLine VALUE "Diana"
${getTranslatedKeyword('display')} "Queue: " + customerLine

${getTranslatedKeyword('display')} "Queue size: " + SIZE OF customerLine

${getTranslatedKeyword('display')} "Serving customers (FIFO):"
${getTranslatedKeyword('calculate')} served1 = DEQUEUE customerLine
${getTranslatedKeyword('display')} "Served: " + served1 + " | Queue now: " + customerLine

${getTranslatedKeyword('calculate')} served2 = DEQUEUE customerLine
${getTranslatedKeyword('display')} "Served: " + served2 + " | Queue now: " + customerLine

${getTranslatedKeyword('display')} "2. Queue Inspection:"
${getTranslatedKeyword('calculate')} nextCustomer = FRONT customerLine
${getTranslatedKeyword('display')} "Next to serve: " + nextCustomer

${getTranslatedKeyword('calculate')} lastCustomer = REAR customerLine
${getTranslatedKeyword('display')} "Last in line: " + lastCustomer

${getTranslatedKeyword('calculate')} queueSize = SIZE OF customerLine
${getTranslatedKeyword('display')} "People still waiting: " + queueSize

${getTranslatedKeyword('display')} "3. Print Job Queue Example:"
${getTranslatedKeyword('create')} QUEUE printQueue
${getTranslatedKeyword('display')} "Adding print jobs:"

ENQUEUE printQueue VALUE "Document1.pdf (5 pages)"
ENQUEUE printQueue VALUE "Photo.jpg (1 page)"
ENQUEUE printQueue VALUE "Report.docx (20 pages)"
ENQUEUE printQueue VALUE "Presentation.pptx (15 pages)"
${getTranslatedKeyword('display')} "Print queue: " + printQueue

${getTranslatedKeyword('display')} "Processing print jobs:"
${getTranslatedKeyword('while')} SIZE OF printQueue > 0
  ${getTranslatedKeyword('calculate')} currentJob = DEQUEUE printQueue
  ${getTranslatedKeyword('display')} "🖨️ Printing: " + currentJob
  ${getTranslatedKeyword('display')} "Jobs remaining: " + SIZE OF printQueue
END ${getTranslatedKeyword('while')}

${getTranslatedKeyword('display')} "✅ All print jobs completed!"

${getTranslatedKeyword('display')} "4. Priority Queue Example:"
${getTranslatedKeyword('create')} PRIORITY_QUEUE emergencyQueue
${getTranslatedKeyword('display')} "Hospital Emergency Queue:"

ENQUEUE emergencyQueue VALUE "Patient A - Broken arm" PRIORITY 2
ENQUEUE emergencyQueue VALUE "Patient B - Heart attack" PRIORITY 1
ENQUEUE emergencyQueue VALUE "Patient C - Minor cut" PRIORITY 3
ENQUEUE emergencyQueue VALUE "Patient D - Stroke" PRIORITY 1

${getTranslatedKeyword('display')} "Queue (sorted by priority): " + emergencyQueue
${getTranslatedKeyword('display')} "Treating patients by priority..."`,
          output: `=== Complete Queue Operations ===
1. Basic Queue Operations:
🚶 Created queue: customerLine

Customers joining the line:
➡️ Enqueued "Alice" to customerLine → [Alice]
➡️ Enqueued "Bob" to customerLine → [Alice, Bob]
➡️ Enqueued "Charlie" to customerLine → [Alice, Bob, Charlie]
➡️ Enqueued "Diana" to customerLine → [Alice, Bob, Charlie, Diana]
Queue: [Alice, Bob, Charlie, Diana]
Queue size: 4

Serving customers (FIFO):
⬅️ Dequeued "Alice" from customerLine → [Bob, Charlie, Diana]
🧮 Calculated: served1 = Alice
Served: Alice | Queue now: [Bob, Charlie, Diana]
⬅️ Dequeued "Bob" from customerLine → [Charlie, Diana]
🧮 Calculated: served2 = Bob
Served: Bob | Queue now: [Charlie, Diana]

2. Queue Inspection:
👁️ Front of customerLine → Charlie
🧮 Calculated: nextCustomer = Charlie
Next to serve: Charlie
👁️ Rear of customerLine → Diana
🧮 Calculated: lastCustomer = Diana
Last in line: Diana`
        },
        'advanced-structures': {
          title: 'Advanced Data Structures',
          difficulty: 'Advanced',
          time: '15 min',
          description: 'Trees, Graphs, Hash Tables, and Complex Structures',
          theory: `
**Advanced Data Structures**

Complex data structures for sophisticated algorithms and real-world applications.

**Binary Trees:**
• Hierarchical structure with parent-child relationships
• Binary Search Trees for efficient searching
• Tree traversal: Inorder, Preorder, Postorder
• Balanced trees for optimal performance

**Graphs:**
• Vertices (nodes) connected by edges
• Directed and undirected graphs
• Weighted and unweighted edges
• Graph traversal: BFS, DFS
• Shortest path algorithms

**Hash Tables:**
• Key-value pair storage
• O(1) average time complexity
• Hash functions and collision handling
• Dynamic resizing

**Linked Lists:**
• Dynamic memory allocation
• Singly and doubly linked
• Insertion and deletion operations
          `,
          code: `${getTranslatedKeyword('display')} "=== Advanced Data Structures ==="

${getTranslatedKeyword('display')} "1. Binary Search Tree:"
${getTranslatedKeyword('create')} BINARY_TREE bst
INSERT bst ROOT 50
INSERT bst LEFT 30
INSERT bst RIGHT 70
INSERT bst LEFT_LEFT 20
INSERT bst LEFT_RIGHT 40
INSERT bst RIGHT_LEFT 60
INSERT bst RIGHT_RIGHT 80

${getTranslatedKeyword('display')} "BST created with root 50"
${getTranslatedKeyword('display')} "Tree structure: " + bst

${getTranslatedKeyword('display')} "Tree traversals:"
${getTranslatedKeyword('calculate')} inorder = INORDER_TRAVERSAL bst
${getTranslatedKeyword('display')} "Inorder: " + inorder

${getTranslatedKeyword('calculate')} preorder = PREORDER_TRAVERSAL bst
${getTranslatedKeyword('display')} "Preorder: " + preorder

${getTranslatedKeyword('calculate')} postorder = POSTORDER_TRAVERSAL bst
${getTranslatedKeyword('display')} "Postorder: " + postorder

${getTranslatedKeyword('display')} "2. Graph Operations:"
${getTranslatedKeyword('create')} GRAPH socialNetwork
ADD VERTEX socialNetwork "Alice"
ADD VERTEX socialNetwork "Bob"
ADD VERTEX socialNetwork "Charlie"
ADD VERTEX socialNetwork "Diana"

ADD EDGE socialNetwork "Alice" TO "Bob" WEIGHT 1
ADD EDGE socialNetwork "Bob" TO "Charlie" WEIGHT 2
ADD EDGE socialNetwork "Charlie" TO "Diana" WEIGHT 1
ADD EDGE socialNetwork "Alice" TO "Diana" WEIGHT 3

${getTranslatedKeyword('display')} "Social network graph created"
${getTranslatedKeyword('display')} "Vertices: " + GET_VERTICES socialNetwork
${getTranslatedKeyword('display')} "Edges: " + GET_EDGES socialNetwork

${getTranslatedKeyword('display')} "Graph traversals:"
${getTranslatedKeyword('calculate')} bfsResult = BFS socialNetwork FROM "Alice"
${getTranslatedKeyword('display')} "BFS from Alice: " + bfsResult

${getTranslatedKeyword('calculate')} dfsResult = DFS socialNetwork FROM "Alice"
${getTranslatedKeyword('display')} "DFS from Alice: " + dfsResult

${getTranslatedKeyword('display')} "3. Hash Table Operations:"
${getTranslatedKeyword('create')} HASH_TABLE phoneBook
PUT phoneBook KEY "Alice" VALUE "123-456-7890"
PUT phoneBook KEY "Bob" VALUE "987-654-3210"
PUT phoneBook KEY "Charlie" VALUE "555-123-4567"

${getTranslatedKeyword('display')} "Phone book created"
${getTranslatedKeyword('calculate')} alicePhone = GET phoneBook KEY "Alice"
${getTranslatedKeyword('display')} "Alice's phone: " + alicePhone

${getTranslatedKeyword('calculate')} hasCharlie = CONTAINS phoneBook KEY "Charlie"
${getTranslatedKeyword('display')} "Has Charlie? " + hasCharlie

${getTranslatedKeyword('display')} "All keys: " + GET_KEYS phoneBook

${getTranslatedKeyword('display')} "4. Linked List Operations:"
${getTranslatedKeyword('create')} LINKED_LIST playlist
INSERT playlist AT_BEGINNING "Song 1"
INSERT playlist AT_END "Song 2"
INSERT playlist AT_END "Song 3"
INSERT playlist AT_POSITION 2 "Song 2.5"

${getTranslatedKeyword('display')} "Playlist: " + playlist
${getTranslatedKeyword('display')} "List size: " + SIZE OF playlist

REMOVE playlist AT_POSITION 1
${getTranslatedKeyword('display')} "After removal: " + playlist

${getTranslatedKeyword('calculate')} found = SEARCH playlist FOR "Song 3"
${getTranslatedKeyword('display')} "Found Song 3 at position: " + found`,
          output: `=== Advanced Data Structures ===
1. Binary Search Tree:
🌳 Created tree: bst
🌿 Inserted root node: 50
🌿 Inserted left child: 30
🌿 Inserted right child: 70
🌿 Inserted left-left: 20
🌿 Inserted left-right: 40
🌿 Inserted right-left: 60
🌿 Inserted right-right: 80
BST created with root 50
Tree structure: [50, 30, 70, 20, 40, 60, 80]

Tree traversals:
🔄 Performing inorder traversal...
🧮 Calculated: inorder = [20, 30, 40, 50, 60, 70, 80]
Inorder: [20, 30, 40, 50, 60, 70, 80]
🔄 Performing preorder traversal...
🧮 Calculated: preorder = [50, 30, 20, 40, 70, 60, 80]
Preorder: [50, 30, 20, 40, 70, 60, 80]

2. Graph Operations:
📈 Created graph: socialNetwork
➕ Added vertex: Alice
➕ Added vertex: Bob
➕ Added vertex: Charlie
➕ Added vertex: Diana
🔗 Added edge: Alice → Bob (weight: 1)
🔗 Added edge: Bob → Charlie (weight: 2)
🔗 Added edge: Charlie → Diana (weight: 1)
🔗 Added edge: Alice → Diana (weight: 3)
Social network graph created`
        }
      }
    },

    ai: {
      title: '🤖 AI & Data Science',
      icon: <Brain className="w-5 h-5" />,
      lessons: {
        'data-analysis': {
          title: 'Complete Data Analysis',
          difficulty: 'Advanced',
          time: '20 min',
          description: 'Master data analysis with statistics and visualization',
          theory: `
**Complete Data Analysis Pipeline**

SRINJAN provides comprehensive data analysis capabilities rivaling Python's pandas and R.

**Statistical Functions:**
• MEAN, MEDIAN, MODE - Central tendency
• STANDARD_DEVIATION, VARIANCE - Spread measures
• CORRELATION, COVARIANCE - Relationships
• PERCENTILE, QUARTILE - Distribution analysis
• SKEWNESS, KURTOSIS - Shape measures

**Data Visualization:**
• LINE_CHART - Trends over time
• BAR_CHART - Category comparisons
• HISTOGRAM - Distribution visualization
• SCATTER_PLOT - Relationship analysis
• PIE_CHART - Proportion display
• BOX_PLOT - Statistical summaries

**Data Manipulation:**
• FILTER - Select specific data
• GROUP_BY - Aggregate operations
• SORT - Order data
• MERGE - Combine datasets
• PIVOT - Reshape data
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Data Analysis ==="

${getTranslatedKeyword('display')} "1. Creating Sample Dataset:"
${getTranslatedKeyword('create')} DATAFRAME sales_data
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} months SIZE 12
${getTranslatedKeyword('store')} "Jan" AT months[0]
${getTranslatedKeyword('store')} "Feb" AT months[1]
${getTranslatedKeyword('store')} "Mar" AT months[2]
${getTranslatedKeyword('store')} "Apr" AT months[3]
${getTranslatedKeyword('store')} "May" AT months[4]
${getTranslatedKeyword('store')} "Jun" AT months[5]
${getTranslatedKeyword('store')} "Jul" AT months[6]
${getTranslatedKeyword('store')} "Aug" AT months[7]
${getTranslatedKeyword('store')} "Sep" AT months[8]
${getTranslatedKeyword('store')} "Oct" AT months[9]
${getTranslatedKeyword('store')} "Nov" AT months[10]
${getTranslatedKeyword('store')} "Dec" AT months[11]

${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} sales SIZE 12
${getTranslatedKeyword('store')} 12000 AT sales[0]
${getTranslatedKeyword('store')} 15000 AT sales[1]
${getTranslatedKeyword('store')} 18000 AT sales[2]
${getTranslatedKeyword('store')} 14000 AT sales[3]
${getTranslatedKeyword('store')} 16000 AT sales[4]
${getTranslatedKeyword('store')} 20000 AT sales[5]
${getTranslatedKeyword('store')} 22000 AT sales[6]
${getTranslatedKeyword('store')} 19000 AT sales[7]
${getTranslatedKeyword('store')} 17000 AT sales[8]
${getTranslatedKeyword('store')} 21000 AT sales[9]
${getTranslatedKeyword('store')} 23000 AT sales[10]
${getTranslatedKeyword('store')} 25000 AT sales[11]

SET sales_data.month = months
SET sales_data.sales = sales
SET sales_data.profit = sales * 0.2

${getTranslatedKeyword('display')} "Dataset created with 12 months of sales data"
${getTranslatedKeyword('display')} "Sample data: " + HEAD(sales_data, 3)

${getTranslatedKeyword('display')} "2. Statistical Analysis:"
${getTranslatedKeyword('calculate')} mean_sales = MEAN(sales_data.sales)
${getTranslatedKeyword('display')} "Average Monthly Sales: $" + mean_sales

${getTranslatedKeyword('calculate')} median_sales = MEDIAN(sales_data.sales)
${getTranslatedKeyword('display')} "Median Sales: $" + median_sales

${getTranslatedKeyword('calculate')} std_dev = STANDARD_DEVIATION(sales_data.sales)
${getTranslatedKeyword('display')} "Standard Deviation: $" + std_dev

${getTranslatedKeyword('calculate')} max_sales = MAX(sales_data.sales)
${getTranslatedKeyword('display')} "Highest Sales Month: $" + max_sales

${getTranslatedKeyword('calculate')} min_sales = MIN(sales_data.sales)
${getTranslatedKeyword('display')} "Lowest Sales Month: $" + min_sales

${getTranslatedKeyword('calculate')} total_sales = SUM(sales_data.sales)
${getTranslatedKeyword('display')} "Total Annual Sales: $" + total_sales

${getTranslatedKeyword('display')} "3. Advanced Analytics:"
${getTranslatedKeyword('calculate')} growth_rate = (sales_data.sales[11] - sales_data.sales[0]) / sales_data.sales[0] * 100
${getTranslatedKeyword('display')} "Annual Growth Rate: " + growth_rate + "%"

${getTranslatedKeyword('calculate')} q1 = PERCENTILE(sales_data.sales, 25)
${getTranslatedKeyword('calculate')} q3 = PERCENTILE(sales_data.sales, 75)
${getTranslatedKeyword('display')} "Q1 (25th percentile): $" + q1
${getTranslatedKeyword('display')} "Q3 (75th percentile): $" + q3

${getTranslatedKeyword('calculate')} correlation = CORRELATION(sales_data.sales, sales_data.profit)
${getTranslatedKeyword('display')} "Sales-Profit Correlation: " + correlation

${getTranslatedKeyword('display')} "4. Data Visualization:"
CREATE PLOT sales_trend
PLOT sales_data.month VS sales_data.sales AS LINE_CHART
SET sales_trend.title = "Monthly Sales Trend 2024"
SET sales_trend.x_label = "Month"
SET sales_trend.y_label = "Sales ($)"
SET sales_trend.color = "blue"
SHOW sales_trend

CREATE PLOT profit_analysis
PLOT sales_data.month VS sales_data.profit AS BAR_CHART
SET profit_analysis.title = "Monthly Profit Analysis"
SET profit_analysis.color = "green"
SHOW profit_analysis

CREATE HISTOGRAM sales_distribution
PLOT sales_data.sales AS HISTOGRAM BINS 5
SET sales_distribution.title = "Sales Distribution"
SHOW sales_distribution

${getTranslatedKeyword('display')} "5. Data Filtering & Grouping:"
${getTranslatedKeyword('calculate')} high_sales_months = FILTER sales_data WHERE sales > 20000
${getTranslatedKeyword('display')} "High sales months (>$20k): " + high_sales_months.month

${getTranslatedKeyword('calculate')} quarterly_sales = GROUP_BY sales_data BY QUARTER SUM sales
${getTranslatedKeyword('display')} "Quarterly sales summary: " + quarterly_sales`,
          output: `=== Complete Data Analysis ===
1. Creating Sample Dataset:
📊 Created dataframe: sales_data
📊 Created array: months[12]
📊 Created array: sales[12]
💾 Stored monthly data in arrays
📊 Dataset configured with months, sales, and profit columns
Dataset created with 12 months of sales data
Sample data: 
   month  sales  profit
0    Jan  12000    2400
1    Feb  15000    3000
2    Mar  18000    3600

2. Statistical Analysis:
📈 Performing statistical analysis...
🧮 Calculated: mean_sales = 18500
Average Monthly Sales: $18500
🧮 Calculated: median_sales = 18000
Median Sales: $18000
🧮 Calculated: std_dev = 4127.31
Standard Deviation: $4127.31
🧮 Calculated: max_sales = 25000
Highest Sales Month: $25000
🧮 Calculated: min_sales = 12000
Lowest Sales Month: $12000
🧮 Calculated: total_sales = 222000
Total Annual Sales: $222000

3. Advanced Analytics:
🧮 Calculated: growth_rate = 108.33
Annual Growth Rate: 108.33%
📊 Calculated percentiles...
🧮 Calculated: q1 = 15500
Q1 (25th percentile): $15500
🧮 Calculated: q3 = 21500
Q3 (75th percentile): $21500
📈 Calculated correlation...
🧮 Calculated: correlation = 1.0
Sales-Profit Correlation: 1.0

4. Data Visualization:
📊 Created plot: sales_trend
📈 Generated line chart: Monthly Sales vs Month
📊 Chart configured with title and labels
📊 Chart displayed successfully
📊 Created plot: profit_analysis
📊 Generated bar chart: Monthly Profit Analysis
📊 Chart displayed successfully`
        },
        'machine-learning': {
          title: 'Machine Learning Models',
          difficulty: 'Advanced',
          time: '25 min',
          description: 'Build and train complete ML models',
          theory: `
**Machine Learning in SRINJAN**

Complete ML pipeline with natural language commands, rivaling Python's scikit-learn and TensorFlow.

**Supervised Learning:**
• LINEAR_REGRESSION - Predict continuous values
• LOGISTIC_REGRESSION - Binary classification
• DECISION_TREE - Rule-based decisions
• RANDOM_FOREST - Ensemble method
• SVM - Support Vector Machines
• NEURAL_NETWORK - Deep learning

**Unsupervised Learning:**
• K_MEANS - Clustering
• HIERARCHICAL_CLUSTERING - Tree-based clustering
• PCA - Dimensionality reduction
• DBSCAN - Density-based clustering

**Model Evaluation:**
• ACCURACY, PRECISION, RECALL - Classification metrics
• MSE, RMSE, R2 - Regression metrics
• CONFUSION_MATRIX - Detailed classification results
• CROSS_VALIDATION - Robust evaluation

**Model Operations:**
• TRAIN - Fit model to data
• PREDICT - Make predictions
• EVALUATE - Assess performance
• SAVE/LOAD - Model persistence
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Machine Learning Pipeline ==="

${getTranslatedKeyword('display')} "1. Data Preparation:"
${getTranslatedKeyword('create')} DATAFRAME housing_data
LOAD DATA FROM "housing.csv" INTO housing_data
${getTranslatedKeyword('display')} "Dataset loaded: " + SHAPE(housing_data) + " rows and columns"

${getTranslatedKeyword('display')} "Data preprocessing:"
${getTranslatedKeyword('calculate')} missing_values = COUNT_MISSING(housing_data)
${getTranslatedKeyword('display')} "Missing values: " + missing_values

FILL_MISSING housing_data WITH MEAN
NORMALIZE housing_data COLUMNS ["price", "area", "bedrooms"]
${getTranslatedKeyword('display')} "✅ Data cleaned and normalized"

${getTranslatedKeyword('display')} "2. Linear Regression Model:"
CREATE LINEAR_REGRESSION price_model
SET price_model.features = ["area", "bedrooms", "bathrooms", "age"]
SET price_model.target = "price"

SPLIT housing_data INTO training_set, test_set RATIO 0.8
${getTranslatedKeyword('display')} "Data split: " + SIZE(training_set) + " training, " + SIZE(test_set) + " testing"

TRAIN price_model WITH training_set
${getTranslatedKeyword('display')} "✅ Linear regression model trained"

${getTranslatedKeyword('calculate')} predictions = PREDICT price_model WITH test_set
${getTranslatedKeyword('calculate')} r2_score = R2_SCORE(test_set.price, predictions)
${getTranslatedKeyword('calculate')} mse = MSE(test_set.price, predictions)
${getTranslatedKeyword('display')} "Model Performance:"
${getTranslatedKeyword('display')} "R² Score: " + r2_score
${getTranslatedKeyword('display')} "MSE: " + mse

${getTranslatedKeyword('display')} "3. Neural Network for Classification:"
${getTranslatedKeyword('create')} DATAFRAME iris_data
LOAD DATA FROM "iris.csv" INTO iris_data

CREATE NEURAL_NETWORK iris_classifier
SET iris_classifier.layers = [4, 10, 8, 3]
SET iris_classifier.activation = "relu"
SET iris_classifier.output_activation = "softmax"
SET iris_classifier.optimizer = "adam"
SET iris_classifier.loss = "categorical_crossentropy"

${getTranslatedKeyword('display')} "Neural network architecture:"
${getTranslatedKeyword('display')} "Input layer: 4 features"
${getTranslatedKeyword('display')} "Hidden layers: 10, 8 neurons"
${getTranslatedKeyword('display')} "Output layer: 3 classes"

SPLIT iris_data INTO iris_train, iris_test RATIO 0.7
TRAIN iris_classifier WITH iris_train FOR 100 EPOCHS BATCH_SIZE 32

${getTranslatedKeyword('calculate')} accuracy = EVALUATE iris_classifier WITH iris_test
${getTranslatedKeyword('display')} "Neural Network Accuracy: " + accuracy + "%"

${getTranslatedKeyword('calculate')} confusion_matrix = CONFUSION_MATRIX iris_classifier WITH iris_test
${getTranslatedKeyword('display')} "Confusion Matrix:"
${getTranslatedKeyword('display')} confusion_matrix

${getTranslatedKeyword('display')} "4. Random Forest Ensemble:"
CREATE RANDOM_FOREST forest_model
SET forest_model.n_estimators = 100
SET forest_model.max_depth = 10
SET forest_model.features = ["sepal_length", "sepal_width", "petal_length", "petal_width"]
SET forest_model.target = "species"

TRAIN forest_model WITH iris_train
${getTranslatedKeyword('calculate')} forest_accuracy = EVALUATE forest_model WITH iris_test
${getTranslatedKeyword('display')} "Random Forest Accuracy: " + forest_accuracy + "%"

${getTranslatedKeyword('calculate')} feature_importance = GET_FEATURE_IMPORTANCE forest_model
${getTranslatedKeyword('display')} "Feature Importance: " + feature_importance

${getTranslatedKeyword('display')} "5. Clustering Analysis:"
CREATE K_MEANS clusterer
SET clusterer.n_clusters = 3
SET clusterer.features = ["sepal_length", "sepal_width", "petal_length", "petal_width"]

FIT clusterer WITH iris_data
${getTranslatedKeyword('calculate')} cluster_labels = PREDICT clusterer WITH iris_data
${getTranslatedKeyword('calculate')} silhouette_score = SILHOUETTE_SCORE(iris_data, cluster_labels)
${getTranslatedKeyword('display')} "Clustering Silhouette Score: " + silhouette_score

${getTranslatedKeyword('display')} "6. Model Comparison:"
${getTranslatedKeyword('create')} DATAFRAME model_comparison
SET model_comparison.model = ["Neural Network", "Random Forest", "K-Means"]
SET model_comparison.accuracy = [accuracy, forest_accuracy, silhouette_score]
${getTranslatedKeyword('display')} "Model Performance Comparison:"
${getTranslatedKeyword('display')} model_comparison

${getTranslatedKeyword('display')} "7. Model Deployment:"
SAVE iris_classifier TO "iris_model.pkl"
SAVE forest_model TO "forest_model.pkl"
${getTranslatedKeyword('display')} "✅ Models saved for production deployment"

${getTranslatedKeyword('display')} "Making predictions on new data:"
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} new_sample SIZE 4
${getTranslatedKeyword('store')} 5.1 AT new_sample[0]
${getTranslatedKeyword('store')} 3.5 AT new_sample[1]
${getTranslatedKeyword('store')} 1.4 AT new_sample[2]
${getTranslatedKeyword('store')} 0.2 AT new_sample[3]

${getTranslatedKeyword('calculate')} prediction = PREDICT iris_classifier WITH new_sample
${getTranslatedKeyword('calculate')} confidence = GET_CONFIDENCE iris_classifier WITH new_sample
${getTranslatedKeyword('display')} "Prediction: " + prediction + " (Confidence: " + confidence + ")"`,
          output: `=== Complete Machine Learning Pipeline ===
1. Data Preparation:
📊 Created dataframe: housing_data
📊 Loading data from housing.csv
📊 Data loaded: (1000, 8) rows and columns
📈 Analyzing missing values...
🧮 Calculated: missing_values = 15
Missing values: 15
🔧 Filling missing values with mean
🔧 Normalizing columns: price, area, bedrooms
✅ Data cleaned and normalized

2. Linear Regression Model:
🤖 Created linear regression model: price_model
⚙️ Model configured with features: area, bedrooms, bathrooms, age
⚙️ Target variable set: price
📊 Split data: 800 training, 200 testing
🤖 Training linear regression model...
📈 Model training completed
✅ Linear regression model trained
🎯 Making predictions on test set...
📊 Evaluating model performance...
🧮 Calculated: r2_score = 0.847
🧮 Calculated: mse = 0.023
Model Performance:
R² Score: 0.847
MSE: 0.023

3. Neural Network for Classification:
📊 Created dataframe: iris_data
📊 Loading data from iris.csv
🧠 Created neural network: iris_classifier
⚙️ Network architecture configured:
  → Input layer: 4 neurons
  → Hidden layer 1: 10 neurons (ReLU)
  → Hidden layer 2: 8 neurons (ReLU)
  → Output layer: 3 neurons (Softmax)
  → Optimizer: Adam
  → Loss: Categorical Crossentropy
Neural network architecture:
Input layer: 4 features
Hidden layers: 10, 8 neurons
Output layer: 3 classes
📊 Split data: 105 training, 45 testing
🤖 Training neural network...
📈 Epoch 1/100 - Loss: 1.2456, Accuracy: 45.7%
📈 Epoch 25/100 - Loss: 0.4321, Accuracy: 87.6%
📈 Epoch 50/100 - Loss: 0.2156, Accuracy: 94.3%
📈 Epoch 75/100 - Loss: 0.1234, Accuracy: 97.1%
📈 Epoch 100/100 - Loss: 0.0876, Accuracy: 98.9%
🎯 Evaluating model on test set...
🧮 Calculated: accuracy = 97.8
Neural Network Accuracy: 97.8%`
        },
        'deep-learning': {
          title: 'Deep Learning & Neural Networks',
          difficulty: 'Expert',
          time: '30 min',
          description: 'Advanced neural networks and deep learning',
          theory: `
**Deep Learning in SRINJAN**

Advanced neural network architectures with natural language commands.

**Neural Network Types:**
• FEEDFORWARD - Basic neural networks
• CONVOLUTIONAL - Image processing (CNN)
• RECURRENT - Sequential data (RNN, LSTM)
• TRANSFORMER - Attention mechanisms
• AUTOENCODER - Unsupervised learning
• GAN - Generative models

**Advanced Features:**
• DROPOUT - Prevent overfitting
• BATCH_NORMALIZATION - Stable training
• LEARNING_RATE_SCHEDULING - Adaptive learning
• EARLY_STOPPING - Prevent overtraining
• REGULARIZATION - L1, L2 penalties

**Optimization:**
• ADAM, SGD, RMSPROP - Optimizers
• MOMENTUM - Accelerated convergence
• GRADIENT_CLIPPING - Stable gradients

**Applications:**
• Image classification and recognition
• Natural language processing
• Time series prediction
• Anomaly detection
• Recommendation systems
          `,
          code: `${getTranslatedKeyword('display')} "=== Advanced Deep Learning ==="

${getTranslatedKeyword('display')} "1. Convolutional Neural Network (CNN):"
CREATE CONVOLUTIONAL_NETWORK image_classifier
SET image_classifier.input_shape = [224, 224, 3]

ADD_LAYER image_classifier CONVOLUTIONAL filters=32 kernel_size=3 activation="relu"
ADD_LAYER image_classifier MAX_POOLING pool_size=2
ADD_LAYER image_classifier CONVOLUTIONAL filters=64 kernel_size=3 activation="relu"
ADD_LAYER image_classifier MAX_POOLING pool_size=2
ADD_LAYER image_classifier CONVOLUTIONAL filters=128 kernel_size=3 activation="relu"
ADD_LAYER image_classifier GLOBAL_AVERAGE_POOLING
ADD_LAYER image_classifier DROPOUT rate=0.5
ADD_LAYER image_classifier DENSE units=128 activation="relu"
ADD_LAYER image_classifier DENSE units=10 activation="softmax"

SET image_classifier.optimizer = "adam"
SET image_classifier.learning_rate = 0.001
SET image_classifier.loss = "categorical_crossentropy"

${getTranslatedKeyword('display')} "CNN Architecture:"
${getTranslatedKeyword('display')} "Input: 224x224x3 (RGB images)"
${getTranslatedKeyword('display')} "Conv2D(32) → MaxPool → Conv2D(64) → MaxPool → Conv2D(128)"
${getTranslatedKeyword('display')} "GlobalAvgPool → Dropout(0.5) → Dense(128) → Dense(10)"

${getTranslatedKeyword('display')} "2. Recurrent Neural Network (LSTM):"
CREATE LSTM_NETWORK text_classifier
SET text_classifier.input_shape = [100, 300]  // 100 words, 300-dim embeddings

ADD_LAYER text_classifier EMBEDDING vocab_size=10000 embedding_dim=300
ADD_LAYER text_classifier LSTM units=128 return_sequences=true dropout=0.2
ADD_LAYER text_classifier LSTM units=64 dropout=0.2
ADD_LAYER text_classifier DENSE units=32 activation="relu"
ADD_LAYER text_classifier DROPOUT rate=0.5
ADD_LAYER text_classifier DENSE units=1 activation="sigmoid"

SET text_classifier.optimizer = "adam"
SET text_classifier.loss = "binary_crossentropy"

${getTranslatedKeyword('display')} "LSTM Architecture for Text Classification:"
${getTranslatedKeyword('display')} "Embedding(10000, 300) → LSTM(128) → LSTM(64) → Dense(32) → Dense(1)"

${getTranslatedKeyword('display')} "3. Autoencoder for Anomaly Detection:"
CREATE AUTOENCODER anomaly_detector
SET anomaly_detector.input_dim = 784  // 28x28 images flattened

// Encoder
ADD_LAYER anomaly_detector DENSE units=512 activation="relu" name="encoder_1"
ADD_LAYER anomaly_detector DENSE units=256 activation="relu" name="encoder_2"
ADD_LAYER anomaly_detector DENSE units=128 activation="relu" name="encoder_3"
ADD_LAYER anomaly_detector DENSE units=64 activation="relu" name="bottleneck"

// Decoder
ADD_LAYER anomaly_detector DENSE units=128 activation="relu" name="decoder_1"
ADD_LAYER anomaly_detector DENSE units=256 activation="relu" name="decoder_2"
ADD_LAYER anomaly_detector DENSE units=512 activation="relu" name="decoder_3"
ADD_LAYER anomaly_detector DENSE units=784 activation="sigmoid" name="output"

SET anomaly_detector.optimizer = "adam"
SET anomaly_detector.loss = "mse"

${getTranslatedKeyword('display')} "Autoencoder Architecture:"
${getTranslatedKeyword('display')} "Encoder: 784 → 512 → 256 → 128 → 64"
${getTranslatedKeyword('display')} "Decoder: 64 → 128 → 256 → 512 → 784"

${getTranslatedKeyword('display')} "4. Generative Adversarial Network (GAN):"
CREATE GAN image_generator

// Generator Network
CREATE NEURAL_NETWORK generator
ADD_LAYER generator DENSE units=256 activation="relu" input_dim=100
ADD_LAYER generator BATCH_NORMALIZATION
ADD_LAYER generator DENSE units=512 activation="relu"
ADD_LAYER generator BATCH_NORMALIZATION
ADD_LAYER generator DENSE units=1024 activation="relu"
ADD_LAYER generator BATCH_NORMALIZATION
ADD_LAYER generator DENSE units=784 activation="tanh"
ADD_LAYER generator RESHAPE target_shape=[28, 28, 1]

// Discriminator Network
CREATE NEURAL_NETWORK discriminator
ADD_LAYER discriminator FLATTEN input_shape=[28, 28, 1]
ADD_LAYER discriminator DENSE units=512 activation="leaky_relu"
ADD_LAYER discriminator DROPOUT rate=0.3
ADD_LAYER discriminator DENSE units=256 activation="leaky_relu"
ADD_LAYER discriminator DROPOUT rate=0.3
ADD_LAYER discriminator DENSE units=1 activation="sigmoid"

SET image_generator.generator = generator
SET image_generator.discriminator = discriminator
SET image_generator.optimizer = "adam"
SET image_generator.learning_rate = 0.0002

${getTranslatedKeyword('display')} "GAN Architecture:"
${getTranslatedKeyword('display')} "Generator: 100 → 256 → 512 → 1024 → 784 → 28x28x1"
${getTranslatedKeyword('display')} "Discriminator: 28x28x1 → 512 → 256 → 1"

${getTranslatedKeyword('display')} "5. Transfer Learning:"
CREATE PRETRAINED_MODEL transfer_model
LOAD_PRETRAINED transfer_model MODEL "ResNet50" WEIGHTS "imagenet"
FREEZE_LAYERS transfer_model EXCEPT_LAST 5

ADD_LAYER transfer_model GLOBAL_AVERAGE_POOLING
ADD_LAYER transfer_model DENSE units=256 activation="relu"
ADD_LAYER transfer_model DROPOUT rate=0.5
ADD_LAYER transfer_model DENSE units=10 activation="softmax"

SET transfer_model.optimizer = "adam"
SET transfer_model.learning_rate = 0.0001

${getTranslatedKeyword('display')} "Transfer Learning Setup:"
${getTranslatedKeyword('display')} "Base: ResNet50 (ImageNet weights, frozen)"
${getTranslatedKeyword('display')} "Custom: GlobalAvgPool → Dense(256) → Dropout → Dense(10)"

${getTranslatedKeyword('display')} "6. Training with Advanced Techniques:"
${getTranslatedKeyword('create')} DATAFRAME training_data
LOAD DATA FROM "images.csv" INTO training_data

// Data Augmentation
CREATE DATA_AUGMENTATION augmenter
SET augmenter.rotation_range = 20
SET augmenter.width_shift_range = 0.2
SET augmenter.height_shift_range = 0.2
SET augmenter.horizontal_flip = true
SET augmenter.zoom_range = 0.2

// Learning Rate Scheduling
CREATE LEARNING_RATE_SCHEDULER scheduler
SET scheduler.initial_lr = 0.001
SET scheduler.decay_factor = 0.5
SET scheduler.patience = 5

// Early Stopping
CREATE EARLY_STOPPING early_stop
SET early_stop.monitor = "val_accuracy"
SET early_stop.patience = 10
SET early_stop.restore_best_weights = true

${getTranslatedKeyword('display')} "Training CNN with advanced techniques:"
TRAIN image_classifier WITH training_data 
  EPOCHS 100 
  BATCH_SIZE 32
  VALIDATION_SPLIT 0.2
  AUGMENTATION augmenter
  SCHEDULER scheduler
  EARLY_STOPPING early_stop

${getTranslatedKeyword('calculate')} final_accuracy = GET_METRIC image_classifier "accuracy"
${getTranslatedKeyword('calculate')} final_loss = GET_METRIC image_classifier "loss"
${getTranslatedKeyword('display')} "Final Model Performance:"
${getTranslatedKeyword('display')} "Accuracy: " + final_accuracy + "%"
${getTranslatedKeyword('display')} "Loss: " + final_loss

${getTranslatedKeyword('display')} "7. Model Interpretation:"
${getTranslatedKeyword('calculate')} feature_maps = GET_FEATURE_MAPS image_classifier LAYER "conv2d_1"
${getTranslatedKeyword('display')} "Feature maps extracted from first conv layer"

${getTranslatedKeyword('calculate')} attention_weights = GET_ATTENTION_WEIGHTS text_classifier
${getTranslatedKeyword('display')} "Attention weights for text analysis: " + attention_weights

CREATE VISUALIZATION model_viz
PLOT_MODEL_ARCHITECTURE image_classifier
PLOT_TRAINING_HISTORY image_classifier
PLOT_CONFUSION_MATRIX image_classifier WITH test_data
SHOW model_viz`,
          output: `=== Advanced Deep Learning ===
1. Convolutional Neural Network (CNN):
🧠 Created convolutional network: image_classifier
⚙️ Input shape configured: 224×224×3
🔧 Added Conv2D layer: 32 filters, 3×3 kernel, ReLU activation
🔧 Added MaxPooling layer: 2×2 pool size
🔧 Added Conv2D layer: 64 filters, 3×3 kernel, ReLU activation
🔧 Added MaxPooling layer: 2×2 pool size
🔧 Added Conv2D layer: 128 filters, 3×3 kernel, ReLU activation
🔧 Added GlobalAveragePooling layer
🔧 Added Dropout layer: 50% rate
🔧 Added Dense layer: 128 units, ReLU activation
🔧 Added Dense layer: 10 units, Softmax activation
⚙️ Optimizer set: Adam (lr=0.001)
⚙️ Loss function: Categorical Crossentropy
CNN Architecture:
Input: 224x224x3 (RGB images)
Conv2D(32) → MaxPool → Conv2D(64) → MaxPool → Conv2D(128)
GlobalAvgPool → Dropout(0.5) → Dense(128) → Dense(10)

2. Recurrent Neural Network (LSTM):
🧠 Created LSTM network: text_classifier
⚙️ Input shape configured: 100×300
🔧 Added Embedding layer: vocab=10000, dim=300
🔧 Added LSTM layer: 128 units, return_sequences=true, dropout=0.2
🔧 Added LSTM layer: 64 units, dropout=0.2
🔧 Added Dense layer: 32 units, ReLU activation
🔧 Added Dropout layer: 50% rate
🔧 Added Dense layer: 1 unit, Sigmoid activation
⚙️ Optimizer set: Adam
⚙️ Loss function: Binary Crossentropy
LSTM Architecture for Text Classification:
Embedding(10000, 300) → LSTM(128) → LSTM(64) → Dense(32) → Dense(1)

3. Autoencoder for Anomaly Detection:
🧠 Created autoencoder: anomaly_detector
⚙️ Input dimension: 784 (28×28 flattened)
🔧 Added encoder layers: 784→512→256→128→64
🔧 Added decoder layers: 64→128→256→512→784
⚙️ Optimizer set: Adam
⚙️ Loss function: Mean Squared Error
Autoencoder Architecture:
Encoder: 784 → 512 → 256 → 128 → 64
Decoder: 64 → 128 → 256 → 512 → 784

4. Generative Adversarial Network (GAN):
🧠 Created GAN: image_generator
🎭 Generator network configured: 100→256→512→1024→784→28×28×1
🕵️ Discriminator network configured: 28×28×1→512→256→1
⚙️ Both networks use Adam optimizer (lr=0.0002)
GAN Architecture:
Generator: 100 → 256 → 512 → 1024 → 784 → 28x28x1
Discriminator: 28x28x1 → 512 → 256 → 1`
        },
        'complete-data-science': {
          title: 'Complete Data Science Workflow',
          difficulty: 'Expert',
          time: '35 min',
          description: 'End-to-end data science project with all components',
          theory: `
**Complete Data Science Pipeline**

Full-scale data science project covering every aspect from data collection to deployment.

**Data Pipeline:**
• DATA_COLLECTION - Multiple sources
• DATA_CLEANING - Handle missing, outliers
• FEATURE_ENGINEERING - Create new variables
• EXPLORATORY_ANALYSIS - Understand patterns
• MODEL_SELECTION - Choose best algorithm
• HYPERPARAMETER_TUNING - Optimize performance
• MODEL_VALIDATION - Cross-validation
• DEPLOYMENT - Production ready

**Advanced Analytics:**
• TIME_SERIES_ANALYSIS - Temporal patterns
• SURVIVAL_ANALYSIS - Time-to-event
• CAUSAL_INFERENCE - Cause-effect relationships
• A/B_TESTING - Experimental design
• RECOMMENDATION_SYSTEMS - Personalization

**Big Data Processing:**
• DISTRIBUTED_COMPUTING - Handle large datasets
• STREAMING_ANALYTICS - Real-time processing
• PARALLEL_PROCESSING - Speed optimization

**MLOps:**
• MODEL_VERSIONING - Track changes
• AUTOMATED_TESTING - Quality assurance
• CONTINUOUS_INTEGRATION - Seamless updates
• MONITORING - Performance tracking
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Data Science Workflow ==="

${getTranslatedKeyword('display')} "🔄 PHASE 1: Data Collection & Integration"
${getTranslatedKeyword('create')} DATA_PIPELINE pipeline

// Multiple data sources
CONNECT pipeline TO DATABASE "postgresql://sales_db"
CONNECT pipeline TO API "https://api.weather.com"
CONNECT pipeline TO FILE "customer_data.csv"
CONNECT pipeline TO STREAM "real_time_events"

${getTranslatedKeyword('display')} "📊 Loading data from multiple sources:"
${getTranslatedKeyword('create')} DATAFRAME sales_data
${getTranslatedKeyword('create')} DATAFRAME weather_data
${getTranslatedKeyword('create')} DATAFRAME customer_data
${getTranslatedKeyword('create')} DATAFRAME events_data

LOAD sales_data FROM pipeline SOURCE "sales_db" TABLE "transactions"
LOAD weather_data FROM pipeline SOURCE "weather_api" ENDPOINT "/daily"
LOAD customer_data FROM pipeline SOURCE "csv_file"
LOAD events_data FROM pipeline SOURCE "stream" WINDOW "1_hour"

${getTranslatedKeyword('display')} "Data loaded:"
${getTranslatedKeyword('display')} "Sales: " + SHAPE(sales_data) + " records"
${getTranslatedKeyword('display')} "Weather: " + SHAPE(weather_data) + " records"
${getTranslatedKeyword('display')} "Customers: " + SHAPE(customer_data) + " records"
${getTranslatedKeyword('display')} "Events: " + SHAPE(events_data) + " records"

${getTranslatedKeyword('display')} "🧹 PHASE 2: Data Cleaning & Preprocessing"

// Data quality assessment
${getTranslatedKeyword('calculate')} data_quality = ASSESS_QUALITY sales_data
${getTranslatedKeyword('display')} "Data Quality Report:"
${getTranslatedKeyword('display')} "Missing values: " + data_quality.missing_percent + "%"
${getTranslatedKeyword('display')} "Duplicates: " + data_quality.duplicates
${getTranslatedKeyword('display')} "Outliers: " + data_quality.outliers

// Advanced cleaning
REMOVE_DUPLICATES sales_data
HANDLE_OUTLIERS sales_data METHOD "iqr" COLUMNS ["amount", "quantity"]
FILL_MISSING sales_data STRATEGY "forward_fill" COLUMNS ["customer_id"]
FILL_MISSING sales_data STRATEGY "mean" COLUMNS ["amount"]

// Data type optimization
OPTIMIZE_DTYPES sales_data
CONVERT_TIMEZONE sales_data COLUMN "timestamp" TO "UTC"

${getTranslatedKeyword('display')} "✅ Data cleaning completed"

${getTranslatedKeyword('display')} "🔗 PHASE 3: Data Integration & Feature Engineering"

// Join multiple datasets
${getTranslatedKeyword('create')} DATAFRAME master_data
MERGE master_data FROM sales_data 
  LEFT_JOIN customer_data ON "customer_id"
  LEFT_JOIN weather_data ON "date"
  LEFT_JOIN events_data ON "timestamp"

${getTranslatedKeyword('display')} "Integrated dataset: " + SHAPE(master_data)

// Advanced feature engineering
CREATE_FEATURES master_data:
  // Temporal features
  EXTRACT_DATE_FEATURES "timestamp" AS ["year", "month", "day", "hour", "weekday"]
  CREATE_LAG_FEATURES "amount" LAGS [1, 7, 30] AS ["amount_lag1", "amount_lag7", "amount_lag30"]
  CREATE_ROLLING_FEATURES "amount" WINDOWS [7, 30] FUNCTIONS ["mean", "std"] AS ["amount_7d_mean", "amount_7d_std", "amount_30d_mean", "amount_30d_std"]
  
  // Customer behavior features
  CALCULATE_CUSTOMER_METRICS "customer_id" AS ["total_purchases", "avg_amount", "days_since_last"]
  CREATE_RFM_FEATURES "customer_id" AS ["recency", "frequency", "monetary"]
  
  // Weather impact features
  CREATE_INTERACTION_FEATURES ["temperature", "humidity"] WITH ["amount"] AS ["temp_amount_interaction"]
  
  // Text features from descriptions
  EXTRACT_TEXT_FEATURES "description" USING ["tfidf", "sentiment", "keywords"] AS ["tfidf_features", "sentiment_score", "key_topics"]

${getTranslatedKeyword('display')} "Feature engineering completed: " + SIZE(GET_COLUMNS(master_data)) + " features"

${getTranslatedKeyword('display')} "📈 PHASE 4: Exploratory Data Analysis"

// Comprehensive EDA
CREATE_EDA_REPORT master_data OUTPUT "eda_report.html"

// Statistical analysis
${getTranslatedKeyword('calculate')} correlation_matrix = CORRELATION_MATRIX master_data NUMERIC_COLUMNS
${getTranslatedKeyword('calculate')} feature_importance = MUTUAL_INFORMATION master_data TARGET "amount"

// Advanced visualizations
CREATE_DASHBOARD eda_dashboard:
  ADD_PLOT TIME_SERIES master_data.timestamp VS master_data.amount TITLE "Sales Over Time"
  ADD_PLOT CORRELATION_HEATMAP correlation_matrix TITLE "Feature Correlations"
  ADD_PLOT DISTRIBUTION_PLOTS master_data COLUMNS ["amount", "quantity"] TITLE "Distribution Analysis"
  ADD_PLOT SCATTER_MATRIX master_data COLUMNS ["amount", "temperature", "humidity"] TITLE "Relationship Analysis"
  ADD_PLOT FEATURE_IMPORTANCE_PLOT feature_importance TITLE "Feature Importance"

EXPORT_DASHBOARD eda_dashboard TO "eda_dashboard.html"
${getTranslatedKeyword('display')} "📊 EDA dashboard created and exported"

${getTranslatedKeyword('display')} "🤖 PHASE 5: Advanced Machine Learning"

// Automated feature selection
${getTranslatedKeyword('calculate')} selected_features = AUTO_FEATURE_SELECTION master_data 
  TARGET "amount" 
  METHODS ["correlation", "mutual_info", "recursive_elimination"]
  MAX_FEATURES 50

${getTranslatedKeyword('display')} "Selected " + SIZE(selected_features) + " most important features"

// Multiple model training with hyperparameter tuning
CREATE_MODEL_ENSEMBLE prediction_ensemble:
  
  // Gradient Boosting
  ADD_MODEL GRADIENT_BOOSTING:
    HYPERPARAMETERS:
      n_estimators: [100, 200, 300]
      learning_rate: [0.01, 0.1, 0.2]
      max_depth: [3, 5, 7]
    CROSS_VALIDATION: 5_fold
  
  // Neural Network
  ADD_MODEL NEURAL_NETWORK:
    ARCHITECTURE: [128, 64, 32, 1]
    HYPERPARAMETERS:
      learning_rate: [0.001, 0.01]
      dropout: [0.2, 0.3, 0.5]
      batch_size: [32, 64, 128]
    CROSS_VALIDATION: 5_fold
  
  // Support Vector Regression
  ADD_MODEL SVR:
    HYPERPARAMETERS:
      C: [0.1, 1, 10]
      gamma: [0.001, 0.01, 0.1]
      kernel: ["rbf", "poly"]
    CROSS_VALIDATION: 5_fold

// Automated hyperparameter optimization
OPTIMIZE_HYPERPARAMETERS prediction_ensemble 
  METHOD "bayesian_optimization" 
  ITERATIONS 100
  SCORING "neg_mean_squared_error"

${getTranslatedKeyword('display')} "🎯 Model training and optimization completed"

// Model evaluation and selection
${getTranslatedKeyword('calculate')} model_results = EVALUATE_ENSEMBLE prediction_ensemble WITH master_data
${getTranslatedKeyword('display')} "Model Performance Comparison:"
${getTranslatedKeyword('display')} model_results

// Select best model
${getTranslatedKeyword('calculate')} best_model = SELECT_BEST_MODEL prediction_ensemble METRIC "rmse"
${getTranslatedKeyword('display')} "Best model: " + best_model.name + " (RMSE: " + best_model.rmse + ")"

${getTranslatedKeyword('display')} "📊 PHASE 6: Advanced Analytics"

// Time series forecasting
CREATE_TIME_SERIES_MODEL forecaster
SET forecaster.model = "prophet"
SET forecaster.seasonality = ["yearly", "weekly", "daily"]
SET forecaster.holidays = true

TRAIN forecaster WITH master_data TIMESTAMP "timestamp" VALUE "amount"
${getTranslatedKeyword('calculate')} forecast = PREDICT forecaster PERIODS 30 FREQUENCY "daily"
${getTranslatedKeyword('display')} "30-day forecast generated"

// Anomaly detection
CREATE_ANOMALY_DETECTOR anomaly_model
SET anomaly_model.method = "isolation_forest"
SET anomaly_model.contamination = 0.1

FIT anomaly_model WITH master_data
${getTranslatedKeyword('calculate')} anomalies = DETECT_ANOMALIES anomaly_model WITH master_data
${getTranslatedKeyword('display')} "Detected " + SIZE(anomalies) + " anomalies"

// Customer segmentation
CREATE_CLUSTERING_MODEL segmentation
SET segmentation.algorithm = "kmeans"
SET segmentation.n_clusters = 5
SET segmentation.features = ["recency", "frequency", "monetary"]

FIT segmentation WITH master_data
${getTranslatedKeyword('calculate')} customer_segments = PREDICT segmentation WITH master_data
${getTranslatedKeyword('calculate')} segment_profiles = PROFILE_SEGMENTS customer_segments
${getTranslatedKeyword('display')} "Customer segmentation completed: " + segment_profiles

${getTranslatedKeyword('display')} "🚀 PHASE 7: Model Deployment & MLOps"

// Model versioning and registry
CREATE_MODEL_REGISTRY registry
REGISTER_MODEL registry MODEL best_model VERSION "v1.0" TAGS ["production", "sales_prediction"]
REGISTER_MODEL registry MODEL forecaster VERSION "v1.0" TAGS ["forecasting", "time_series"]
REGISTER_MODEL registry MODEL anomaly_model VERSION "v1.0" TAGS ["anomaly_detection"]

// API deployment
CREATE_API_ENDPOINT prediction_api:
  ENDPOINT "/predict" METHOD "POST" MODEL best_model
  ENDPOINT "/forecast" METHOD "POST" MODEL forecaster
  ENDPOINT "/anomaly" METHOD "POST" MODEL anomaly_model
  AUTHENTICATION "api_key"
  RATE_LIMITING 1000_requests_per_hour

DEPLOY prediction_api TO "production"
${getTranslatedKeyword('display')} "🌐 API deployed to production"

// Monitoring and alerting
CREATE_MONITORING_SYSTEM monitor:
  TRACK_METRICS ["accuracy", "latency", "throughput"]
  ALERT_THRESHOLDS accuracy < 0.85, latency > 500ms
  DASHBOARD_URL "https://monitoring.company.com/ml-dashboard"
  NOTIFICATION_CHANNELS ["email", "slack"]

ACTIVATE_MONITORING monitor FOR prediction_api
${getTranslatedKeyword('display')} "📊 Monitoring system activated"

// Automated retraining
CREATE_RETRAINING_PIPELINE retrain_pipeline:
  SCHEDULE "weekly"
  TRIGGER_CONDITIONS data_drift > 0.1, accuracy_drop > 0.05
  VALIDATION_TESTS ["data_quality", "model_performance", "bias_detection"]
  APPROVAL_PROCESS "automated"

ACTIVATE_PIPELINE retrain_pipeline
${getTranslatedKeyword('display')} "🔄 Automated retraining pipeline activated"

${getTranslatedKeyword('display')} "✅ COMPLETE DATA SCIENCE WORKFLOW FINISHED!"
${getTranslatedKeyword('display')} "📈 Summary:"
${getTranslatedKeyword('display')} "- Data sources integrated: 4"
${getTranslatedKeyword('display')} "- Features engineered: " + SIZE(GET_COLUMNS(master_data))
${getTranslatedKeyword('display')} "- Models trained: 3"
${getTranslatedKeyword('display')} "- Best model RMSE: " + best_model.rmse
${getTranslatedKeyword('display')} "- API endpoints deployed: 3"
${getTranslatedKeyword('display')} "- Monitoring active: ✅"
${getTranslatedKeyword('display')} "- Auto-retraining: ✅"`,
          output: `=== Complete Data Science Workflow ===
🔄 PHASE 1: Data Collection & Integration
🔗 Created data pipeline: pipeline
🔌 Connected to PostgreSQL database: sales_db
🔌 Connected to Weather API: https://api.weather.com
🔌 Connected to CSV file: customer_data.csv
🔌 Connected to real-time stream: real_time_events

📊 Loading data from multiple sources:
📊 Created dataframe: sales_data
📊 Created dataframe: weather_data
📊 Created dataframe: customer_data
📊 Created dataframe: events_data
📊 Loading from sales_db.transactions...
📊 Loading from weather API...
📊 Loading from CSV file...
📊 Loading from real-time stream...
Data loaded:
Sales: (50000, 8) records
Weather: (365, 12) records
Customers: (5000, 15) records
Events: (1200, 6) records

🧹 PHASE 2: Data Cleaning & Preprocessing
📊 Assessing data quality...
🧮 Calculated: data_quality = {missing: 3.2%, duplicates: 45, outliers: 127}
Data Quality Report:
Missing values: 3.2%
Duplicates: 45
Outliers: 127
🧹 Removing 45 duplicate records...
🧹 Handling outliers using IQR method...
🧹 Filling missing values with forward fill...
🧹 Filling missing values with mean...
🔧 Optimizing data types for memory efficiency...
🌍 Converting timestamps to UTC timezone...
✅ Data cleaning completed

🔗 PHASE 3: Data Integration & Feature Engineering
📊 Created dataframe: master_data
🔗 Merging sales_data with customer_data on customer_id...
🔗 Merging with weather_data on date...
🔗 Merging with events_data on timestamp...
Integrated dataset: (49955, 41)
🔧 Creating temporal features...
🔧 Creating lag features...
🔧 Creating rolling window features...
🔧 Calculating customer metrics...
🔧 Creating RFM features...
🔧 Creating interaction features...
🔧 Extracting text features...
Feature engineering completed: 127 features

📈 PHASE 4: Exploratory Data Analysis
📊 Generating comprehensive EDA report...
📈 Calculating correlation matrix...
📊 Computing mutual information scores...
📊 Created dashboard: eda_dashboard
📈 Added time series plot: Sales Over Time
📊 Added correlation heatmap
📊 Added distribution plots
📊 Added scatter matrix
📊 Added feature importance plot
📊 EDA dashboard created and exported

🤖 PHASE 5: Advanced Machine Learning
🎯 Performing automated feature selection...
🧮 Calculated: selected_features = 47 features
Selected 47 most important features
🤖 Created model ensemble: prediction_ensemble
🌳 Added Gradient Boosting model with hyperparameter grid
🧠 Added Neural Network model with architecture optimization
🎯 Added SVR model with kernel tuning
⚡ Optimizing hyperparameters using Bayesian optimization...
🎯 Model training and optimization completed
📊 Evaluating ensemble performance...
Model Performance Comparison:
  Model              RMSE    MAE     R²
  Gradient Boosting  0.234   0.187   0.891
  Neural Network     0.241   0.195   0.885
  SVR               0.267   0.213   0.862
🏆 Selected best model: Gradient Boosting (RMSE: 0.234)
Best model: Gradient Boosting (RMSE: 0.234)`
        }
      }
    }
  };

  const categories = Object.keys(tutorials);
  const currentCategory = tutorials[activeCategory as keyof typeof tutorials];
  const currentLesson = currentCategory.lessons[activeLesson as keyof typeof currentCategory.lessons];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'Advanced': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'Expert': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'basics': return <Code className="w-4 h-4" />;
      case 'control': return <GitBranch className="w-4 h-4" />;
      case 'datastructures': return <Database className="w-4 h-4" />;
      case 'ai': return <Brain className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-4 py-3 border-b border-gray-700 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              COMPLETE SRINJAN MASTERY
            </h3>
            <p className="text-sm text-blue-200">Master Coding + DS + AI + Everything!</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>World's Best Tutorial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Category Sidebar */}
        <div className="w-1/3 bg-gray-750 border-r border-gray-700 p-4 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <Target className="w-3 h-3 mr-1" />
            MASTER ALL CATEGORIES
          </h4>
          <div className="space-y-2">
            {categories.map((category) => {
              const cat = tutorials[category as keyof typeof tutorials];
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveLesson(Object.keys(cat.lessons)[0]);
                  }}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <div>
                    <div className="font-medium text-sm">{cat.title}</div>
                    <div className="text-xs opacity-75">{Object.keys(cat.lessons).length} lessons</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lessons for Active Category */}
          <h4 className="text-sm font-semibold text-gray-300 mb-3 mt-6 flex items-center">
            <Zap className="w-3 h-3 mr-1" />
            LESSONS
          </h4>
          <div className="space-y-2">
            {Object.entries(currentCategory.lessons).map(([lessonKey, lesson]) => (
              <button
                key={lessonKey}
                onClick={() => setActiveLesson(lessonKey)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-colors ${
                  activeLesson === lessonKey
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="font-medium text-sm">{lesson.title}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </span>
                  <span className="text-xs text-gray-400">{lesson.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-white">{currentLesson.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-3 py-1 rounded-full border ${getDifficultyColor(currentLesson.difficulty)}`}>
                  {currentLesson.difficulty}
                </span>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                  {currentLesson.time}
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{currentLesson.description}</p>
          </div>

          {/* Theory Section */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Complete Theory & Concepts
            </h4>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {currentLesson.theory}
              </pre>
            </div>
          </div>

          {/* Code Example */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Perfect Working Code
              </h4>
              <button
                onClick={() => onCodeInsert(currentLesson.code)}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Play className="w-4 h-4" />
                <span className="font-semibold">Try This Code</span>
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium text-white">SRINJAN Code</span>
                  <div className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                    100% WORKING
                  </div>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(currentLesson.code)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <pre className="text-indigo-300 font-mono text-sm leading-relaxed overflow-x-auto">
                  {currentLesson.code}
                </pre>
              </div>
            </div>
          </div>

          {/* Expected Output */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Perfect Expected Output
            </h4>
            <div className="bg-black rounded-lg border border-gray-700 p-4">
              <pre className="text-green-300 font-mono text-sm leading-relaxed">
                {currentLesson.output}
              </pre>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => onCodeInsert(currentLesson.code)}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Code className="w-4 h-4" />
              <span className="font-semibold">Insert & Execute</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Next Lesson</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              <CheckCircle className="w-4 h-4" />
              <span>Mark Complete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};