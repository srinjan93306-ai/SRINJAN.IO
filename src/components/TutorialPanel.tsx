import React, { useState } from 'react';
import { BookOpen, Code, Database, Brain, ChevronRight, Play, Copy, CheckCircle, Star, Zap, Target, Award } from 'lucide-react';

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
        pop: 'POP'
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
        pop: 'निकालें'
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
        pop: 'SACAR'
      }
    };
    
    return translations[selectedLanguage]?.[keyword] || translations.en[keyword] || keyword.toUpperCase();
  };

  const tutorials = {
    basics: {
      title: '🚀 SRINJAN Basics',
      icon: <Code className="w-5 h-5" />,
      lessons: {
        'hello-world': {
          title: 'Hello World',
          difficulty: 'Beginner',
          time: '2 min',
          description: 'Your first SRINJAN program - display text on screen',
          theory: `
**Hello World Program**

The most basic program in any language! In SRINJAN, we use natural language commands.

**Key Concepts:**
• DISPLAY - Shows text on screen
• Quotes ("") - Wrap text messages
• Simple and readable syntax

**Why Start Here:**
Every programmer starts with Hello World. It teaches you the basic structure and how to output information.
          `,
          code: `${getTranslatedKeyword('display')} "Hello, World!"
${getTranslatedKeyword('display')} "Welcome to SRINJAN!"
${getTranslatedKeyword('display')} "🚀 Let's start coding!"`,
          output: `Hello, World!
Welcome to SRINJAN!
🚀 Let's start coding!`
        },
        'variables': {
          title: 'Variables & Input',
          difficulty: 'Beginner',
          time: '5 min',
          description: 'Store data and get user input',
          theory: `
**Variables in SRINJAN**

Variables store information that can change. Think of them as labeled boxes.

**Key Concepts:**
• INPUT BY USER - Gets data from user
• Variables automatically created when used
• String concatenation with +
• Dynamic typing - no need to declare types

**Best Practices:**
• Use meaningful variable names
• Always validate user input in real programs
          `,
          code: `${getTranslatedKeyword('input')} name
${getTranslatedKeyword('display')} "Hello " + name + "!"

${getTranslatedKeyword('input')} age
${getTranslatedKeyword('display')} "You are " + age + " years old"

${getTranslatedKeyword('input')} city
${getTranslatedKeyword('display')} "You live in " + city`,
          output: `📝 Enter value for name: [User types: John]
Hello John!
📝 Enter value for age: [User types: 25]
You are 25 years old
📝 Enter value for city: [User types: New York]
You live in New York`
        },
        'calculations': {
          title: 'Math & Calculations',
          difficulty: 'Beginner',
          time: '4 min',
          description: 'Perform mathematical operations',
          theory: `
**Mathematics in SRINJAN**

SRINJAN supports all mathematical operations with natural language.

**Operations:**
• + Addition
• - Subtraction  
• * Multiplication
• / Division
• % Modulus (remainder)
• ^ Power

**Order of Operations:**
SRINJAN follows standard mathematical order (PEMDAS)
          `,
          code: `${getTranslatedKeyword('calculate')} sum = 10 + 5
${getTranslatedKeyword('display')} "Sum: " + sum

${getTranslatedKeyword('calculate')} product = 7 * 8
${getTranslatedKeyword('display')} "Product: " + product

${getTranslatedKeyword('calculate')} power = 2 ^ 3
${getTranslatedKeyword('display')} "2 to the power 3: " + power

${getTranslatedKeyword('input')} num1
${getTranslatedKeyword('input')} num2
${getTranslatedKeyword('calculate')} result = num1 + num2
${getTranslatedKeyword('display')} "Your sum: " + result`,
          output: `🧮 Calculated: sum = 15
Sum: 15
🧮 Calculated: product = 56
Product: 56
🧮 Calculated: power = 8
2 to the power 3: 8
📝 Enter num1: [User: 12]
📝 Enter num2: [User: 8]
🧮 Calculated: result = 20
Your sum: 20`
        }
      }
    },
    
    control: {
      title: '🔄 Control Structures',
      icon: <ChevronRight className="w-5 h-5" />,
      lessons: {
        'conditions': {
          title: 'IF-ELSE Conditions',
          difficulty: 'Beginner',
          time: '6 min',
          description: 'Make decisions in your code',
          theory: `
**Conditional Logic**

Conditions let your program make decisions based on data.

**Structure:**
• IF - Check a condition
• OTHERWISE - Alternative action
• END IF - Close the condition block

**Comparison Operators:**
• EQUALS - Check if equal
• GREATER THAN - Check if larger
• LESS THAN - Check if smaller
• NOT EQUALS - Check if different
          `,
          code: `${getTranslatedKeyword('input')} age
${getTranslatedKeyword('if')} age >= 18
  ${getTranslatedKeyword('display')} "You are an adult! 🎉"
${getTranslatedKeyword('otherwise')}
  ${getTranslatedKeyword('display')} "You are a minor 👶"
${getTranslatedKeyword('endif')}

${getTranslatedKeyword('input')} score
${getTranslatedKeyword('if')} score >= 90
  ${getTranslatedKeyword('display')} "Grade: A+ Excellent! ⭐"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} score >= 80
  ${getTranslatedKeyword('display')} "Grade: B+ Good job! 👍"
${getTranslatedKeyword('otherwise')} ${getTranslatedKeyword('if')} score >= 70
  ${getTranslatedKeyword('display')} "Grade: C+ Average 📚"
${getTranslatedKeyword('otherwise')}
  ${getTranslatedKeyword('display')} "Grade: F Need improvement 📖"
${getTranslatedKeyword('endif')}`,
          output: `📝 Enter age: [User: 20]
🤔 Checking condition: age >= 18
✅ Condition evaluated: true
You are an adult! 🎉
📝 Enter score: [User: 85]
🤔 Checking condition: score >= 90
❌ Condition evaluated: false
🤔 Checking condition: score >= 80
✅ Condition evaluated: true
Grade: B+ Good job! 👍`
        },
        'for-loops': {
          title: 'FOR Loops',
          difficulty: 'Intermediate',
          time: '8 min',
          description: 'Repeat code with counters',
          theory: `
**FOR Loops**

FOR loops repeat code a specific number of times with a counter.

**Syntax:**
FOR variable FROM start TO end
  // Code to repeat
END FOR

**Use Cases:**
• Processing arrays
• Counting operations
• Mathematical sequences
• Pattern generation

**Loop Variable:**
The loop variable (i, j, etc.) automatically increments
          `,
          code: `${getTranslatedKeyword('display')} "=== Counting Demo ==="
${getTranslatedKeyword('for')} i FROM 1 TO 5
  ${getTranslatedKeyword('display')} "Count: " + i
END ${getTranslatedKeyword('for')}

${getTranslatedKeyword('display')} "=== Multiplication Table ==="
${getTranslatedKeyword('input')} number
${getTranslatedKeyword('for')} i FROM 1 TO 10
  ${getTranslatedKeyword('calculate')} result = number * i
  ${getTranslatedKeyword('display')} number + " x " + i + " = " + result
END ${getTranslatedKeyword('for')}

${getTranslatedKeyword('display')} "=== Pattern Generation ==="
${getTranslatedKeyword('for')} row FROM 1 TO 4
  ${getTranslatedKeyword('for')} col FROM 1 TO row
    ${getTranslatedKeyword('display')} "* " WITHOUT_NEWLINE
  END ${getTranslatedKeyword('for')}
  ${getTranslatedKeyword('display')} ""
END ${getTranslatedKeyword('for')}`,
          output: `=== Counting Demo ===
🔄 FOR Loop: i from 1 to 5
  → Count: 1
  → Count: 2
  → Count: 3
  → Count: 4
  → Count: 5
✅ FOR Loop completed

=== Multiplication Table ===
📝 Enter number: [User: 7]
🔄 FOR Loop: i from 1 to 10
  → 7 x 1 = 7
  → 7 x 2 = 14
  → 7 x 3 = 21
  → 7 x 4 = 28
  → 7 x 5 = 35
✅ FOR Loop completed`
        },
        'while-loops': {
          title: 'WHILE & DO-WHILE Loops',
          difficulty: 'Intermediate',
          time: '7 min',
          description: 'Conditional repetition',
          theory: `
**WHILE Loops**

WHILE loops repeat as long as a condition is true.

**WHILE vs DO-WHILE:**
• WHILE - Check condition first
• DO-WHILE - Execute first, then check

**Important:**
• Always ensure the condition can become false
• Avoid infinite loops
• Use for unknown repetition counts

**Common Patterns:**
• User input validation
• Game loops
• Processing until done
          `,
          code: `${getTranslatedKeyword('display')} "=== WHILE Loop Demo ==="
${getTranslatedKeyword('calculate')} counter = 1
${getTranslatedKeyword('while')} counter <= 5
  ${getTranslatedKeyword('display')} "WHILE iteration: " + counter
  ${getTranslatedKeyword('calculate')} counter = counter + 1
END ${getTranslatedKeyword('while')}

${getTranslatedKeyword('display')} "=== DO-WHILE Demo ==="
${getTranslatedKeyword('calculate')} num = 1
${getTranslatedKeyword('dowhile')}
  ${getTranslatedKeyword('display')} "DO-WHILE iteration: " + num
  ${getTranslatedKeyword('calculate')} num = num + 1
${getTranslatedKeyword('while')} num <= 3

${getTranslatedKeyword('display')} "=== Number Guessing Game ==="
${getTranslatedKeyword('calculate')} secret = 7
${getTranslatedKeyword('calculate')} attempts = 0
${getTranslatedKeyword('while')} attempts < 3
  ${getTranslatedKeyword('input')} guess
  ${getTranslatedKeyword('calculate')} attempts = attempts + 1
  ${getTranslatedKeyword('if')} guess EQUALS secret
    ${getTranslatedKeyword('display')} "🎉 Correct! You won!"
    BREAK
  ${getTranslatedKeyword('otherwise')}
    ${getTranslatedKeyword('display')} "❌ Wrong! Try again"
  ${getTranslatedKeyword('endif')}
END ${getTranslatedKeyword('while')}`,
          output: `=== WHILE Loop Demo ===
🔄 WHILE Loop: counter <= 5
  → WHILE iteration: 1
  → WHILE iteration: 2
  → WHILE iteration: 3
  → WHILE iteration: 4
  → WHILE iteration: 5
✅ WHILE Loop completed

=== DO-WHILE Demo ===
🔄 DO-WHILE Loop: num <= 3
  → DO-WHILE iteration: 1
  → DO-WHILE iteration: 2
  → DO-WHILE iteration: 3
✅ DO-WHILE Loop completed`
        }
      }
    },

    datastructures: {
      title: '📊 Data Structures',
      icon: <Database className="w-5 h-5" />,
      lessons: {
        'arrays': {
          title: 'Arrays & Lists',
          difficulty: 'Intermediate',
          time: '10 min',
          description: 'Store multiple values in order',
          theory: `
**Arrays in SRINJAN**

Arrays store multiple values in a single variable with indexed access.

**Key Operations:**
• CREATE ARRAY - Initialize array
• STORE AT - Put value at index
• GET FROM - Retrieve value
• SIZE OF - Get array length
• SORT - Arrange in order
• SEARCH - Find elements

**Index System:**
• Arrays start at index 0
• Last index is (size - 1)
• Negative indices not supported
          `,
          code: `${getTranslatedKeyword('display')} "=== Array Creation ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} numbers SIZE 5
${getTranslatedKeyword('store')} 10 AT numbers[0]
${getTranslatedKeyword('store')} 25 AT numbers[1]
${getTranslatedKeyword('store')} 5 AT numbers[2]
${getTranslatedKeyword('store')} 30 AT numbers[3]
${getTranslatedKeyword('store')} 15 AT numbers[4]

${getTranslatedKeyword('display')} "Original array: " + numbers

${getTranslatedKeyword('display')} "=== Array Operations ==="
${getTranslatedKeyword('calculate')} arraySize = SIZE OF numbers
${getTranslatedKeyword('display')} "Array size: " + arraySize

SORT numbers
${getTranslatedKeyword('display')} "Sorted array: " + numbers

SEARCH numbers FOR 25
${getTranslatedKeyword('display')} "Found 25 at index: " + SEARCH_RESULT

${getTranslatedKeyword('display')} "=== Dynamic Array ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} fruits SIZE 0
ADD TO END fruits VALUE "Apple"
ADD TO END fruits VALUE "Banana"
ADD TO END fruits VALUE "Orange"
${getTranslatedKeyword('display')} "Fruits: " + fruits`,
          output: `=== Array Creation ===
📊 Created array: numbers[5]
💾 Stored "10" at numbers[0]
💾 Stored "25" at numbers[1]
💾 Stored "5" at numbers[2]
💾 Stored "30" at numbers[3]
💾 Stored "15" at numbers[4]
Original array: [10, 25, 5, 30, 15]

=== Array Operations ===
🧮 Calculated: arraySize = 5
Array size: 5
🔄 Sorted array numbers → [5, 10, 15, 25, 30]
Sorted array: [5, 10, 15, 25, 30]
🔍 Searched for "25" in numbers → Found at index: 3
Found 25 at index: 3`
        },
        'stacks': {
          title: 'Stacks (LIFO)',
          difficulty: 'Intermediate',
          time: '8 min',
          description: 'Last In, First Out data structure',
          theory: `
**Stack Data Structure**

Stack follows LIFO (Last In, First Out) principle - like a stack of plates.

**Core Operations:**
• PUSH - Add element to top
• POP - Remove element from top
• PEEK - View top element without removing
• IS EMPTY - Check if stack is empty
• SIZE - Get number of elements

**Real-world Uses:**
• Function call management
• Undo operations
• Expression evaluation
• Browser history
          `,
          code: `${getTranslatedKeyword('display')} "=== Stack Operations Demo ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('stack')} myStack

${getTranslatedKeyword('display')} "=== Pushing Elements ==="
${getTranslatedKeyword('push')} myStack VALUE 10
${getTranslatedKeyword('push')} myStack VALUE 20
${getTranslatedKeyword('push')} myStack VALUE 30
${getTranslatedKeyword('display')} "Stack after pushes: " + myStack

${getTranslatedKeyword('display')} "=== Popping Elements ==="
${getTranslatedKeyword('calculate')} popped1 = ${getTranslatedKeyword('pop')} myStack
${getTranslatedKeyword('display')} "Popped: " + popped1
${getTranslatedKeyword('display')} "Stack now: " + myStack

${getTranslatedKeyword('calculate')} popped2 = ${getTranslatedKeyword('pop')} myStack
${getTranslatedKeyword('display')} "Popped: " + popped2
${getTranslatedKeyword('display')} "Stack now: " + myStack

${getTranslatedKeyword('display')} "=== Stack Info ==="
${getTranslatedKeyword('calculate')} stackSize = SIZE OF myStack
${getTranslatedKeyword('display')} "Stack size: " + stackSize
${getTranslatedKeyword('calculate')} topElement = PEEK myStack
${getTranslatedKeyword('display')} "Top element: " + topElement`,
          output: `=== Stack Operations Demo ===
📚 Created stack: myStack

=== Pushing Elements ===
⬆️ Pushed "10" to myStack → [10]
⬆️ Pushed "20" to myStack → [10, 20]
⬆️ Pushed "30" to myStack → [10, 20, 30]
Stack after pushes: [10, 20, 30]

=== Popping Elements ===
⬇️ Popped "30" from myStack → [10, 20]
🧮 Calculated: popped1 = 30
Popped: 30
Stack now: [10, 20]
⬇️ Popped "20" from myStack → [10]
🧮 Calculated: popped2 = 20
Popped: 20
Stack now: [10]`
        },
        'queues': {
          title: 'Queues (FIFO)',
          difficulty: 'Intermediate',
          time: '8 min',
          description: 'First In, First Out data structure',
          theory: `
**Queue Data Structure**

Queue follows FIFO (First In, First Out) principle - like a line of people.

**Core Operations:**
• ENQUEUE - Add element to rear
• DEQUEUE - Remove element from front
• FRONT - View front element
• REAR - View rear element
• IS EMPTY - Check if queue is empty

**Real-world Uses:**
• Print job scheduling
• CPU task scheduling
• Breadth-first search
• Handling requests in web servers
          `,
          code: `${getTranslatedKeyword('display')} "=== Queue Operations Demo ==="
${getTranslatedKeyword('create')} QUEUE customerLine

${getTranslatedKeyword('display')} "=== Adding Customers ==="
ENQUEUE customerLine VALUE "Alice"
ENQUEUE customerLine VALUE "Bob"
ENQUEUE customerLine VALUE "Charlie"
${getTranslatedKeyword('display')} "Queue: " + customerLine

${getTranslatedKeyword('display')} "=== Serving Customers ==="
${getTranslatedKeyword('calculate')} served1 = DEQUEUE customerLine
${getTranslatedKeyword('display')} "Served: " + served1
${getTranslatedKeyword('display')} "Queue now: " + customerLine

${getTranslatedKeyword('calculate')} served2 = DEQUEUE customerLine
${getTranslatedKeyword('display')} "Served: " + served2
${getTranslatedKeyword('display')} "Queue now: " + customerLine

${getTranslatedKeyword('display')} "=== Queue Info ==="
${getTranslatedKeyword('calculate')} queueSize = SIZE OF customerLine
${getTranslatedKeyword('display')} "People in line: " + queueSize
${getTranslatedKeyword('calculate')} nextCustomer = FRONT customerLine
${getTranslatedKeyword('display')} "Next to serve: " + nextCustomer`,
          output: `=== Queue Operations Demo ===
🚶 Created queue: customerLine

=== Adding Customers ===
➡️ Enqueued "Alice" to customerLine → [Alice]
➡️ Enqueued "Bob" to customerLine → [Alice, Bob]
➡️ Enqueued "Charlie" to customerLine → [Alice, Bob, Charlie]
Queue: [Alice, Bob, Charlie]

=== Serving Customers ===
⬅️ Dequeued "Alice" from customerLine → [Bob, Charlie]
🧮 Calculated: served1 = Alice
Served: Alice
Queue now: [Bob, Charlie]
⬅️ Dequeued "Bob" from customerLine → [Charlie]
🧮 Calculated: served2 = Bob
Served: Bob
Queue now: [Charlie]`
        }
      }
    },

    ai: {
      title: '🤖 AI & Data Science',
      icon: <Brain className="w-5 h-5" />,
      lessons: {
        'data-analysis': {
          title: 'Data Analysis',
          difficulty: 'Advanced',
          time: '15 min',
          description: 'Analyze and visualize data',
          theory: `
**Data Analysis in SRINJAN**

SRINJAN provides powerful data analysis capabilities with simple commands.

**Key Functions:**
• MEAN - Average value
• MEDIAN - Middle value
• MODE - Most frequent value
• STANDARD DEVIATION - Data spread
• CORRELATION - Relationship between variables

**Data Visualization:**
• PLOT - Create charts
• HISTOGRAM - Distribution charts
• SCATTER PLOT - Relationship plots
• BAR CHART - Category comparisons
          `,
          code: `${getTranslatedKeyword('display')} "=== Data Analysis Demo ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} sales_data SIZE 12
${getTranslatedKeyword('store')} 1200 AT sales_data[0]
${getTranslatedKeyword('store')} 1500 AT sales_data[1]
${getTranslatedKeyword('store')} 1800 AT sales_data[2]
${getTranslatedKeyword('store')} 1400 AT sales_data[3]
${getTranslatedKeyword('store')} 1600 AT sales_data[4]
${getTranslatedKeyword('store')} 2000 AT sales_data[5]

${getTranslatedKeyword('display')} "Sales Data: " + sales_data

${getTranslatedKeyword('display')} "=== Statistical Analysis ==="
${getTranslatedKeyword('calculate')} mean_sales = MEAN(sales_data)
${getTranslatedKeyword('display')} "Average Sales: $" + mean_sales

${getTranslatedKeyword('calculate')} median_sales = MEDIAN(sales_data)
${getTranslatedKeyword('display')} "Median Sales: $" + median_sales

${getTranslatedKeyword('calculate')} std_dev = STANDARD_DEVIATION(sales_data)
${getTranslatedKeyword('display')} "Standard Deviation: $" + std_dev

${getTranslatedKeyword('display')} "=== Data Visualization ==="
CREATE PLOT sales_chart
PLOT sales_data AS LINE_CHART
SET sales_chart.title = "Monthly Sales Trend"
SET sales_chart.x_label = "Month"
SET sales_chart.y_label = "Sales ($)"
SHOW sales_chart`,
          output: `=== Data Analysis Demo ===
📊 Created array: sales_data[12]
💾 Stored values in sales_data
Sales Data: [1200, 1500, 1800, 1400, 1600, 2000]

=== Statistical Analysis ===
📈 Performing data analysis...
🧮 Calculated: mean_sales = 1583.33
Average Sales: $1583.33
🧮 Calculated: median_sales = 1550
Median Sales: $1550
🧮 Calculated: std_dev = 267.26
Standard Deviation: $267.26

=== Data Visualization ===
📊 Created plot: sales_chart
📈 Generated line chart visualization
📊 Chart configured with title and labels
📊 Chart displayed successfully`
        },
        'machine-learning': {
          title: 'Machine Learning',
          difficulty: 'Advanced',
          time: '20 min',
          description: 'Build and train ML models',
          theory: `
**Machine Learning in SRINJAN**

Create powerful ML models with simple natural language commands.

**Model Types:**
• NEURAL NETWORK - Deep learning
• LINEAR REGRESSION - Prediction
• DECISION TREE - Classification
• RANDOM FOREST - Ensemble method
• SVM - Support Vector Machine

**Training Process:**
1. CREATE MODEL - Initialize
2. LOAD DATA - Import training data
3. TRAIN MODEL - Learn patterns
4. EVALUATE - Test accuracy
5. PREDICT - Make predictions
          `,
          code: `${getTranslatedKeyword('display')} "=== Machine Learning Demo ==="

${getTranslatedKeyword('display')} "=== Creating Neural Network ==="
CREATE NEURAL NETWORK model
SET model.layers = [784, 128, 64, 10]
SET model.activation = "relu"
SET model.optimizer = "adam"
SET model.loss = "categorical_crossentropy"
${getTranslatedKeyword('display')} "✅ Neural network created"

${getTranslatedKeyword('display')} "=== Loading Training Data ==="
LOAD DATA FROM "training_data.csv" INTO training_set
LOAD DATA FROM "test_data.csv" INTO test_set
${getTranslatedKeyword('display')} "✅ Data loaded successfully"

${getTranslatedKeyword('display')} "=== Training Model ==="
TRAIN model WITH training_set FOR 100 EPOCHS
${getTranslatedKeyword('display')} "✅ Training completed"

${getTranslatedKeyword('display')} "=== Model Evaluation ==="
${getTranslatedKeyword('calculate')} accuracy = EVALUATE model WITH test_set
${getTranslatedKeyword('display')} "Model Accuracy: " + accuracy + "%"

${getTranslatedKeyword('calculate')} loss = GET model.loss
${getTranslatedKeyword('display')} "Model Loss: " + loss

${getTranslatedKeyword('display')} "=== Making Predictions ==="
${getTranslatedKeyword('create')} ${getTranslatedKeyword('array')} sample_input SIZE 784
${getTranslatedKeyword('calculate')} prediction = PREDICT model WITH sample_input
${getTranslatedKeyword('display')} "Prediction: " + prediction`,
          output: `=== Machine Learning Demo ===

=== Creating Neural Network ===
🧠 Creating neural network...
⚡ Layers: Input(784) → Hidden(128) → Hidden(64) → Output(10)
🎯 Activation: ReLU, Optimizer: Adam
✅ Neural network created

=== Loading Training Data ===
📊 Loading training data from training_data.csv
📊 Loading test data from test_data.csv
✅ Data loaded successfully

=== Training Model ===
🤖 Training neural network...
📈 Epoch 1/100 - Loss: 0.8234, Accuracy: 72.3%
📈 Epoch 50/100 - Loss: 0.2156, Accuracy: 91.7%
📈 Epoch 100/100 - Loss: 0.1023, Accuracy: 96.8%
✅ Training completed

=== Model Evaluation ===
🎯 Evaluating model performance...
🧮 Calculated: accuracy = 95.7
Model Accuracy: 95.7%`
        },
        'data-science': {
          title: 'Complete Data Science',
          difficulty: 'Expert',
          time: '25 min',
          description: 'Full data science workflow',
          theory: `
**Complete Data Science Pipeline**

SRINJAN provides a complete data science environment with all necessary tools.

**Data Science Workflow:**
1. DATA COLLECTION - Import from various sources
2. DATA CLEANING - Handle missing values, outliers
3. EXPLORATORY ANALYSIS - Understand patterns
4. FEATURE ENGINEERING - Create new variables
5. MODEL BUILDING - Train algorithms
6. VALIDATION - Test performance
7. DEPLOYMENT - Put model in production

**Advanced Features:**
• DataFrame operations
• Statistical testing
• Time series analysis
• Natural language processing
• Computer vision
          `,
          code: `${getTranslatedKeyword('display')} "=== Complete Data Science Pipeline ==="

${getTranslatedKeyword('display')} "=== 1. Data Collection ==="
CREATE DATAFRAME customer_data
LOAD DATA FROM "customers.csv" INTO customer_data
${getTranslatedKeyword('display')} "Data shape: " + SHAPE(customer_data)

${getTranslatedKeyword('display')} "=== 2. Data Exploration ==="
${getTranslatedKeyword('display')} "First 5 rows:"
${getTranslatedKeyword('display')} HEAD(customer_data, 5)

${getTranslatedKeyword('calculate')} missing_values = COUNT_MISSING(customer_data)
${getTranslatedKeyword('display')} "Missing values: " + missing_values

${getTranslatedKeyword('display')} "=== 3. Statistical Summary ==="
${getTranslatedKeyword('calculate')} summary = DESCRIBE(customer_data)
${getTranslatedKeyword('display')} summary

${getTranslatedKeyword('display')} "=== 4. Data Visualization ==="
CREATE HISTOGRAM age_dist
PLOT customer_data.age AS HISTOGRAM
SET age_dist.title = "Age Distribution"
SHOW age_dist

CREATE SCATTER_PLOT income_age
PLOT customer_data.income VS customer_data.age
SET income_age.title = "Income vs Age"
SHOW income_age

${getTranslatedKeyword('display')} "=== 5. Feature Engineering ==="
${getTranslatedKeyword('calculate')} customer_data.age_group = CATEGORIZE(customer_data.age, [18, 30, 50, 65])
${getTranslatedKeyword('calculate')} customer_data.income_level = CATEGORIZE(customer_data.income, ["Low", "Medium", "High"])

${getTranslatedKeyword('display')} "=== 6. Machine Learning ==="
CREATE RANDOM_FOREST classifier
SPLIT customer_data INTO training_set, test_set RATIO 0.8
TRAIN classifier WITH training_set TARGET "purchase_decision"
${getTranslatedKeyword('calculate')} accuracy = EVALUATE classifier WITH test_set
${getTranslatedKeyword('display')} "Model Accuracy: " + accuracy + "%"`,
          output: `=== Complete Data Science Pipeline ===

=== 1. Data Collection ===
📊 Created dataframe: customer_data
📊 Loading data from customers.csv
📊 Data loaded: 10,000 rows × 8 columns
Data shape: (10000, 8)

=== 2. Data Exploration ===
First 5 rows:
   age  income  education  purchase_decision
0   25   45000        12                  1
1   34   67000        16                  1
2   28   52000        14                  0
3   45   89000        18                  1
4   31   58000        15                  1

📊 Analyzing missing values...
🧮 Calculated: missing_values = 23
Missing values: 23

=== 3. Statistical Summary ===
📈 Performing statistical analysis...
       age      income   education
count  10000    10000      10000
mean   42.3     65420      14.2
std    12.8     18750      2.1
min    18       25000      10
max    75       150000     20

=== 4. Data Visualization ===
📊 Created histogram: age_dist
📈 Generated age distribution chart
📊 Created scatter plot: income_age
📈 Generated income vs age visualization

=== 5. Feature Engineering ===
🔧 Creating age_group categories...
🔧 Creating income_level categories...
✅ Feature engineering completed

=== 6. Machine Learning ===
🌳 Created random forest classifier
📊 Split data: 8000 training, 2000 testing
🤖 Training random forest model...
🎯 Model training completed
🧮 Calculated: accuracy = 87.3
Model Accuracy: 87.3%`
        }
      }
    }
  };

  const categories = Object.keys(tutorials);
  const currentCategory = tutorials[activeCategory as keyof typeof tutorials];
  const currentLesson = currentCategory.lessons[activeLesson as keyof typeof currentCategory.lessons];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-orange-400 bg-orange-400/10';
      case 'Expert': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
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
              COMPLETE SRINJAN TUTORIAL
            </h3>
            <p className="text-sm text-blue-200">Master coding, DS, AI & everything!</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>World's Best</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Category Sidebar */}
        <div className="w-1/3 bg-gray-750 border-r border-gray-700 p-4 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
            <Target className="w-3 h-3 mr-1" />
            CATEGORIES
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
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  <span className="font-medium text-sm">{cat.title}</span>
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
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  activeLesson === lessonKey
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <div className="font-medium text-sm">{lesson.title}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(lesson.difficulty)}`}>
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
                <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(currentLesson.difficulty)}`}>
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
              Theory & Concepts
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
                Code Example
              </h4>
              <button
                onClick={() => onCodeInsert(currentLesson.code)}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
              >
                <Play className="w-4 h-4" />
                <span>Try This Code</span>
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <span className="text-sm font-medium text-white">SRINJAN Code</span>
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
              Expected Output
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
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              <Code className="w-4 h-4" />
              <span>Insert Code</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Next Lesson</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};