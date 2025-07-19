import React, { useState } from 'react';
import { BookOpen, Play, Copy, ChevronLeft, ChevronRight, Download, Code, Zap, Brain, Database, Settings, FileText, Award, Clock, Target } from 'lucide-react';

interface TutorialPanelProps {
  onCodeInsert: (code: string) => void;
  selectedLanguage: string;
}

export const TutorialPanel: React.FC<TutorialPanelProps> = ({ onCodeInsert, selectedLanguage }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);

  const tutorials = [
    {
      category: "🚀 SRINJAN Fundamentals",
      icon: <Code className="w-5 h-5" />,
      color: "bg-blue-600",
      lessons: [
        {
          title: "Hello World - Your First Program",
          difficulty: "Beginner",
          time: "2 min",
          description: "Learn the basics of SRINJAN with your first program",
          theory: `SRINJAN is the world's most natural programming language. Every command is written in plain English (or your native language).

The DISPLAY command shows text on screen. It's like printf() in C or cout in C++.

Key Features:
• Natural language syntax
• Multilingual support (20+ languages)
• Instant execution
• Perfect for beginners`,
          code: `DISPLAY "🌟 Hello World!"
DISPLAY "Welcome to SRINJAN Programming!"
DISPLAY "The world's most natural coding language"
DISPLAY "================================"
DISPLAY "Ready to build amazing things!"`,
          output: `🌟 Hello World!
Welcome to SRINJAN Programming!
The world's most natural coding language
================================
Ready to build amazing things!
✅ Program executed successfully!`
        },
        {
          title: "Variables and Input/Output",
          difficulty: "Beginner",
          time: "5 min",
          description: "Store data and get user input",
          theory: `Variables store data in memory. SRINJAN makes it super simple:

• INPUT BY USER - Gets input from user
• DISPLAY - Shows output
• Variables automatically created when used

This is like scanf() and printf() in C, but much easier!`,
          code: `DISPLAY "=== Personal Information System ==="
INPUT BY USER name
INPUT BY USER age
INPUT BY USER city

DISPLAY "📝 Your Information:"
DISPLAY "Name: " + name
DISPLAY "Age: " + age
DISPLAY "City: " + city
DISPLAY "Thank you for using SRINJAN!"`,
          output: `=== Personal Information System ===
📝 Input received: name = "John"
📝 Input received: age = "25"
📝 Input received: city = "New York"
📝 Your Information:
Name: John
Age: 25
City: New York
Thank you for using SRINJAN!
✅ Program executed successfully!`
        },
        {
          title: "Mathematical Operations",
          difficulty: "Beginner",
          time: "4 min",
          description: "Perform calculations and math operations",
          theory: `SRINJAN supports all mathematical operations:

• CALCULATE - Performs math operations
• +, -, *, /, % - Basic operations
• ^ - Power operation
• Variables store results automatically

Much simpler than C/C++ math operations!`,
          code: `DISPLAY "🧮 SRINJAN Calculator"
DISPLAY "===================="

CALCULATE num1 = 15
CALCULATE num2 = 7

CALCULATE addition = num1 + num2
CALCULATE subtraction = num1 - num2
CALCULATE multiplication = num1 * num2
CALCULATE division = num1 / num2
CALCULATE modulus = num1 % num2
CALCULATE power = num1 ^ 2

DISPLAY "Numbers: " + num1 + " and " + num2
DISPLAY "Addition: " + addition
DISPLAY "Subtraction: " + subtraction
DISPLAY "Multiplication: " + multiplication
DISPLAY "Division: " + division
DISPLAY "Modulus: " + modulus
DISPLAY "Power (15²): " + power`,
          output: `🧮 SRINJAN Calculator
====================
🧮 Calculated: num1 = 15
🧮 Calculated: num2 = 7
🧮 Calculated: addition = 22
🧮 Calculated: subtraction = 8
🧮 Calculated: multiplication = 105
🧮 Calculated: division = 2.14
🧮 Calculated: modulus = 1
🧮 Calculated: power = 225
Numbers: 15 and 7
Addition: 22
Subtraction: 8
Multiplication: 105
Division: 2.14
Modulus: 1
Power (15²): 225
✅ Program executed successfully!`
        }
      ]
    },
    {
      category: "🔄 Control Flow & Loops",
      icon: <Zap className="w-5 h-5" />,
      color: "bg-purple-600",
      lessons: [
        {
          title: "IF-ELSE Conditions",
          difficulty: "Beginner",
          time: "6 min",
          description: "Make decisions in your programs",
          theory: `Conditional statements let programs make decisions:

• IF - Execute code when condition is true
• OTHERWISE - Execute when condition is false
• END IF - Closes the condition block

Comparison operators:
• EQUALS - Check equality
• GREATER THAN - Check if larger
• LESS THAN - Check if smaller`,
          code: `DISPLAY "🎯 Smart Grading System"
DISPLAY "========================"

INPUT BY USER score

IF score >= 90
  DISPLAY "🏆 Grade: A+ (Excellent!)"
  DISPLAY "Outstanding performance!"
OTHERWISE IF score >= 80
  DISPLAY "🥇 Grade: A (Great job!)"
  DISPLAY "Very good work!"
OTHERWISE IF score >= 70
  DISPLAY "🥈 Grade: B (Good work!)"
  DISPLAY "Keep it up!"
OTHERWISE IF score >= 60
  DISPLAY "🥉 Grade: C (Average)"
  DISPLAY "You can do better!"
OTHERWISE
  DISPLAY "❌ Grade: F (Needs improvement)"
  DISPLAY "Study harder next time!"
END IF

DISPLAY "Thanks for using the grading system!"`,
          output: `🎯 Smart Grading System
========================
📝 Input received: score = "85"
🤔 Checking condition: score >= 90
❌ Condition false
🤔 Checking condition: score >= 80
✅ Condition true
🥇 Grade: A (Great job!)
Very good work!
Thanks for using the grading system!
✅ Program executed successfully!`
        },
        {
          title: "FOR Loops - Counting & Patterns",
          difficulty: "Intermediate",
          time: "8 min",
          description: "Repeat code with FOR loops",
          theory: `FOR loops repeat code a specific number of times:

• FOR variable FROM start TO end
• Loop variable automatically increments
• Perfect for counting, patterns, tables

This is like for(int i=start; i<=end; i++) in C++`,
          code: `DISPLAY "🔢 FOR Loop Demonstrations"
DISPLAY "=========================="

DISPLAY "1. Simple Counting:"
FOR i FROM 1 TO 5
  DISPLAY "Count: " + i
END FOR

DISPLAY ""
DISPLAY "2. Multiplication Table of 7:"
FOR i FROM 1 TO 10
  CALCULATE result = 7 * i
  DISPLAY "7 × " + i + " = " + result
END FOR

DISPLAY ""
DISPLAY "3. Star Pattern:"
FOR i FROM 1 TO 5
  CALCULATE stars = ""
  FOR j FROM 1 TO i
    CALCULATE stars = stars + "⭐"
  END FOR
  DISPLAY stars
END FOR

DISPLAY ""
DISPLAY "🎉 All FOR loops completed!"`,
          output: `🔢 FOR Loop Demonstrations
==========================
1. Simple Counting:
🔄 FOR Loop: i from 1 to 5
  → i = 1
Count: 1
  → i = 2
Count: 2
  → i = 3
Count: 3
  → i = 4
Count: 4
  → i = 5
Count: 5
✅ FOR Loop completed

2. Multiplication Table of 7:
🔄 FOR Loop: i from 1 to 10
🧮 Calculated: result = 7
7 × 1 = 7
🧮 Calculated: result = 14
7 × 2 = 14
🧮 Calculated: result = 21
7 × 3 = 21
🧮 Calculated: result = 28
7 × 4 = 28
🧮 Calculated: result = 35
7 × 5 = 35
✅ FOR Loop completed

3. Star Pattern:
⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐

🎉 All FOR loops completed!
✅ Program executed successfully!`
        },
        {
          title: "WHILE & DO-WHILE Loops",
          difficulty: "Intermediate",
          time: "10 min",
          description: "Conditional loops and menu systems",
          theory: `WHILE loops repeat while condition is true:

• WHILE condition - Check before executing
• DO...WHILE condition - Execute first, then check
• Perfect for menus, validation, unknown iterations

Like while() and do-while() in C++`,
          code: `DISPLAY "🔄 WHILE Loop Demonstrations"
DISPLAY "============================"

DISPLAY "1. WHILE Loop - Countdown:"
CALCULATE counter = 5
WHILE counter > 0
  DISPLAY "Countdown: " + counter
  CALCULATE counter = counter - 1
END WHILE
DISPLAY "🚀 Blast off!"

DISPLAY ""
DISPLAY "2. DO-WHILE Loop - Menu System:"
CALCULATE choice = 0
DO
  DISPLAY "📋 Menu Options:"
  DISPLAY "1. Say Hello"
  DISPLAY "2. Show Time"
  DISPLAY "3. Exit"
  INPUT BY USER choice
  
  IF choice EQUALS 1
    DISPLAY "👋 Hello from SRINJAN!"
  OTHERWISE IF choice EQUALS 2
    DISPLAY "⏰ Current time: 10:30 AM"
  OTHERWISE IF choice EQUALS 3
    DISPLAY "👋 Goodbye!"
  OTHERWISE
    DISPLAY "❌ Invalid choice!"
  END IF
WHILE choice != 3

DISPLAY "🎉 All loops completed!"`,
          output: `🔄 WHILE Loop Demonstrations
============================
1. WHILE Loop - Countdown:
🧮 Calculated: counter = 5
🔄 WHILE Loop: counter > 0
  → Iteration 1
Countdown: 5
🧮 Calculated: counter = 4
  → Iteration 2
Countdown: 4
🧮 Calculated: counter = 3
  → Iteration 3
Countdown: 3
🧮 Calculated: counter = 2
  → Iteration 2
Countdown: 2
🧮 Calculated: counter = 1
  → Iteration 1
Countdown: 1
🧮 Calculated: counter = 0
✅ WHILE Loop completed
🚀 Blast off!

2. DO-WHILE Loop - Menu System:
🔄 DO-WHILE Loop: choice != 3
📋 Menu Options:
1. Say Hello
2. Show Time
3. Exit
📝 Input received: choice = "1"
✅ Condition evaluated: true
👋 Hello from SRINJAN!
✅ DO-WHILE Loop completed

🎉 All loops completed!
✅ Program executed successfully!`
        }
      ]
    },
    {
      category: "📊 Data Structures",
      icon: <Database className="w-5 h-5" />,
      color: "bg-green-600",
      lessons: [
        {
          title: "Arrays - Complete Operations",
          difficulty: "Intermediate",
          time: "12 min",
          description: "Master arrays with all operations",
          theory: `Arrays store multiple values in sequence:

• CREATE ARRAY name SIZE n - Creates array
• STORE value AT array[index] - Stores value
• SORT array - Sorts elements
• SEARCH array FOR value - Finds element

Like int arr[n] in C++ but much easier!`,
          code: `DISPLAY "📊 Complete Array Operations"
DISPLAY "============================="

// Create and populate array
CREATE ARRAY numbers SIZE 8
STORE 64 AT numbers[0]
STORE 34 AT numbers[1]
STORE 25 AT numbers[2]
STORE 12 AT numbers[3]
STORE 22 AT numbers[4]
STORE 11 AT numbers[5]
STORE 90 AT numbers[6]
STORE 5 AT numbers[7]

DISPLAY "Original array: [64, 34, 25, 12, 22, 11, 90, 5]"

// Array statistics
CALCULATE sum = 0
FOR i FROM 0 TO 7
  CALCULATE sum = sum + numbers[i]
END FOR
CALCULATE average = sum / 8
DISPLAY "Sum: " + sum
DISPLAY "Average: " + average

// Sort array
SORT numbers
DISPLAY "Sorted array: " + numbers

// Search operations
SEARCH numbers FOR 25
SEARCH numbers FOR 100

DISPLAY "🎉 Array operations completed!"`,
          output: `📊 Complete Array Operations
=============================
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
🧮 Calculated: sum = 263
🧮 Calculated: average = 32.875
Sum: 263
Average: 32.875
🔄 Sorted array numbers → [5, 11, 12, 22, 25, 34, 64, 90]
Sorted array: [5, 11, 12, 22, 25, 34, 64, 90]
🔍 Searched for "25" in numbers → Found at index: 4
🔍 Searched for "100" in numbers → Found at index: -1
🎉 Array operations completed!
✅ Program executed successfully!`
        },
        {
          title: "Stacks - LIFO Operations",
          difficulty: "Intermediate",
          time: "10 min",
          description: "Master stack data structure",
          theory: `Stacks follow Last-In-First-Out (LIFO) principle:

• CREATE STACK name - Creates empty stack
• PUSH stack VALUE item - Adds to top
• POP stack - Removes from top
• PEEK stack - Views top without removing

Perfect for undo operations, function calls, expression evaluation!`,
          code: `DISPLAY "📚 Complete Stack Operations"
DISPLAY "============================="

// Create stack and basic operations
CREATE STACK browserHistory
DISPLAY "Created browser history stack"

// Push websites
PUSH browserHistory VALUE "google.com"
PUSH browserHistory VALUE "github.com"
PUSH browserHistory VALUE "stackoverflow.com"
PUSH browserHistory VALUE "srinjan.io"

DISPLAY "Current stack: " + browserHistory

// Demonstrate LIFO
DISPLAY ""
DISPLAY "🔙 Going back in browser history:"
DISPLAY "Current page: " + POP browserHistory
DISPLAY "Previous page: " + POP browserHistory
DISPLAY "Stack now: " + browserHistory

// Undo system simulation
DISPLAY ""
DISPLAY "📝 Undo System Simulation:"
CREATE STACK undoStack
PUSH undoStack VALUE "Typed 'Hello'"
PUSH undoStack VALUE "Typed ' World'"
PUSH undoStack VALUE "Added '!'"

DISPLAY "Actions: " + undoStack
DISPLAY "Undo: " + POP undoStack
DISPLAY "Undo: " + POP undoStack
DISPLAY "Remaining: " + undoStack

DISPLAY "🎉 Stack operations completed!"`,
          output: `📚 Complete Stack Operations
=============================
📚 Created stack: browserHistory
Created browser history stack
⬆️ Pushed "google.com" to browserHistory → [google.com]
⬆️ Pushed "github.com" to browserHistory → [google.com, github.com]
⬆️ Pushed "stackoverflow.com" to browserHistory → [google.com, github.com, stackoverflow.com]
⬆️ Pushed "srinjan.io" to browserHistory → [google.com, github.com, stackoverflow.com, srinjan.io]
Current stack: [google.com, github.com, stackoverflow.com, srinjan.io]

🔙 Going back in browser history:
⬇️ Popped "srinjan.io" from browserHistory → [google.com, github.com, stackoverflow.com]
Current page: srinjan.io
⬇️ Popped "stackoverflow.com" from browserHistory → [google.com, github.com]
Previous page: stackoverflow.com
Stack now: [google.com, github.com]

📝 Undo System Simulation:
📚 Created stack: undoStack
⬆️ Pushed "Typed 'Hello'" to undoStack → [Typed 'Hello']
⬆️ Pushed "Typed ' World'" to undoStack → [Typed 'Hello', Typed ' World']
⬆️ Pushed "Added '!'" to undoStack → [Typed 'Hello', Typed ' World', Added '!']
Actions: [Typed 'Hello', Typed ' World', Added '!']
⬇️ Popped "Added '!'" from undoStack → [Typed 'Hello', Typed ' World']
Undo: Added '!'
⬇️ Popped "Typed ' World'" from undoStack → [Typed 'Hello']
Undo: Typed ' World'
Remaining: [Typed 'Hello']
🎉 Stack operations completed!
✅ Program executed successfully!`
        },
        {
          title: "Queues & Advanced Structures",
          difficulty: "Advanced",
          time: "15 min",
          description: "Queues, Trees, and Graphs",
          theory: `Advanced data structures for complex problems:

QUEUES (FIFO):
• CREATE QUEUE - First-In-First-Out
• ENQUEUE - Add to rear
• DEQUEUE - Remove from front

TREES:
• CREATE TREE - Hierarchical structure
• INSERT ROOT/LEFT/RIGHT - Build tree

GRAPHS:
• CREATE GRAPH - Network structure
• ADD VERTEX/EDGE - Build connections`,
          code: `DISPLAY "🌟 Advanced Data Structures"
DISPLAY "=============================="

// Queue Operations (FIFO)
DISPLAY "1. 🚶 Queue Operations (FIFO):"
CREATE QUEUE customerService
ENQUEUE customerService VALUE "Customer A"
ENQUEUE customerService VALUE "Customer B"
ENQUEUE customerService VALUE "Customer C"

DISPLAY "Queue: " + customerService
DISPLAY "Serving: " + DEQUEUE customerService
DISPLAY "Serving: " + DEQUEUE customerService
DISPLAY "Remaining: " + customerService

// Tree Operations
DISPLAY ""
DISPLAY "2. 🌳 Binary Tree Operations:"
CREATE TREE familyTree
INSERT familyTree ROOT "Grandparent"
INSERT familyTree LEFT "Parent1"
INSERT familyTree RIGHT "Parent2"

DISPLAY "Tree structure created successfully"
DISPLAY "Root: Grandparent"
DISPLAY "├── Parent1"
DISPLAY "└── Parent2"

// Graph Operations
DISPLAY ""
DISPLAY "3. 📈 Graph Operations:"
CREATE GRAPH socialNetwork
ADD VERTEX socialNetwork "Alice"
ADD VERTEX socialNetwork "Bob"
ADD VERTEX socialNetwork "Charlie"
ADD EDGE socialNetwork "Alice" TO "Bob"
ADD EDGE socialNetwork "Bob" TO "Charlie"

DISPLAY "Social network created:"
DISPLAY "Alice → Bob → Charlie"

DISPLAY "🎉 All advanced structures completed!"`,
          output: `🌟 Advanced Data Structures
==============================
1. 🚶 Queue Operations (FIFO):
🚶 Created queue: customerService
➡️ Enqueued "Customer A" to customerService → [Customer A]
➡️ Enqueued "Customer B" to customerService → [Customer A, Customer B]
➡️ Enqueued "Customer C" to customerService → [Customer A, Customer B, Customer C]
Queue: [Customer A, Customer B, Customer C]
⬅️ Dequeued "Customer A" from customerService → [Customer B, Customer C]
Serving: Customer A
⬅️ Dequeued "Customer B" from customerService → [Customer C]
Serving: Customer B
Remaining: [Customer C]

2. 🌳 Binary Tree Operations:
🌳 Created tree: familyTree
🌿 Inserted ROOT "Grandparent" in familyTree
🌿 Inserted LEFT "Parent1" in familyTree
🌿 Inserted RIGHT "Parent2" in familyTree
Tree structure created successfully
Root: Grandparent
├── Parent1
└── Parent2

3. 📈 Graph Operations:
📈 Created graph: socialNetwork
📍 Added vertex "Alice" to socialNetwork
📍 Added vertex "Bob" to socialNetwork
📍 Added vertex "Charlie" to socialNetwork
🔗 Added edge "Alice" → "Bob" in socialNetwork
🔗 Added edge "Bob" → "Charlie" in socialNetwork
Social network created:
Alice → Bob → Charlie
🎉 All advanced structures completed!
✅ Program executed successfully!`
        }
      ]
    },
    {
      category: "🤖 AI & Data Science",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-red-600",
      lessons: [
        {
          title: "Data Analysis & Statistics",
          difficulty: "Advanced",
          time: "20 min",
          description: "Complete data analysis with statistics",
          theory: `SRINJAN provides complete data science capabilities:

DATA ANALYSIS:
• CREATE DATAFRAME - Store structured data
• CALCULATE statistics - Mean, median, mode
• CORRELATION - Find relationships
• VISUALIZATION - Create charts

STATISTICAL FUNCTIONS:
• MEAN, MEDIAN, MODE - Central tendency
• STANDARD DEVIATION - Data spread
• CORRELATION - Relationship strength`,
          code: `DISPLAY "📊 Complete Data Analysis"
DISPLAY "=========================="

// Create and populate dataframe
CREATE DATAFRAME sales_data
LOAD DATA FROM "sales.csv" INTO sales_data

// Basic statistics
DISPLAY "📈 Sales Data Analysis:"
CALCULATE mean_sales = MEAN(sales_data.sales)
CALCULATE median_sales = MEDIAN(sales_data.sales)
CALCULATE mode_sales = MODE(sales_data.sales)
CALCULATE std_dev = STANDARD_DEVIATION(sales_data.sales)

DISPLAY "Mean Sales: $" + mean_sales
DISPLAY "Median Sales: $" + median_sales
DISPLAY "Mode Sales: $" + mode_sales
DISPLAY "Standard Deviation: $" + std_dev

// Correlation analysis
CALCULATE correlation = CORRELATION(sales_data.advertising, sales_data.sales)
DISPLAY "Advertising-Sales Correlation: " + correlation

// Data visualization
CREATE VISUALIZATION sales_chart
PLOT sales_data.month VS sales_data.sales AS LINE_CHART
SET sales_chart.title = "Monthly Sales Trend"
SET sales_chart.x_label = "Month"
SET sales_chart.y_label = "Sales ($)"
SHOW sales_chart

// Advanced analysis
CALCULATE growth_rate = (sales_data.sales[11] - sales_data.sales[0]) / sales_data.sales[0] * 100
DISPLAY "Annual Growth Rate: " + growth_rate + "%"

DISPLAY "🎉 Data analysis completed!"`,
          output: `📊 Complete Data Analysis
==========================
📊 Created dataframe: sales_data
📂 Loaded data from "sales.csv" into sales_data
📈 Sales Data Analysis:
🧮 Calculated: mean_sales = 45670.50
🧮 Calculated: median_sales = 44200.00
🧮 Calculated: mode_sales = 42000.00
🧮 Calculated: std_dev = 8945.30
Mean Sales: $45670.50
Median Sales: $44200.00
Mode Sales: $42000.00
Standard Deviation: $8945.30
🧮 Calculated: correlation = 0.847
Advertising-Sales Correlation: 0.847
📊 Created visualization: sales_chart
📈 Plotted sales_data.month vs sales_data.sales as LINE_CHART
🎨 Set title: "Monthly Sales Trend"
🎨 Set x_label: "Month"
🎨 Set y_label: "Sales ($)"
📊 Visualization displayed successfully
🧮 Calculated: growth_rate = 23.5
Annual Growth Rate: 23.5%
🎉 Data analysis completed!
✅ Program executed successfully!`
        },
        {
          title: "Machine Learning Models",
          difficulty: "Expert",
          time: "25 min",
          description: "Build and train ML models",
          theory: `SRINJAN makes machine learning accessible:

MODEL TYPES:
• LINEAR REGRESSION - Predict continuous values
• RANDOM FOREST - Ensemble learning
• NEURAL NETWORK - Deep learning
• SVM - Support Vector Machine

WORKFLOW:
• CREATE MODEL - Initialize model
• TRAIN - Fit to data
• EVALUATE - Test performance
• PREDICT - Make predictions`,
          code: `DISPLAY "🤖 Complete Machine Learning"
DISPLAY "=============================="

// Linear Regression
DISPLAY "1. 📈 Linear Regression Model:"
CREATE MODEL linear_model TYPE "LINEAR_REGRESSION"
LOAD TRAINING_DATA FROM "house_prices.csv"
TRAIN linear_model WITH training_data
CALCULATE accuracy = EVALUATE linear_model WITH test_data
DISPLAY "Linear Regression Accuracy: " + accuracy + "%"

// Random Forest
DISPLAY ""
DISPLAY "2. 🌲 Random Forest Model:"
CREATE MODEL forest_model TYPE "RANDOM_FOREST"
SET forest_model.n_estimators = 100
SET forest_model.max_depth = 10
TRAIN forest_model WITH training_data
CALCULATE forest_accuracy = EVALUATE forest_model WITH test_data
DISPLAY "Random Forest Accuracy: " + forest_accuracy + "%"

// Neural Network
DISPLAY ""
DISPLAY "3. 🧠 Neural Network Model:"
CREATE NEURAL NETWORK deep_model
SET deep_model.layers = [784, 128, 64, 10]
SET deep_model.activation = "relu"
SET deep_model.optimizer = "adam"
SET deep_model.learning_rate = 0.001

TRAIN deep_model WITH training_data FOR 100 EPOCHS
CALCULATE nn_accuracy = EVALUATE deep_model WITH test_data
DISPLAY "Neural Network Accuracy: " + nn_accuracy + "%"

// Make predictions
DISPLAY ""
DISPLAY "4. 🎯 Making Predictions:"
CALCULATE prediction1 = PREDICT linear_model WITH new_data[0]
CALCULATE prediction2 = PREDICT forest_model WITH new_data[1]
CALCULATE prediction3 = PREDICT deep_model WITH new_data[2]

DISPLAY "Linear Regression Prediction: $" + prediction1
DISPLAY "Random Forest Prediction: $" + prediction2
DISPLAY "Neural Network Prediction: " + prediction3

DISPLAY "🎉 Machine learning pipeline completed!"`,
          output: `🤖 Complete Machine Learning
==============================
1. 📈 Linear Regression Model:
🤖 Created model: linear_model (LINEAR_REGRESSION)
📂 Loaded training data from "house_prices.csv"
🎯 Training linear_model with training_data...
⚡ Training completed in 2.3 seconds
🧮 Calculated: accuracy = 87.5
Linear Regression Accuracy: 87.5%

2. 🌲 Random Forest Model:
🤖 Created model: forest_model (RANDOM_FOREST)
⚙️ Set n_estimators = 100
⚙️ Set max_depth = 10
🎯 Training forest_model with training_data...
⚡ Training completed in 5.7 seconds
🧮 Calculated: forest_accuracy = 92.3
Random Forest Accuracy: 92.3%

3. 🧠 Neural Network Model:
🧠 Created neural network: deep_model
⚙️ Set layers: [784, 128, 64, 10]
⚙️ Set activation: relu
⚙️ Set optimizer: adam
⚙️ Set learning_rate: 0.001
🎯 Training deep_model for 100 epochs...
📊 Epoch 1/100 - Loss: 0.8234 - Accuracy: 0.7456
📊 Epoch 50/100 - Loss: 0.2156 - Accuracy: 0.9234
📊 Epoch 100/100 - Loss: 0.1023 - Accuracy: 0.9567
⚡ Training completed in 45.2 seconds
🧮 Calculated: nn_accuracy = 95.67
Neural Network Accuracy: 95.67%

4. 🎯 Making Predictions:
🧮 Calculated: prediction1 = 245000
🧮 Calculated: prediction2 = 238500
🧮 Calculated: prediction3 = 0.9234
Linear Regression Prediction: $245000
Random Forest Prediction: $238500
Neural Network Prediction: 0.9234
🎉 Machine learning pipeline completed!
✅ Program executed successfully!`
        },
        {
          title: "Deep Learning & Neural Networks",
          difficulty: "Expert",
          time: "30 min",
          description: "Advanced deep learning with CNNs and LSTMs",
          theory: `Advanced deep learning in SRINJAN:

NEURAL NETWORK TYPES:
• CNN - Convolutional Neural Networks (images)
• LSTM - Long Short-Term Memory (sequences)
• AUTOENCODER - Unsupervised learning
• GAN - Generative Adversarial Networks

ADVANCED FEATURES:
• Custom architectures
• Transfer learning
• Hyperparameter tuning
• Model deployment`,
          code: `DISPLAY "🧠 Advanced Deep Learning"
DISPLAY "=========================="

// Convolutional Neural Network
DISPLAY "1. 🖼️ CNN for Image Classification:"
CREATE CNN image_classifier
SET image_classifier.input_shape = [224, 224, 3]
ADD LAYER image_classifier CONV2D filters=32 kernel_size=3
ADD LAYER image_classifier MAXPOOL2D pool_size=2
ADD LAYER image_classifier CONV2D filters=64 kernel_size=3
ADD LAYER image_classifier MAXPOOL2D pool_size=2
ADD LAYER image_classifier FLATTEN
ADD LAYER image_classifier DENSE units=128 activation="relu"
ADD LAYER image_classifier DENSE units=10 activation="softmax"

COMPILE image_classifier optimizer="adam" loss="categorical_crossentropy"
TRAIN image_classifier WITH image_data FOR 50 EPOCHS
CALCULATE cnn_accuracy = EVALUATE image_classifier WITH test_images
DISPLAY "CNN Accuracy: " + cnn_accuracy + "%"

// LSTM for Time Series
DISPLAY ""
DISPLAY "2. 📈 LSTM for Time Series Prediction:"
CREATE LSTM time_predictor
SET time_predictor.sequence_length = 60
ADD LAYER time_predictor LSTM units=50 return_sequences=true
ADD LAYER time_predictor DROPOUT rate=0.2
ADD LAYER time_predictor LSTM units=50 return_sequences=false
ADD LAYER time_predictor DROPOUT rate=0.2
ADD LAYER time_predictor DENSE units=1

COMPILE time_predictor optimizer="adam" loss="mse"
TRAIN time_predictor WITH time_series_data FOR 100 EPOCHS
CALCULATE lstm_accuracy = EVALUATE time_predictor WITH test_series
DISPLAY "LSTM Accuracy: " + lstm_accuracy + "%"

// Autoencoder
DISPLAY ""
DISPLAY "3. 🔄 Autoencoder for Anomaly Detection:"
CREATE AUTOENCODER anomaly_detector
SET anomaly_detector.encoding_dim = 32

// Encoder
ADD LAYER anomaly_detector DENSE units=128 activation="relu"
ADD LAYER anomaly_detector DENSE units=64 activation="relu"
ADD LAYER anomaly_detector DENSE units=32 activation="relu"

// Decoder
ADD LAYER anomaly_detector DENSE units=64 activation="relu"
ADD LAYER anomaly_detector DENSE units=128 activation="relu"
ADD LAYER anomaly_detector DENSE units=784 activation="sigmoid"

COMPILE anomaly_detector optimizer="adam" loss="binary_crossentropy"
TRAIN anomaly_detector WITH normal_data FOR 200 EPOCHS
CALCULATE reconstruction_error = EVALUATE anomaly_detector WITH test_data
DISPLAY "Reconstruction Error: " + reconstruction_error

DISPLAY "🎉 Deep learning models completed!"`,
          output: `🧠 Advanced Deep Learning
==========================
1. 🖼️ CNN for Image Classification:
🧠 Created CNN: image_classifier
⚙️ Set input_shape: [224, 224, 3]
🔧 Added CONV2D layer: filters=32, kernel_size=3
🔧 Added MAXPOOL2D layer: pool_size=2
🔧 Added CONV2D layer: filters=64, kernel_size=3
🔧 Added MAXPOOL2D layer: pool_size=2
🔧 Added FLATTEN layer
🔧 Added DENSE layer: units=128, activation=relu
🔧 Added DENSE layer: units=10, activation=softmax
⚙️ Compiled with optimizer=adam, loss=categorical_crossentropy
🎯 Training image_classifier for 50 epochs...
📊 Epoch 1/50 - Loss: 2.3026 - Accuracy: 0.1000
📊 Epoch 25/50 - Loss: 0.4567 - Accuracy: 0.8234
📊 Epoch 50/50 - Loss: 0.1234 - Accuracy: 0.9567
⚡ Training completed in 120.5 seconds
🧮 Calculated: cnn_accuracy = 95.67
CNN Accuracy: 95.67%

2. 📈 LSTM for Time Series Prediction:
🧠 Created LSTM: time_predictor
⚙️ Set sequence_length: 60
🔧 Added LSTM layer: units=50, return_sequences=true
🔧 Added DROPOUT layer: rate=0.2
🔧 Added LSTM layer: units=50, return_sequences=false
🔧 Added DROPOUT layer: rate=0.2
🔧 Added DENSE layer: units=1
⚙️ Compiled with optimizer=adam, loss=mse
🎯 Training time_predictor for 100 epochs...
📊 Epoch 1/100 - Loss: 0.8234 - MAE: 0.6543
📊 Epoch 50/100 - Loss: 0.2156 - MAE: 0.3421
📊 Epoch 100/100 - Loss: 0.0987 - MAE: 0.2134
⚡ Training completed in 89.3 seconds
🧮 Calculated: lstm_accuracy = 91.23
LSTM Accuracy: 91.23%

3. 🔄 Autoencoder for Anomaly Detection:
🧠 Created AUTOENCODER: anomaly_detector
⚙️ Set encoding_dim: 32
🔧 Added DENSE layer: units=128, activation=relu
🔧 Added DENSE layer: units=64, activation=relu
🔧 Added DENSE layer: units=32, activation=relu
🔧 Added DENSE layer: units=64, activation=relu
🔧 Added DENSE layer: units=128, activation=relu
🔧 Added DENSE layer: units=784, activation=sigmoid
⚙️ Compiled with optimizer=adam, loss=binary_crossentropy
🎯 Training anomaly_detector for 200 epochs...
📊 Epoch 1/200 - Loss: 0.6931
📊 Epoch 100/200 - Loss: 0.2345
📊 Epoch 200/200 - Loss: 0.0876
⚡ Training completed in 156.7 seconds
🧮 Calculated: reconstruction_error = 0.0876
Reconstruction Error: 0.0876
🎉 Deep learning models completed!
✅ Program executed successfully!`
        }
      ]
    },
    {
      category: "🏗️ Object-Oriented Programming",
      icon: <Settings className="w-5 h-5" />,
      color: "bg-orange-600",
      lessons: [
        {
          title: "Classes and Objects",
          difficulty: "Advanced",
          time: "18 min",
          description: "Master OOP concepts in SRINJAN",
          theory: `Object-Oriented Programming in SRINJAN:

CLASSES:
• CREATE CLASS - Define blueprint
• PROPERTIES - Data members
• METHODS - Functions inside class
• CONSTRUCTOR - Initialize objects

OBJECTS:
• CREATE OBJECT - Instance of class
• ACCESS properties and methods
• INHERITANCE - Extend classes
• POLYMORPHISM - Method overriding`,
          code: `DISPLAY "🏗️ Object-Oriented Programming"
DISPLAY "==============================="

// Define a class
CREATE CLASS Car
  PROPERTIES:
    brand
    model
    year
    speed
  
  CONSTRUCTOR(brand, model, year):
    SET this.brand = brand
    SET this.model = model
    SET this.year = year
    SET this.speed = 0
  END CONSTRUCTOR
  
  METHOD start():
    DISPLAY this.brand + " " + this.model + " is starting..."
    DISPLAY "Engine started! 🚗"
  END METHOD
  
  METHOD accelerate(amount):
    CALCULATE this.speed = this.speed + amount
    DISPLAY "Accelerating... Current speed: " + this.speed + " mph"
  END METHOD
  
  METHOD brake(amount):
    CALCULATE this.speed = this.speed - amount
    IF this.speed < 0
      CALCULATE this.speed = 0
    END IF
    DISPLAY "Braking... Current speed: " + this.speed + " mph"
  END METHOD
  
  METHOD getInfo():
    DISPLAY "🚗 Car Information:"
    DISPLAY "Brand: " + this.brand
    DISPLAY "Model: " + this.model
    DISPLAY "Year: " + this.year
    DISPLAY "Current Speed: " + this.speed + " mph"
  END METHOD
END CLASS

// Create objects
DISPLAY "Creating car objects:"
CREATE OBJECT myCar FROM Car("Toyota", "Camry", 2023)
CREATE OBJECT friendCar FROM Car("Honda", "Civic", 2022)

// Use objects
CALL myCar.getInfo()
CALL myCar.start()
CALL myCar.accelerate(30)
CALL myCar.accelerate(20)
CALL myCar.brake(15)

DISPLAY ""
CALL friendCar.getInfo()
CALL friendCar.start()
CALL friendCar.accelerate(45)

DISPLAY "🎉 OOP demonstration completed!"`,
          output: `🏗️ Object-Oriented Programming
===============================
🏗️ Created class: Car
  📝 Properties: brand, model, year, speed
  🔧 Constructor defined
  ⚙️ Method: start()
  ⚙️ Method: accelerate(amount)
  ⚙️ Method: brake(amount)
  ⚙️ Method: getInfo()
✅ Class Car defined successfully

Creating car objects:
🏗️ Created object: myCar from Car("Toyota", "Camry", 2023)
  ⚙️ Constructor called: brand=Toyota, model=Camry, year=2023, speed=0
🏗️ Created object: friendCar from Car("Honda", "Civic", 2022)
  ⚙️ Constructor called: brand=Honda, model=Civic, year=2022, speed=0

📞 Called method: myCar.getInfo()
🚗 Car Information:
Brand: Toyota
Model: Camry
Year: 2023
Current Speed: 0 mph

📞 Called method: myCar.start()
Toyota Camry is starting...
Engine started! 🚗

📞 Called method: myCar.accelerate(30)
🧮 Calculated: this.speed = 30
Accelerating... Current speed: 30 mph

📞 Called method: myCar.accelerate(20)
🧮 Calculated: this.speed = 50
Accelerating... Current speed: 50 mph

📞 Called method: myCar.brake(15)
🧮 Calculated: this.speed = 35
Braking... Current speed: 35 mph

📞 Called method: friendCar.getInfo()
🚗 Car Information:
Brand: Honda
Model: Civic
Year: 2022
Current Speed: 0 mph

📞 Called method: friendCar.start()
Honda Civic is starting...
Engine started! 🚗

📞 Called method: friendCar.accelerate(45)
🧮 Calculated: this.speed = 45
Accelerating... Current speed: 45 mph

🎉 OOP demonstration completed!
✅ Program executed successfully!`
        },
        {
          title: "Inheritance and Polymorphism",
          difficulty: "Expert",
          time: "22 min",
          description: "Advanced OOP concepts",
          theory: `Advanced OOP features in SRINJAN:

INHERITANCE:
• EXTENDS - Create child class
• SUPER - Call parent methods
• OVERRIDE - Redefine methods
• PROTECTED - Access control

POLYMORPHISM:
• Method overriding
• Dynamic method dispatch
• Interface implementation
• Abstract classes`,
          code: `DISPLAY "🧬 Inheritance and Polymorphism"
DISPLAY "================================"

// Base class
CREATE CLASS Animal
  PROPERTIES:
    name
    species
    age
  
  CONSTRUCTOR(name, species, age):
    SET this.name = name
    SET this.species = species
    SET this.age = age
  END CONSTRUCTOR
  
  METHOD makeSound():
    DISPLAY this.name + " makes a generic animal sound"
  END METHOD
  
  METHOD getInfo():
    DISPLAY "🐾 Animal: " + this.name + " (" + this.species + ", " + this.age + " years old)"
  END METHOD
END CLASS

// Derived class - Dog
CREATE CLASS Dog EXTENDS Animal
  PROPERTIES:
    breed
  
  CONSTRUCTOR(name, age, breed):
    SUPER(name, "Dog", age)
    SET this.breed = breed
  END CONSTRUCTOR
  
  OVERRIDE METHOD makeSound():
    DISPLAY this.name + " says: Woof! Woof! 🐕"
  END METHOD
  
  METHOD fetch():
    DISPLAY this.name + " is fetching the ball! 🎾"
  END METHOD
END CLASS

// Derived class - Cat
CREATE CLASS Cat EXTENDS Animal
  PROPERTIES:
    indoor
  
  CONSTRUCTOR(name, age, indoor):
    SUPER(name, "Cat", age)
    SET this.indoor = indoor
  END CONSTRUCTOR
  
  OVERRIDE METHOD makeSound():
    DISPLAY this.name + " says: Meow! Meow! 🐱"
  END METHOD
  
  METHOD climb():
    DISPLAY this.name + " is climbing the cat tree! 🌳"
  END METHOD
END CLASS

// Create objects
CREATE OBJECT myDog FROM Dog("Buddy", 3, "Golden Retriever")
CREATE OBJECT myCat FROM Cat("Whiskers", 2, true)

// Demonstrate polymorphism
DISPLAY "🎭 Polymorphism in action:"
CALL myDog.getInfo()
CALL myDog.makeSound()
CALL myDog.fetch()

DISPLAY ""
CALL myCat.getInfo()
CALL myCat.makeSound()
CALL myCat.climb()

// Array of animals (polymorphism)
DISPLAY ""
DISPLAY "🎪 Animal show (polymorphism):"
CREATE ARRAY animals SIZE 2
STORE myDog AT animals[0]
STORE myCat AT animals[1]

FOR i FROM 0 TO 1
  CALL animals[i].makeSound()
END FOR

DISPLAY "🎉 Inheritance and polymorphism completed!"`,
          output: `🧬 Inheritance and Polymorphism
================================
🏗️ Created class: Animal
  📝 Properties: name, species, age
  🔧 Constructor defined
  ⚙️ Method: makeSound()
  ⚙️ Method: getInfo()
✅ Class Animal defined successfully

🏗️ Created class: Dog EXTENDS Animal
  📝 Additional properties: breed
  🔧 Constructor defined (calls SUPER)
  🔄 OVERRIDE method: makeSound()
  ⚙️ Method: fetch()
✅ Class Dog defined successfully

🏗️ Created class: Cat EXTENDS Animal
  📝 Additional properties: indoor
  🔧 Constructor defined (calls SUPER)
  🔄 OVERRIDE method: makeSound()
  ⚙️ Method: climb()
✅ Class Cat defined successfully

🏗️ Created object: myDog from Dog("Buddy", 3, "Golden Retriever")
  📞 Called SUPER constructor: name=Buddy, species=Dog, age=3
  ⚙️ Set breed=Golden Retriever
🏗️ Created object: myCat from Cat("Whiskers", 2, true)
  📞 Called SUPER constructor: name=Whiskers, species=Cat, age=2
  ⚙️ Set indoor=true

🎭 Polymorphism in action:
📞 Called method: myDog.getInfo()
🐾 Animal: Buddy (Dog, 3 years old)

📞 Called method: myDog.makeSound() [OVERRIDDEN]
Buddy says: Woof! Woof! 🐕

📞 Called method: myDog.fetch()
Buddy is fetching the ball! 🎾

📞 Called method: myCat.getInfo()
🐾 Animal: Whiskers (Cat, 2 years old)

📞 Called method: myCat.makeSound() [OVERRIDDEN]
Whiskers says: Meow! Meow! 🐱

📞 Called method: myCat.climb()
Whiskers is climbing the cat tree! 🌳

🎪 Animal show (polymorphism):
📊 Created array: animals[2]
💾 Stored myDog at animals[0]
💾 Stored myCat at animals[1]
🔄 FOR Loop: i from 0 to 1
📞 Called method: animals[0].makeSound() [POLYMORPHIC]
Buddy says: Woof! Woof! 🐕
📞 Called method: animals[1].makeSound() [POLYMORPHIC]
Whiskers says: Meow! Meow! 🐱
✅ FOR Loop completed

🎉 Inheritance and polymorphism completed!
✅ Program executed successfully!`
        }
      ]
    }
  ];

  const currentTutorial = tutorials[currentCategory];
  const currentLessonData = currentTutorial.lessons[currentLesson];

  const nextLesson = () => {
    if (currentLesson < currentTutorial.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentCategory < tutorials.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentLesson(0);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      setCurrentLesson(tutorials[currentCategory - 1].lessons.length - 1);
    }
  };

  const generatePDF = () => {
    // Generate complete SRINJAN tutorial PDF
    const pdfContent = `
# COMPLETE SRINJAN PROGRAMMING TUTORIAL

## Table of Contents
${tutorials.map((tutorial, catIndex) => `
${catIndex + 1}. ${tutorial.category}
${tutorial.lessons.map((lesson, lessonIndex) => `   ${catIndex + 1}.${lessonIndex + 1} ${lesson.title}`).join('\n')}
`).join('\n')}

${tutorials.map((tutorial, catIndex) => `
# ${catIndex + 1}. ${tutorial.category}

${tutorial.lessons.map((lesson, lessonIndex) => `
## ${catIndex + 1}.${lessonIndex + 1} ${lesson.title}

**Difficulty:** ${lesson.difficulty}
**Time:** ${lesson.time}

### Description
${lesson.description}

### Theory
${lesson.theory}

### Code Example
\`\`\`srinjan
${lesson.code}
\`\`\`

### Expected Output
\`\`\`
${lesson.output}
\`\`\`

---
`).join('\n')}
`).join('\n')}

## Conclusion
Congratulations! You've completed the comprehensive SRINJAN programming tutorial. You now know:
- All programming fundamentals
- Complete control flow and loops
- All data structures
- AI and Data Science
- Object-Oriented Programming

SRINJAN is the world's most natural programming language. Keep practicing and building amazing projects!

© 2024 SRINJAN.IO - The Ultimate Programming Platform
    `;

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Complete_SRINJAN_Tutorial.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 px-4 py-3 border-b border-gray-700 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Complete SRINJAN Tutorial
            </h2>
            <p className="text-sm text-gray-300">Master everything from basics to AI</p>
          </div>
          <button
            onClick={generatePDF}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="p-4 border-b border-gray-700">
        <div className="grid grid-cols-2 gap-2">
          {tutorials.map((tutorial, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentCategory(index);
                setCurrentLesson(0);
              }}
              className={`flex items-center space-x-2 p-3 rounded-lg transition-colors text-left ${
                currentCategory === index
                  ? `${tutorial.color} text-white`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tutorial.icon}
              <div>
                <div className="font-medium text-sm">{tutorial.category}</div>
                <div className="text-xs opacity-75">{tutorial.lessons.length} lessons</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Lesson Header */}
          <div className="bg-gray-750 rounded-lg p-4 border border-gray-600">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{currentLessonData.title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-xs font-medium text-white ${getDifficultyColor(currentLessonData.difficulty)}`}>
                  {currentLessonData.difficulty}
                </span>
                <div className="flex items-center space-x-1 text-gray-400 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{currentLessonData.time}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{currentLessonData.description}</p>
            
            {/* Progress */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Lesson {currentLesson + 1} of {currentTutorial.lessons.length}</span>
              <span>Category {currentCategory + 1} of {tutorials.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${((currentLesson + 1) / currentTutorial.lessons.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Theory Section */}
          <div className="bg-gray-750 rounded-lg p-4 border border-gray-600">
            <h4 className="text-md font-semibold text-white mb-3 flex items-center">
              <Target className="w-4 h-4 mr-2 text-blue-400" />
              Theory & Concepts
            </h4>
            <div className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
              {currentLessonData.theory}
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-white">SRINJAN Code Example</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigator.clipboard.writeText(currentLessonData.code)}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onCodeInsert(currentLessonData.code)}
                  className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition-colors"
                >
                  <Play className="w-3 h-3" />
                  <span>Try This Code</span>
                </button>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-indigo-300 font-mono text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {currentLessonData.code}
              </pre>
            </div>
          </div>

          {/* Expected Output */}
          <div className="bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Expected Output</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-green-300 font-mono text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto">
                {currentLessonData.output}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <button
            onClick={prevLesson}
            disabled={currentCategory === 0 && currentLesson === 0}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-400">
              {currentCategory + 1}.{currentLesson + 1} / {tutorials.length}.{tutorials.reduce((total, cat) => total + cat.lessons.length, 0)}
            </div>
            <div className="text-xs text-gray-500">
              {currentTutorial.category}
            </div>
          </div>

          <button
            onClick={nextLesson}
            disabled={currentCategory === tutorials.length - 1 && currentLesson === currentTutorial.lessons.length - 1}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};