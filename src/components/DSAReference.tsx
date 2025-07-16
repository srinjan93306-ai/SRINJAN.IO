import React, { useState } from 'react';
import { BookOpen, Code, Play, ChevronRight, Zap, Clock, BarChart3 } from 'lucide-react';

export const DSAReference: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('arrays');
  const [selectedTopic, setSelectedTopic] = useState('basic-operations');

  const categories = {
    arrays: {
      name: 'Arrays',
      icon: '📊',
      topics: {
        'basic-operations': {
          title: 'Basic Operations',
          complexity: 'O(1) access, O(n) search',
          srinjan: `CREATE ARRAY numbers SIZE 5
STORE 10 AT numbers[0]
STORE 20 AT numbers[1]
STORE 30 AT numbers[2]
DISPLAY numbers[0]
DISPLAY "Array size: " + SIZE OF numbers
DISPLAY "All elements: " + numbers`,
          c: `int numbers[5];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
printf("%d", numbers[0]);
printf("Array size: %d", 5);`,
          description: 'Create arrays and perform basic operations like storing, accessing, and displaying elements.',
          visualization: 'Array with indexed elements'
        },
        'searching': {
          title: 'Linear Search',
          complexity: 'O(n) time, O(1) space',
          srinjan: `DEFINE FUNCTION linearSearch(arr, target)
  REPEAT FOR i FROM 0 TO SIZE OF arr - 1
    IF arr[i] EQUALS target
      RETURN i
    END IF
  END REPEAT
  RETURN -1
END FUNCTION

CREATE ARRAY data VALUES [10, 20, 30, 40, 50]
CALCULATE result = CALL linearSearch(data, 30)
DISPLAY "Element found at index: " + result`,
          c: `int linearSearch(int arr[], int n, int target) {
    for(int i = 0; i < n; i++) {
        if(arr[i] == target) {
            return i;
        }
    }
    return -1;
}`,
          description: 'Search for an element in an array using linear search algorithm.',
          visualization: 'Sequential element comparison'
        },
        'binary-search': {
          title: 'Binary Search',
          complexity: 'O(log n) time, O(1) space',
          srinjan: `DEFINE FUNCTION binarySearch(arr, target)
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
END FUNCTION`,
          c: `int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] == target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
          description: 'Efficient search in sorted arrays using divide and conquer.',
          visualization: 'Divide and conquer approach'
        }
      }
    },
    'linked-lists': {
      name: 'Linked Lists',
      icon: '🔗',
      topics: {
        'singly-linked': {
          title: 'Singly Linked List',
          complexity: 'O(1) insertion, O(n) search',
          srinjan: `CREATE LINKED LIST myList
ADD TO BEGINNING myList VALUE 10
ADD TO END myList VALUE 20
ADD TO END myList VALUE 30
DISPLAY myList
REMOVE FROM BEGINNING myList
DISPLAY "Size: " + SIZE OF myList`,
          c: `struct Node {
    int data;
    struct Node* next;
};
struct Node* head = NULL;
void insertAtBeginning(int value) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    head = newNode;
}`,
          description: 'Dynamic data structure with nodes containing data and pointer to next node.',
          visualization: 'Nodes connected with arrows'
        },
        'doubly-linked': {
          title: 'Doubly Linked List',
          complexity: 'O(1) insertion/deletion, O(n) search',
          srinjan: `CREATE DOUBLY LINKED LIST dList
ADD TO BEGINNING dList VALUE 10
ADD TO END dList VALUE 20
ADD AFTER dList.head VALUE 15
TRAVERSE FORWARD dList
TRAVERSE BACKWARD dList
REMOVE NODE dList.head.next`,
          c: `struct DNode {
    int data;
    struct DNode* next;
    struct DNode* prev;
};`,
          description: 'Linked list with bidirectional traversal capability.',
          visualization: 'Nodes with forward and backward pointers'
        },
        'circular-linked': {
          title: 'Circular Linked List',
          complexity: 'O(1) insertion, O(n) traversal',
          srinjan: `CREATE CIRCULAR LINKED LIST cList
ADD TO CIRCLE cList VALUE 10
ADD TO CIRCLE cList VALUE 20
ADD TO CIRCLE cList VALUE 30
TRAVERSE CIRCLE cList TIMES 2
DISPLAY "Is circular: " + IS CIRCULAR cList`,
          c: `struct Node* tail = NULL;
void insertInCircular(int value) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = value;
    if(tail == NULL) {
        tail = newNode;
        newNode->next = newNode;
    } else {
        newNode->next = tail->next;
        tail->next = newNode;
        tail = newNode;
    }
}`,
          description: 'Linked list where last node points back to first node.',
          visualization: 'Circular connection of nodes'
        }
      }
    },
    stacks: {
      name: 'Stacks',
      icon: '📚',
      topics: {
        'basic-operations': {
          title: 'Stack Operations',
          complexity: 'O(1) for all operations',
          srinjan: `CREATE STACK myStack
PUSH myStack VALUE 10
PUSH myStack VALUE 20
PUSH myStack VALUE 30
DISPLAY TOP OF myStack
POP myStack
DISPLAY TOP OF myStack
DISPLAY "Stack size: " + SIZE OF myStack
DISPLAY "Is empty: " + IS EMPTY myStack
DISPLAY "Is full: " + IS FULL myStack`,
          c: `#define MAX 100
int stack[MAX];
int top = -1;
void push(int value) {
    if(top < MAX-1) stack[++top] = value;
}
int pop() {
    if(top >= 0) return stack[top--];
    return -1;
}
int peek() {
    if(top >= 0) return stack[top];
    return -1;
}`,
          description: 'LIFO (Last In First Out) data structure with push, pop, and peek operations.',
          visualization: 'Vertical stack with top pointer'
        },
        'expression-evaluation': {
          title: 'Expression Evaluation',
          complexity: 'O(n) time, O(n) space',
          srinjan: `DEFINE FUNCTION evaluateExpression(expression)
  CREATE STACK operands
  CREATE STACK operators
  
  REPEAT FOR each character IN expression
    IF character IS NUMBER
      PUSH operands VALUE character
    OTHERWISE IF character IS OPERATOR
      REPEAT WHILE NOT EMPTY operators AND PRECEDENCE OF TOP operators >= PRECEDENCE OF character
        CALCULATE result = APPLY TOP operators TO TOP operands
        PUSH operands VALUE result
      END REPEAT
      PUSH operators VALUE character
    END IF
  END REPEAT
  
  RETURN TOP OF operands
END FUNCTION`,
          c: `int evaluateExpression(char* exp) {
    stack<int> operands;
    stack<char> operators;
    // Implementation details...
}`,
          description: 'Use stacks to evaluate mathematical expressions with proper operator precedence.',
          visualization: 'Two stacks for operands and operators'
        },
        'balanced-parentheses': {
          title: 'Balanced Parentheses',
          complexity: 'O(n) time, O(n) space',
          srinjan: `DEFINE FUNCTION isBalanced(expression)
  CREATE STACK brackets
  
  REPEAT FOR each character IN expression
    IF character IS OPENING BRACKET
      PUSH brackets VALUE character
    OTHERWISE IF character IS CLOSING BRACKET
      IF IS EMPTY brackets
        RETURN FALSE
      END IF
      IF NOT MATCHES TOP brackets WITH character
        RETURN FALSE
      END IF
      POP brackets
    END IF
  END REPEAT
  
  RETURN IS EMPTY brackets
END FUNCTION`,
          c: `bool isBalanced(char* str) {
    stack<char> s;
    for(int i = 0; str[i]; i++) {
        if(str[i] == '(' || str[i] == '[' || str[i] == '{')
            s.push(str[i]);
        else if(str[i] == ')' || str[i] == ']' || str[i] == '}') {
            if(s.empty()) return false;
            char top = s.top(); s.pop();
            if(!isMatching(top, str[i])) return false;
        }
    }
    return s.empty();
}`,
          description: 'Check if brackets/parentheses are properly balanced using stack.',
          visualization: 'Stack tracking opening brackets'
        }
      }
    },
    queues: {
      name: 'Queues',
      icon: '🚶‍♂️',
      topics: {
        'basic-operations': {
          title: 'Queue Operations',
          complexity: 'O(1) for all operations',
          srinjan: `CREATE QUEUE myQueue
ENQUEUE myQueue VALUE 10
ENQUEUE myQueue VALUE 20
ENQUEUE myQueue VALUE 30
DISPLAY FRONT OF myQueue
DISPLAY REAR OF myQueue
DEQUEUE myQueue
DISPLAY FRONT OF myQueue
DISPLAY "Queue size: " + SIZE OF myQueue
DISPLAY "Is empty: " + IS EMPTY myQueue`,
          c: `#define MAX 100
int queue[MAX];
int front = 0, rear = -1, size = 0;
void enqueue(int value) {
    if(size < MAX) {
        rear = (rear + 1) % MAX;
        queue[rear] = value;
        size++;
    }
}
int dequeue() {
    if(size > 0) {
        int value = queue[front];
        front = (front + 1) % MAX;
        size--;
        return value;
    }
    return -1;
}`,
          description: 'FIFO (First In First Out) data structure with enqueue and dequeue operations.',
          visualization: 'Horizontal queue with front and rear pointers'
        },
        'circular-queue': {
          title: 'Circular Queue',
          complexity: 'O(1) for all operations',
          srinjan: `CREATE CIRCULAR QUEUE cQueue SIZE 5
ENQUEUE cQueue VALUE 10
ENQUEUE cQueue VALUE 20
ENQUEUE cQueue VALUE 30
DISPLAY "Is full: " + IS FULL cQueue
DEQUEUE cQueue
ENQUEUE cQueue VALUE 40
DISPLAY ALL cQueue`,
          c: `typedef struct {
    int* data;
    int front, rear, size, capacity;
} CircularQueue;
void enqueue(CircularQueue* q, int value) {
    if(q->size < q->capacity) {
        q->rear = (q->rear + 1) % q->capacity;
        q->data[q->rear] = value;
        q->size++;
    }
}`,
          description: 'Efficient queue implementation using circular array.',
          visualization: 'Circular array with wraparound'
        },
        'priority-queue': {
          title: 'Priority Queue',
          complexity: 'O(log n) insertion, O(log n) deletion',
          srinjan: `CREATE PRIORITY QUEUE pQueue
INSERT pQueue VALUE 10 PRIORITY 2
INSERT pQueue VALUE 20 PRIORITY 1
INSERT pQueue VALUE 30 PRIORITY 3
DISPLAY HIGHEST PRIORITY pQueue
REMOVE HIGHEST PRIORITY pQueue
DISPLAY HIGHEST PRIORITY pQueue`,
          c: `typedef struct {
    int data, priority;
} PQNode;
typedef struct {
    PQNode* heap;
    int size, capacity;
} PriorityQueue;`,
          description: 'Queue where elements are served based on priority rather than insertion order.',
          visualization: 'Heap-based priority structure'
        },
        'deque': {
          title: 'Double-Ended Queue',
          complexity: 'O(1) for all operations',
          srinjan: `CREATE DEQUE myDeque
ADD TO FRONT myDeque VALUE 10
ADD TO REAR myDeque VALUE 20
ADD TO FRONT myDeque VALUE 5
DISPLAY FRONT OF myDeque
DISPLAY REAR OF myDeque
REMOVE FROM FRONT myDeque
REMOVE FROM REAR myDeque`,
          c: `typedef struct DequeNode {
    int data;
    struct DequeNode* next;
    struct DequeNode* prev;
} DequeNode;
typedef struct {
    DequeNode* front;
    DequeNode* rear;
    int size;
} Deque;`,
          description: 'Queue allowing insertion and deletion from both ends.',
          visualization: 'Double-ended structure'
        }
      }
    },
    trees: {
      name: 'Trees',
      icon: '🌳',
      topics: {
        'binary-tree': {
          title: 'Binary Tree',
          complexity: 'O(log n) average, O(n) worst',
          srinjan: `CREATE BINARY TREE myTree
SET ROOT myTree VALUE 10
ADD LEFT CHILD TO myTree.root VALUE 5
ADD RIGHT CHILD TO myTree.root VALUE 15
ADD LEFT CHILD TO myTree.root.left VALUE 3
ADD RIGHT CHILD TO myTree.root.left VALUE 7
TRAVERSE INORDER myTree
TRAVERSE PREORDER myTree
TRAVERSE POSTORDER myTree
DISPLAY HEIGHT OF myTree`,
          c: `struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};
void inorderTraversal(struct TreeNode* root) {
    if(root != NULL) {
        inorderTraversal(root->left);
        printf("%d ", root->data);
        inorderTraversal(root->right);
    }
}`,
          description: 'Hierarchical data structure with each node having at most two children.',
          visualization: 'Tree structure with parent-child relationships'
        },
        'bst': {
          title: 'Binary Search Tree',
          complexity: 'O(log n) average operations',
          srinjan: `CREATE BST myBST
INSERT myBST VALUE 50
INSERT myBST VALUE 30
INSERT myBST VALUE 70
INSERT myBST VALUE 20
INSERT myBST VALUE 40
SEARCH myBST VALUE 30
DELETE myBST VALUE 20
DISPLAY MIN VALUE myBST
DISPLAY MAX VALUE myBST
TRAVERSE INORDER myBST`,
          c: `struct BSTNode* insert(struct BSTNode* root, int value) {
    if(root == NULL) {
        struct BSTNode* newNode = malloc(sizeof(struct BSTNode));
        newNode->data = value;
        newNode->left = newNode->right = NULL;
        return newNode;
    }
    if(value < root->data)
        root->left = insert(root->left, value);
    else if(value > root->data)
        root->right = insert(root->right, value);
    return root;
}`,
          description: 'Binary tree with left subtree < root < right subtree property.',
          visualization: 'Ordered binary tree structure'
        },
        'avl-tree': {
          title: 'AVL Tree',
          complexity: 'O(log n) guaranteed for all operations',
          srinjan: `CREATE AVL TREE avlTree
INSERT avlTree VALUE 10
INSERT avlTree VALUE 20
INSERT avlTree VALUE 30
DISPLAY "Tree is balanced: " + IS BALANCED avlTree
DISPLAY HEIGHT OF avlTree
ROTATE LEFT avlTree.root
ROTATE RIGHT avlTree.root`,
          c: `struct AVLNode {
    int data, height;
    struct AVLNode* left;
    struct AVLNode* right;
};
int getBalance(struct AVLNode* node) {
    if(node == NULL) return 0;
    return getHeight(node->left) - getHeight(node->right);
}`,
          description: 'Self-balancing binary search tree with height difference ≤ 1.',
          visualization: 'Balanced tree with rotation operations'
        },
        'heap': {
          title: 'Heap',
          complexity: 'O(log n) insertion, O(log n) deletion',
          srinjan: `CREATE MAX HEAP maxHeap
INSERT maxHeap VALUE 10
INSERT maxHeap VALUE 20
INSERT maxHeap VALUE 15
INSERT maxHeap VALUE 30
DISPLAY MAX VALUE maxHeap
EXTRACT MAX maxHeap
HEAPIFY maxHeap
DISPLAY ALL maxHeap`,
          c: `void maxHeapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;
    if(left < n && arr[left] > arr[largest])
        largest = left;
    if(right < n && arr[right] > arr[largest])
        largest = right;
    if(largest != i) {
        swap(&arr[i], &arr[largest]);
        maxHeapify(arr, n, largest);
    }
}`,
          description: 'Complete binary tree satisfying heap property (max/min).',
          visualization: 'Complete binary tree with heap property'
        },
        'trie': {
          title: 'Trie (Prefix Tree)',
          complexity: 'O(m) where m is key length',
          srinjan: `CREATE TRIE wordTrie
INSERT wordTrie WORD "hello"
INSERT wordTrie WORD "help"
INSERT wordTrie WORD "hero"
SEARCH wordTrie WORD "help"
DISPLAY "Has prefix 'he': " + HAS PREFIX wordTrie "he"
DELETE wordTrie WORD "help"
DISPLAY ALL WORDS wordTrie`,
          c: `struct TrieNode {
    struct TrieNode* children[26];
    bool isEndOfWord;
};
void insert(struct TrieNode* root, char* word) {
    struct TrieNode* current = root;
    for(int i = 0; word[i]; i++) {
        int index = word[i] - 'a';
        if(!current->children[index])
            current->children[index] = createNode();
        current = current->children[index];
    }
    current->isEndOfWord = true;
}`,
          description: 'Tree for efficient string storage and prefix-based operations.',
          visualization: 'Tree with character-based branching'
        }
      }
    },
    graphs: {
      name: 'Graphs',
      icon: '🕸️',
      topics: {
        'representation': {
          title: 'Graph Representation',
          complexity: 'O(V²) adjacency matrix, O(V+E) adjacency list',
          srinjan: `CREATE GRAPH myGraph
ADD VERTEX myGraph VALUE "A"
ADD VERTEX myGraph VALUE "B"
ADD VERTEX myGraph VALUE "C"
ADD EDGE myGraph FROM "A" TO "B" WEIGHT 5
ADD EDGE myGraph FROM "B" TO "C" WEIGHT 3
ADD EDGE myGraph FROM "A" TO "C" WEIGHT 8
DISPLAY ADJACENCY MATRIX myGraph
DISPLAY ADJACENCY LIST myGraph`,
          c: `// Adjacency Matrix
int adjMatrix[MAX_VERTICES][MAX_VERTICES];
// Adjacency List
struct AdjListNode {
    int dest;
    int weight;
    struct AdjListNode* next;
};
struct Graph {
    int numVertices;
    struct AdjListNode** adjLists;
};`,
          description: 'Different ways to represent graphs: adjacency matrix and adjacency list.',
          visualization: 'Matrix and linked list representations'
        },
        'bfs': {
          title: 'Breadth-First Search',
          complexity: 'O(V + E) time, O(V) space',
          srinjan: `DEFINE FUNCTION BFS(graph, startVertex)
  CREATE QUEUE bfsQueue
  CREATE ARRAY visited SIZE graph.vertices
  
  ENQUEUE bfsQueue VALUE startVertex
  MARK visited[startVertex] AS TRUE
  
  REPEAT WHILE NOT EMPTY bfsQueue
    CALCULATE current = DEQUEUE bfsQueue
    DISPLAY current
    
    REPEAT FOR each neighbor OF current
      IF NOT visited[neighbor]
        MARK visited[neighbor] AS TRUE
        ENQUEUE bfsQueue VALUE neighbor
      END IF
    END REPEAT
  END REPEAT
END FUNCTION`,
          c: `void BFS(struct Graph* graph, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    queue<int> q;
    
    visited[startVertex] = true;
    q.push(startVertex);
    
    while(!q.empty()) {
        int current = q.front();
        q.pop();
        printf("%d ", current);
        
        struct AdjListNode* temp = graph->adjLists[current];
        while(temp) {
            if(!visited[temp->dest]) {
                visited[temp->dest] = true;
                q.push(temp->dest);
            }
            temp = temp->next;
        }
    }
}`,
          description: 'Level-by-level graph traversal using queue.',
          visualization: 'Level-wise exploration pattern'
        },
        'dfs': {
          title: 'Depth-First Search',
          complexity: 'O(V + E) time, O(V) space',
          srinjan: `DEFINE FUNCTION DFS(graph, vertex, visited)
  MARK visited[vertex] AS TRUE
  DISPLAY vertex
  
  REPEAT FOR each neighbor OF vertex
    IF NOT visited[neighbor]
      CALL DFS(graph, neighbor, visited)
    END IF
  END REPEAT
END FUNCTION

CREATE ARRAY visited SIZE graph.vertices
CALL DFS(myGraph, startVertex, visited)`,
          c: `void DFS(struct Graph* graph, int vertex, bool visited[]) {
    visited[vertex] = true;
    printf("%d ", vertex);
    
    struct AdjListNode* temp = graph->adjLists[vertex];
    while(temp) {
        if(!visited[temp->dest])
            DFS(graph, temp->dest, visited);
        temp = temp->next;
    }
}`,
          description: 'Deep exploration of graph using recursion or stack.',
          visualization: 'Deep path exploration pattern'
        },
        'dijkstra': {
          title: 'Dijkstra\'s Algorithm',
          complexity: 'O((V + E) log V) with priority queue',
          srinjan: `DEFINE FUNCTION dijkstra(graph, source)
  CREATE ARRAY distance SIZE graph.vertices
  CREATE PRIORITY QUEUE pq
  
  REPEAT FOR i FROM 0 TO graph.vertices - 1
    SET distance[i] = INFINITY
  END REPEAT
  SET distance[source] = 0
  
  INSERT pq VALUE source PRIORITY 0
  
  REPEAT WHILE NOT EMPTY pq
    CALCULATE current = EXTRACT MIN pq
    
    REPEAT FOR each neighbor OF current
      CALCULATE newDistance = distance[current] + WEIGHT(current, neighbor)
      IF newDistance < distance[neighbor]
        SET distance[neighbor] = newDistance
        INSERT pq VALUE neighbor PRIORITY newDistance
      END IF
    END REPEAT
  END REPEAT
  
  RETURN distance
END FUNCTION`,
          c: `void dijkstra(struct Graph* graph, int src) {
    int dist[MAX_VERTICES];
    bool visited[MAX_VERTICES];
    
    for(int i = 0; i < graph->numVertices; i++) {
        dist[i] = INT_MAX;
        visited[i] = false;
    }
    dist[src] = 0;
    
    for(int count = 0; count < graph->numVertices - 1; count++) {
        int u = minDistance(dist, visited, graph->numVertices);
        visited[u] = true;
        
        for(int v = 0; v < graph->numVertices; v++) {
            if(!visited[v] && graph->adjMatrix[u][v] && 
               dist[u] != INT_MAX && 
               dist[u] + graph->adjMatrix[u][v] < dist[v])
                dist[v] = dist[u] + graph->adjMatrix[u][v];
        }
    }
}`,
          description: 'Find shortest paths from source to all vertices in weighted graph.',
          visualization: 'Shortest path tree construction'
        },
        'topological-sort': {
          title: 'Topological Sort',
          complexity: 'O(V + E) time',
          srinjan: `DEFINE FUNCTION topologicalSort(graph)
  CREATE STACK topoStack
  CREATE ARRAY visited SIZE graph.vertices
  
  REPEAT FOR i FROM 0 TO graph.vertices - 1
    IF NOT visited[i]
      CALL topologicalSortUtil(graph, i, visited, topoStack)
    END IF
  END REPEAT
  
  REPEAT WHILE NOT EMPTY topoStack
    DISPLAY POP topoStack
  END REPEAT
END FUNCTION

DEFINE FUNCTION topologicalSortUtil(graph, vertex, visited, stack)
  MARK visited[vertex] AS TRUE
  
  REPEAT FOR each neighbor OF vertex
    IF NOT visited[neighbor]
      CALL topologicalSortUtil(graph, neighbor, visited, stack)
    END IF
  END REPEAT
  
  PUSH stack VALUE vertex
END FUNCTION`,
          c: `void topologicalSortUtil(struct Graph* graph, int v, bool visited[], stack<int>& Stack) {
    visited[v] = true;
    
    struct AdjListNode* temp = graph->adjLists[v];
    while(temp) {
        if(!visited[temp->dest])
            topologicalSortUtil(graph, temp->dest, visited, Stack);
        temp = temp->next;
    }
    
    Stack.push(v);
}`,
          description: 'Linear ordering of vertices in directed acyclic graph.',
          visualization: 'Dependency-based ordering'
        }
      }
    },
    hashing: {
      name: 'Hashing',
      icon: '🔐',
      topics: {
        'hash-table': {
          title: 'Hash Table',
          complexity: 'O(1) average, O(n) worst case',
          srinjan: `CREATE HASH TABLE hashTable SIZE 10
INSERT hashTable KEY "name" VALUE "John"
INSERT hashTable KEY "age" VALUE 25
INSERT hashTable KEY "city" VALUE "NYC"
DISPLAY GET hashTable KEY "name"
UPDATE hashTable KEY "age" VALUE 26
DELETE hashTable KEY "city"
DISPLAY "Contains key 'name': " + CONTAINS hashTable KEY "name"`,
          c: `#define TABLE_SIZE 10
struct HashNode {
    char* key;
    int value;
    struct HashNode* next;
};
struct HashTable {
    struct HashNode* table[TABLE_SIZE];
};
int hash(char* key) {
    int hash = 0;
    for(int i = 0; key[i]; i++)
        hash = (hash + key[i]) % TABLE_SIZE;
    return hash;
}`,
          description: 'Data structure for fast key-value storage and retrieval.',
          visualization: 'Array with hash function mapping'
        },
        'collision-handling': {
          title: 'Collision Handling',
          complexity: 'Depends on method used',
          srinjan: `CREATE HASH TABLE WITH CHAINING chainTable SIZE 7
CREATE HASH TABLE WITH LINEAR PROBING probeTable SIZE 7

INSERT chainTable KEY "apple" VALUE 10
INSERT chainTable KEY "banana" VALUE 20
INSERT probeTable KEY "apple" VALUE 10
INSERT probeTable KEY "banana" VALUE 20

DISPLAY "Chaining collisions: " + COLLISION COUNT chainTable
DISPLAY "Probing collisions: " + COLLISION COUNT probeTable`,
          c: `// Chaining
struct ChainNode {
    char* key;
    int value;
    struct ChainNode* next;
};

// Linear Probing
struct ProbeTable {
    char* keys[TABLE_SIZE];
    int values[TABLE_SIZE];
    bool occupied[TABLE_SIZE];
};`,
          description: 'Methods to handle hash collisions: chaining and open addressing.',
          visualization: 'Different collision resolution strategies'
        }
      }
    },
    sorting: {
      name: 'Sorting',
      icon: '📈',
      topics: {
        'bubble-sort': {
          title: 'Bubble Sort',
          complexity: 'O(n²) time, O(1) space',
          srinjan: `DEFINE FUNCTION bubbleSort(arr)
  REPEAT FOR i FROM 0 TO SIZE OF arr - 1
    REPEAT FOR j FROM 0 TO SIZE OF arr - i - 2
      IF arr[j] > arr[j + 1]
        SWAP arr[j] WITH arr[j + 1]
      END IF
    END REPEAT
  END REPEAT
END FUNCTION

CREATE ARRAY data VALUES [64, 34, 25, 12, 22, 11, 90]
CALL bubbleSort(data)
DISPLAY "Sorted array: " + data`,
          c: `void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n-1; i++) {
        for(int j = 0; j < n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}`,
          description: 'Simple sorting by repeatedly swapping adjacent elements.',
          visualization: 'Bubbling larger elements to the end'
        },
        'quick-sort': {
          title: 'Quick Sort',
          complexity: 'O(n log n) average, O(n²) worst',
          srinjan: `DEFINE FUNCTION quickSort(arr, low, high)
  IF low < high
    CALCULATE pivot = CALL partition(arr, low, high)
    CALL quickSort(arr, low, pivot - 1)
    CALL quickSort(arr, pivot + 1, high)
  END IF
END FUNCTION

DEFINE FUNCTION partition(arr, low, high)
  CALCULATE pivot = arr[high]
  CALCULATE i = low - 1
  
  REPEAT FOR j FROM low TO high - 1
    IF arr[j] < pivot
      INCREMENT i
      SWAP arr[i] WITH arr[j]
    END IF
  END REPEAT
  
  SWAP arr[i + 1] WITH arr[high]
  RETURN i + 1
END FUNCTION`,
          c: `void quickSort(int arr[], int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for(int j = low; j <= high - 1; j++) {
        if(arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}`,
          description: 'Efficient divide-and-conquer sorting algorithm.',
          visualization: 'Partitioning around pivot element'
        },
        'merge-sort': {
          title: 'Merge Sort',
          complexity: 'O(n log n) time, O(n) space',
          srinjan: `DEFINE FUNCTION mergeSort(arr, left, right)
  IF left < right
    CALCULATE mid = (left + right) / 2
    CALL mergeSort(arr, left, mid)
    CALL mergeSort(arr, mid + 1, right)
    CALL merge(arr, left, mid, right)
  END IF
END FUNCTION

DEFINE FUNCTION merge(arr, left, mid, right)
  CREATE TEMP ARRAY leftArr SIZE mid - left + 1
  CREATE TEMP ARRAY rightArr SIZE right - mid
  
  COPY arr[left...mid] TO leftArr
  COPY arr[mid+1...right] TO rightArr
  
  MERGE leftArr AND rightArr BACK TO arr[left...right]
END FUNCTION`,
          c: `void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    
    for(int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for(int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    
    int i = 0, j = 0, k = l;
    while(i < n1 && j < n2) {
        if(L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }
}`,
          description: 'Stable divide-and-conquer sorting with guaranteed O(n log n).',
          visualization: 'Dividing and merging sorted subarrays'
        },
        'heap-sort': {
          title: 'Heap Sort',
          complexity: 'O(n log n) time, O(1) space',
          srinjan: `DEFINE FUNCTION heapSort(arr)
  CALCULATE n = SIZE OF arr
  
  // Build max heap
  REPEAT FOR i FROM n/2 - 1 DOWN TO 0
    CALL heapify(arr, n, i)
  END REPEAT
  
  // Extract elements from heap
  REPEAT FOR i FROM n - 1 DOWN TO 1
    SWAP arr[0] WITH arr[i]
    CALL heapify(arr, i, 0)
  END REPEAT
END FUNCTION

DEFINE FUNCTION heapify(arr, n, i)
  CALCULATE largest = i
  CALCULATE left = 2 * i + 1
  CALCULATE right = 2 * i + 2
  
  IF left < n AND arr[left] > arr[largest]
    SET largest = left
  END IF
  
  IF right < n AND arr[right] > arr[largest]
    SET largest = right
  END IF
  
  IF largest != i
    SWAP arr[i] WITH arr[largest]
    CALL heapify(arr, n, largest)
  END IF
END FUNCTION`,
          c: `void heapSort(int arr[], int n) {
    for(int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
    for(int i = n - 1; i >= 0; i--) {
        swap(&arr[0], &arr[i]);
        heapify(arr, i, 0);
    }
}
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    
    if(l < n && arr[l] > arr[largest])
        largest = l;
    if(r < n && arr[r] > arr[largest])
        largest = r;
    
    if(largest != i) {
        swap(&arr[i], &arr[largest]);
        heapify(arr, n, largest);
    }
}`,
          description: 'Sorting using heap data structure properties.',
          visualization: 'Building heap and extracting maximum'
        },
        'radix-sort': {
          title: 'Radix Sort',
          complexity: 'O(d × (n + k)) where d is digits',
          srinjan: `DEFINE FUNCTION radixSort(arr)
  CALCULATE max = FIND MAX arr
  
  REPEAT FOR exp FROM 1 WHILE max / exp > 0
    CALL countingSort(arr, exp)
    MULTIPLY exp BY 10
  END REPEAT
END FUNCTION

DEFINE FUNCTION countingSort(arr, exp)
  CREATE ARRAY output SIZE SIZE OF arr
  CREATE ARRAY count SIZE 10 FILLED WITH 0
  
  // Count occurrences of each digit
  REPEAT FOR i FROM 0 TO SIZE OF arr - 1
    INCREMENT count[(arr[i] / exp) % 10]
  END REPEAT
  
  // Change count[i] to actual position
  REPEAT FOR i FROM 1 TO 9
    ADD count[i - 1] TO count[i]
  END REPEAT
  
  // Build output array
  REPEAT FOR i FROM SIZE OF arr - 1 DOWN TO 0
    CALCULATE digit = (arr[i] / exp) % 10
    SET output[count[digit] - 1] = arr[i]
    DECREMENT count[digit]
  END REPEAT
  
  COPY output TO arr
END FUNCTION`,
          c: `void radixSort(int arr[], int n) {
    int max = getMax(arr, n);
    
    for(int exp = 1; max / exp > 0; exp *= 10)
        countSort(arr, n, exp);
}
void countSort(int arr[], int n, int exp) {
    int output[n];
    int count[10] = {0};
    
    for(int i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    
    for(int i = 1; i < 10; i++)
        count[i] += count[i - 1];
    
    for(int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    for(int i = 0; i < n; i++)
        arr[i] = output[i];
}`,
          description: 'Non-comparative sorting for integers using digit-by-digit sorting.',
          visualization: 'Sorting by individual digit positions'
        }
      }
    },
    'dynamic-programming': {
      name: 'Dynamic Programming',
      icon: '🧩',
      topics: {
        'fibonacci': {
          title: 'Fibonacci Sequence',
          complexity: 'O(n) time, O(n) space with memoization',
          srinjan: `DEFINE FUNCTION fibonacci(n)
  CREATE ARRAY memo SIZE n + 1 FILLED WITH -1
  RETURN CALL fibonacciMemo(n, memo)
END FUNCTION

DEFINE FUNCTION fibonacciMemo(n, memo)
  IF n <= 1
    RETURN n
  END IF
  
  IF memo[n] != -1
    RETURN memo[n]
  END IF
  
  SET memo[n] = CALL fibonacciMemo(n - 1, memo) + CALL fibonacciMemo(n - 2, memo)
  RETURN memo[n]
END FUNCTION

// Bottom-up approach
DEFINE FUNCTION fibonacciDP(n)
  CREATE ARRAY dp SIZE n + 1
  SET dp[0] = 0
  SET dp[1] = 1
  
  REPEAT FOR i FROM 2 TO n
    SET dp[i] = dp[i - 1] + dp[i - 2]
  END REPEAT
  
  RETURN dp[n]
END FUNCTION`,
          c: `int fibonacciMemo(int n, int memo[]) {
    if(n <= 1) return n;
    if(memo[n] != -1) return memo[n];
    memo[n] = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
    return memo[n];
}
int fibonacciDP(int n) {
    int dp[n+1];
    dp[0] = 0; dp[1] = 1;
    for(int i = 2; i <= n; i++)
        dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}`,
          description: 'Classic DP problem demonstrating memoization and tabulation.',
          visualization: 'Overlapping subproblems optimization'
        },
        'knapsack': {
          title: '0/1 Knapsack Problem',
          complexity: 'O(n × W) time and space',
          srinjan: `DEFINE FUNCTION knapsack(weights, values, capacity, n)
  CREATE 2D ARRAY dp SIZE (n + 1) x (capacity + 1)
  
  REPEAT FOR i FROM 0 TO n
    REPEAT FOR w FROM 0 TO capacity
      IF i == 0 OR w == 0
        SET dp[i][w] = 0
      OTHERWISE IF weights[i - 1] <= w
        SET dp[i][w] = MAX(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w]
        )
      OTHERWISE
        SET dp[i][w] = dp[i - 1][w]
      END IF
    END REPEAT
  END REPEAT
  
  RETURN dp[n][capacity]
END FUNCTION

CREATE ARRAY weights VALUES [10, 20, 30]
CREATE ARRAY values VALUES [60, 100, 120]
CALCULATE result = CALL knapsack(weights, values, 50, 3)
DISPLAY "Maximum value: " + result`,
          c: `int knapsack(int W, int wt[], int val[], int n) {
    int dp[n+1][W+1];
    
    for(int i = 0; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(i == 0 || w == 0)
                dp[i][w] = 0;
            else if(wt[i-1] <= w)
                dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }
    return dp[n][W];
}`,
          description: 'Optimize selection of items with weight and value constraints.',
          visualization: '2D table showing optimal choices'
        },
        'lcs': {
          title: 'Longest Common Subsequence',
          complexity: 'O(m × n) time and space',
          srinjan: `DEFINE FUNCTION LCS(text1, text2)
  CALCULATE m = LENGTH OF text1
  CALCULATE n = LENGTH OF text2
  CREATE 2D ARRAY dp SIZE (m + 1) x (n + 1)
  
  REPEAT FOR i FROM 0 TO m
    REPEAT FOR j FROM 0 TO n
      IF i == 0 OR j == 0
        SET dp[i][j] = 0
      OTHERWISE IF text1[i - 1] == text2[j - 1]
        SET dp[i][j] = dp[i - 1][j - 1] + 1
      OTHERWISE
        SET dp[i][j] = MAX(dp[i - 1][j], dp[i][j - 1])
      END IF
    END REPEAT
  END REPEAT
  
  RETURN dp[m][n]
END FUNCTION

CALCULATE result = CALL LCS("ABCDGH", "AEDFHR")
DISPLAY "LCS length: " + result`,
          c: `int LCS(char* X, char* Y, int m, int n) {
    int dp[m+1][n+1];
    
    for(int i = 0; i <= m; i++) {
        for(int j = 0; j <= n; j++) {
            if(i == 0 || j == 0)
                dp[i][j] = 0;
            else if(X[i-1] == Y[j-1])
                dp[i][j] = dp[i-1][j-1] + 1;
            else
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}`,
          description: 'Find longest subsequence common to two sequences.',
          visualization: 'Dynamic table building optimal solution'
        },
        'edit-distance': {
          title: 'Edit Distance (Levenshtein)',
          complexity: 'O(m × n) time and space',
          srinjan: `DEFINE FUNCTION editDistance(str1, str2)
  CALCULATE m = LENGTH OF str1
  CALCULATE n = LENGTH OF str2
  CREATE 2D ARRAY dp SIZE (m + 1) x (n + 1)
  
  // Initialize base cases
  REPEAT FOR i FROM 0 TO m
    SET dp[i][0] = i
  END REPEAT
  REPEAT FOR j FROM 0 TO n
    SET dp[0][j] = j
  END REPEAT
  
  REPEAT FOR i FROM 1 TO m
    REPEAT FOR j FROM 1 TO n
      IF str1[i - 1] == str2[j - 1]
        SET dp[i][j] = dp[i - 1][j - 1]
      OTHERWISE
        SET dp[i][j] = 1 + MIN(
          dp[i - 1][j],     // Delete
          dp[i][j - 1],     // Insert
          dp[i - 1][j - 1]  // Replace
        )
      END IF
    END REPEAT
  END REPEAT
  
  RETURN dp[m][n]
END FUNCTION`,
          c: `int editDistance(char* str1, char* str2, int m, int n) {
    int dp[m+1][n+1];
    
    for(int i = 0; i <= m; i++)
        dp[i][0] = i;
    for(int j = 0; j <= n; j++)
        dp[0][j] = j;
    
    for(int i = 1; i <= m; i++) {
        for(int j = 1; j <= n; j++) {
            if(str1[i-1] == str2[j-1])
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
        }
    }
    return dp[m][n];
}`,
          description: 'Minimum operations to transform one string to another.',
          visualization: 'Operations matrix showing transformations'
        }
      }
    },
    'advanced-structures': {
      name: 'Advanced Structures',
      icon: '🏗️',
      topics: {
        'segment-tree': {
          title: 'Segment Tree',
          complexity: 'O(log n) query and update',
          srinjan: `CREATE SEGMENT TREE segTree FROM ARRAY [1, 3, 5, 7, 9, 11]
QUERY segTree RANGE 1 TO 3
UPDATE segTree INDEX 1 VALUE 10
QUERY segTree RANGE 1 TO 3

DEFINE FUNCTION buildSegmentTree(arr, tree, node, start, end)
  IF start == end
    SET tree[node] = arr[start]
  OTHERWISE
    CALCULATE mid = (start + end) / 2
    CALL buildSegmentTree(arr, tree, 2 * node, start, mid)
    CALL buildSegmentTree(arr, tree, 2 * node + 1, mid + 1, end)
    SET tree[node] = tree[2 * node] + tree[2 * node + 1]
  END IF
END FUNCTION`,
          c: `void buildSegmentTree(int arr[], int tree[], int node, int start, int end) {
    if(start == end) {
        tree[node] = arr[start];
    } else {
        int mid = (start + end) / 2;
        buildSegmentTree(arr, tree, 2*node, start, mid);
        buildSegmentTree(arr, tree, 2*node+1, mid+1, end);
        tree[node] = tree[2*node] + tree[2*node+1];
    }
}
int query(int tree[], int node, int start, int end, int l, int r) {
    if(r < start || end < l) return 0;
    if(l <= start && end <= r) return tree[node];
    int mid = (start + end) / 2;
    return query(tree, 2*node, start, mid, l, r) + 
           query(tree, 2*node+1, mid+1, end, l, r);
}`,
          description: 'Tree for efficient range queries and updates.',
          visualization: 'Binary tree with range information'
        },
        'fenwick-tree': {
          title: 'Fenwick Tree (Binary Indexed Tree)',
          complexity: 'O(log n) update and prefix sum',
          srinjan: `CREATE FENWICK TREE fenwick SIZE 10
UPDATE fenwick INDEX 3 VALUE 5
UPDATE fenwick INDEX 7 VALUE 8
CALCULATE prefixSum = QUERY fenwick PREFIX 5
CALCULATE rangeSum = QUERY fenwick RANGE 2 TO 6

DEFINE FUNCTION updateFenwick(tree, index, value, n)
  REPEAT WHILE index <= n
    ADD value TO tree[index]
    ADD (index & -index) TO index
  END REPEAT
END FUNCTION

DEFINE FUNCTION queryFenwick(tree, index)
  CALCULATE sum = 0
  REPEAT WHILE index > 0
    ADD tree[index] TO sum
    SUBTRACT (index & -index) FROM index
  END REPEAT
  RETURN sum
END FUNCTION`,
          c: `void update(int BIT[], int n, int index, int val) {
    for(++index; index <= n; index += index & -index)
        BIT[index] += val;
}
int query(int BIT[], int index) {
    int sum = 0;
    for(++index; index > 0; index -= index & -index)
        sum += BIT[index];
    return sum;
}`,
          description: 'Efficient data structure for prefix sum queries.',
          visualization: 'Binary representation for range operations'
        },
        'disjoint-set': {
          title: 'Disjoint Set Union (Union-Find)',
          complexity: 'O(α(n)) amortized per operation',
          srinjan: `CREATE DISJOINT SET unionFind SIZE 10
UNION unionFind ELEMENT 1 WITH 2
UNION unionFind ELEMENT 3 WITH 4
UNION unionFind ELEMENT 2 WITH 4
DISPLAY "Are 1 and 3 connected: " + FIND unionFind ARE CONNECTED 1 AND 3

DEFINE FUNCTION makeSet(parent, rank, n)
  REPEAT FOR i FROM 0 TO n - 1
    SET parent[i] = i
    SET rank[i] = 0
  END REPEAT
END FUNCTION

DEFINE FUNCTION find(parent, x)
  IF parent[x] != x
    SET parent[x] = CALL find(parent, parent[x])  // Path compression
  END IF
  RETURN parent[x]
END FUNCTION

DEFINE FUNCTION union(parent, rank, x, y)
  CALCULATE rootX = CALL find(parent, x)
  CALCULATE rootY = CALL find(parent, y)
  
  IF rootX != rootY
    IF rank[rootX] < rank[rootY]
      SET parent[rootX] = rootY
    OTHERWISE IF rank[rootX] > rank[rootY]
      SET parent[rootY] = rootX
    OTHERWISE
      SET parent[rootY] = rootX
      INCREMENT rank[rootX]
    END IF
  END IF
END FUNCTION`,
          c: `int find(int parent[], int x) {
    if(parent[x] != x)
        parent[x] = find(parent, parent[x]);
    return parent[x];
}
void unionSets(int parent[], int rank[], int x, int y) {
    int rootX = find(parent, x);
    int rootY = find(parent, y);
    
    if(rootX != rootY) {
        if(rank[rootX] < rank[rootY])
            parent[rootX] = rootY;
        else if(rank[rootX] > rank[rootY])
            parent[rootY] = rootX;
        else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }
}`,
          description: 'Efficiently track connected components and perform union operations.',
          visualization: 'Forest of trees representing disjoint sets'
        }
      }
    }
  };

  const currentCategory = categories[selectedCategory as keyof typeof categories];
  const currentTopic = currentCategory.topics[selectedTopic as keyof typeof currentCategory.topics];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Category Sidebar */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          DSA Categories
        </h3>
        <div className="space-y-2">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key);
                setSelectedTopic(Object.keys(category.topics)[0]);
              }}
              className={`w-full text-left px-3 py-3 rounded-md transition-colors flex items-center ${
                selectedCategory === key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-lg mr-3">{category.icon}</span>
              <div>
                <div className="font-medium">{category.name}</div>
                <div className="text-xs opacity-75">{Object.keys(category.topics).length} topics</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Topic Sidebar */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-white mb-4">
          {currentCategory.name} Topics
        </h3>
        <div className="space-y-2">
          {Object.entries(currentCategory.topics).map(([key, topic]) => (
            <button
              key={key}
              onClick={() => setSelectedTopic(key)}
              className={`w-full text-left px-3 py-3 rounded-lg transition-colors flex items-center ${
                selectedTopic === key
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium truncate">{topic.title}</div>
                <div className="text-xs opacity-75 flex items-center mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  {topic.complexity}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{currentTopic.title}</h2>
              <p className="text-gray-300 mb-4">{currentTopic.description}</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <BarChart3 className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400">{currentTopic.complexity}</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-3 rounded-lg border border-blue-500/30">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-semibold">Natural Language</span>
              </div>
              <div className="text-white text-lg font-bold">Easy to Read</div>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 p-3 rounded-lg border border-purple-500/30">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-semibold">Readability</span>
              </div>
              <div className="text-white text-lg font-bold">Beginner Friendly</div>
            </div>
            <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-3 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold">Multilingual</span>
              </div>
              <div className="text-white text-lg font-bold">20+ Languages</div>
            </div>
          </div>
        </div>

        {/* Code Comparison */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* SRINJAN Code */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 px-4 py-3 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">SRINJAN Syntax</h3>
                <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition-colors text-sm">
                  <Play className="w-4 h-4" />
                  <span>Run Code</span>
                </button>
              </div>
            </div>
            <div className="p-4 bg-gray-900 max-h-96 overflow-y-auto">
              <pre className="text-indigo-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {currentTopic.srinjan}
              </pre>
            </div>
          </div>

          {/* C Code Comparison */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-3 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">C Equivalent</h3>
            </div>
            <div className="p-4 bg-gray-900 max-h-96 overflow-y-auto">
              <pre className="text-blue-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {currentTopic.c}
              </pre>
            </div>
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Visual Representation</h3>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="text-center text-gray-400">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">{currentCategory.icon}</span>
              </div>
              <p className="text-lg">{currentTopic.visualization}</p>
              <p className="text-sm mt-2 opacity-75">Interactive visualization coming soon!</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors">
              <Play className="w-4 h-4" />
              <span>Run Example</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors">
              <Code className="w-4 h-4" />
              <span>Edit Code</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Learn More</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg transition-colors">
              <Zap className="w-4 h-4" />
              <span>Benchmark</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};