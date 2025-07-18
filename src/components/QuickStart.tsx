import React, { useState } from 'react';
import { BookOpen, Code, Zap, Users, Globe, Award } from 'lucide-react';

export const QuickStart: React.FC = () => {
  const [activeExample, setActiveExample] = useState('hello-world');

  const examples = {
    'hello-world': {
      title: 'Hello World',
      description: 'Your first SRINJAN program',
      code: `DISPLAY "Hello, World!"
DISPLAY "Welcome to SRINJAN.IO"
DISPLAY "The fastest coding language on Earth!"`
    },
    'user-input': {
      title: 'User Input',
      description: 'Get input from users',
      code: `INPUT BY USER name
DISPLAY "Hello " + name
DISPLAY "Nice to meet you!"

INPUT BY USER age
IF age >= 18
  DISPLAY "You are an adult"
OTHERWISE
  DISPLAY "You are a minor"
END IF`
    },
    'loops': {
      title: 'Loops',
      description: 'Repeat code multiple times',
      code: `REPEAT 5 TIMES
  DISPLAY "This is iteration " + i
END REPEAT

REPEAT WHILE condition IS TRUE
  DISPLAY "Still running..."
  CALCULATE condition = FALSE
END REPEAT`
    },
    'functions': {
      title: 'Functions',
      description: 'Create reusable code blocks',
      code: `DEFINE FUNCTION greet(name)
  DISPLAY "Hello " + name
  RETURN "Greeting sent"
END FUNCTION

DEFINE FUNCTION add(a, b)
  RETURN a + b
END FUNCTION

CALL greet("Alice")
CALCULATE result = CALL add(5, 3)
DISPLAY "Result: " + result`
    },
    'data-structures': {
      title: 'Data Structures',
      description: 'Work with arrays, objects, and more',
      code: `CREATE ARRAY numbers SIZE 5
STORE 10 AT numbers[0]
STORE 20 AT numbers[1]

CREATE OBJECT person
SET person.name = "John"
SET person.age = 25
SET person.city = "New York"

CREATE LINKED LIST myList
ADD TO END myList VALUE 100
ADD TO BEGINNING myList VALUE 50
DISPLAY myList`
    },
    'algorithms': {
      title: 'Algorithms',
      description: 'Implement common algorithms',
      code: `// COMPLETE ALGORITHM LIBRARY
DEFINE FUNCTION binarySearch(arr, target)
  CALCULATE left = 0
  CALCULATE right = SIZE OF arr - 1
  
  REPEAT WHILE left <= right
    CALCULATE mid = (left + right) / 2
    IF arr[mid] EQUALS target
      RETURN mid
    OTHERWISE IF arr[mid] < target
      CALCULATE left = mid + 1
    OTHERWISE
      CALCULATE right = mid - 1
    END IF
  END REPEAT
  
  RETURN -1
END FUNCTION

DEFINE FUNCTION quickSort(arr, low, high)
  IF low < high
    CALCULATE pivot = partition(arr, low, high)
    CALL quickSort(arr, low, pivot - 1)
    CALL quickSort(arr, pivot + 1, high)
  END IF
END FUNCTION

DEFINE FUNCTION mergeSort(arr)
  IF SIZE OF arr <= 1
    RETURN arr
  END IF
  
  CALCULATE mid = SIZE OF arr / 2
  CALCULATE left = SLICE arr FROM 0 TO mid
  CALCULATE right = SLICE arr FROM mid TO END
  
  RETURN MERGE(CALL mergeSort(left), CALL mergeSort(right))
END FUNCTION`
    },
    'data-science': {
      title: 'Data Science & AI',
      description: 'Complete data science and machine learning',
      code: `// DATA SCIENCE & MACHINE LEARNING
CREATE DATAFRAME sales_data
LOAD DATA FROM "sales.csv" INTO sales_data

// Data Analysis
CALCULATE mean_sales = MEAN(sales_data.sales)
CALCULATE median_sales = MEDIAN(sales_data.sales)
DISPLAY "Average Sales: " + mean_sales

// Machine Learning
CREATE NEURAL NETWORK model
SET model.layers = [784, 128, 64, 10]
SET model.activation = "relu"
SET model.optimizer = "adam"

TRAIN model WITH training_data FOR 100 EPOCHS
CALCULATE accuracy = EVALUATE model WITH test_data
DISPLAY "Model Accuracy: " + accuracy + "%"

// Data Visualization
CREATE PLOT sales_chart
PLOT sales_data.month VS sales_data.sales
SET sales_chart.title = "Monthly Sales Trend"
SHOW sales_chart`
    },
    'complete-loops': {
      title: 'All Loop Types',
      description: 'FOR, WHILE, DO-WHILE loops like C/C++',
      code: `// ALL LOOP TYPES - COMPLETE LIKE C/C++

// FOR Loop
FOR i FROM 1 TO 10
  DISPLAY "FOR Loop iteration: " + i
  IF i EQUALS 5
    DISPLAY "Halfway there!"
  END IF
END FOR

// WHILE Loop
CALCULATE counter = 1
WHILE counter <= 5
  DISPLAY "WHILE Loop: " + counter
  CALCULATE counter = counter + 1
END WHILE

// DO-WHILE Loop
CALCULATE num = 1
DO
  DISPLAY "DO-WHILE Loop: " + num
  CALCULATE num = num + 1
WHILE num <= 3

// Nested Loops
FOR row FROM 1 TO 3
  FOR col FROM 1 TO 3
    DISPLAY "Position [" + row + "," + col + "]"
  END FOR
END FOR`
    },
    'all-data-structures': {
      title: 'Complete Data Structures',
      description: 'Arrays, Stacks, Queues, Trees, Graphs',
      code: `// COMPLETE DATA STRUCTURE LIBRARY

// Arrays
CREATE ARRAY numbers SIZE 10
FOR i FROM 0 TO 9
  STORE (i * 2) AT numbers[i]
END FOR
SORT numbers
SEARCH numbers FOR 8

// Stack Operations
CREATE STACK myStack
PUSH myStack VALUE 10
PUSH myStack VALUE 20
PUSH myStack VALUE 30
DISPLAY "Popped: " + POP myStack

// Queue Operations
CREATE QUEUE myQueue
ENQUEUE myQueue VALUE "First"
ENQUEUE myQueue VALUE "Second"
DISPLAY "Dequeued: " + DEQUEUE myQueue

// Linked List
CREATE LINKED LIST myList
INSERT myList VALUE 100
INSERT myList VALUE 200
INSERT myList VALUE 300

// Binary Tree
CREATE TREE binaryTree
INSERT binaryTree ROOT 50
INSERT binaryTree LEFT 30
INSERT binaryTree RIGHT 70

// Graph
CREATE GRAPH socialNetwork
ADD VERTEX socialNetwork "Alice"
ADD VERTEX socialNetwork "Bob"
ADD EDGE socialNetwork "Alice" TO "Bob"`
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Natural Syntax',
      description: 'Write code using simple, everyday language commands',
      color: 'text-yellow-400'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Simple Syntax',
      description: 'English-like commands that anyone can understand',
      color: 'text-blue-400'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Universal',
      description: 'Convert to any programming language instantly',
      color: 'text-green-400'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Beginner Friendly',
      description: 'Perfect for learning programming concepts',
      color: 'text-purple-400'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Complete DSA',
      description: 'Built-in data structures and algorithms',
      color: 'text-red-400'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Production Ready',
      description: 'Scale from learning to enterprise applications',
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl border border-indigo-500/30 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">SRINJAN.IO</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            The world's fastest and simplest programming language
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">
              🌐 Convert to any language
            </div>
            <div className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full border border-purple-500/30">
              📚 Complete DSA support
            </div>
            <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
              🗣️ Code in your native language
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-indigo-500/50 transition-colors">
            <div className={`${feature.color} mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Code Examples */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Interactive Examples</h2>
          <p className="text-gray-400 mt-1">Click on any example to see SRINJAN in action</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Example Navigation */}
          <div className="bg-gray-750 border-r border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Example</h3>
            <div className="space-y-2">
              {Object.entries(examples).map(([key, example]) => (
                <button
                  key={key}
                  onClick={() => setActiveExample(key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeExample === key
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <div className="font-medium">{example.title}</div>
                  <div className="text-sm opacity-75">{example.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2 p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {examples[activeExample as keyof typeof examples].title}
              </h3>
              <p className="text-gray-400">
                {examples[activeExample as keyof typeof examples].description}
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <pre className="text-indigo-300 font-mono text-sm leading-relaxed overflow-x-auto">
                {examples[activeExample as keyof typeof examples].code}
              </pre>
            </div>
            
            <div className="mt-4 flex space-x-3">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <Code className="w-4 h-4" />
                <span className="font-semibold">Execute Example</span>
              </button>
              <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                <BookOpen className="w-4 h-4" />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started Steps */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Get Started in 3 Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Write Code</h3>
            <p className="text-gray-400 text-sm">
              Use simple English-like commands to write your programs
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Run Instantly</h3>
            <p className="text-gray-400 text-sm">
              Execute your code faster than any other language
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Convert & Deploy</h3>
            <p className="text-gray-400 text-sm">
              Convert to any language and deploy anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};