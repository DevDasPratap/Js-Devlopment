/**
 * ================================
 * 📘 Tree Data Structure Documentation
 * ================================
 * 
 * Problem Statement:
 * -----------------
 * How does a file system store its data?
 *  - Every folder can contain many folders/files
 *  - This creates a hierarchical structure
 * 
 * Example:
 *  - Amazon/Flipkart product categories
 *  - These also follow a hierarchical structure
 * 
 * What is a Tree Data Structure?
 * ------------------------------
 *  - Linear Data Structures:
 *      Organize data in a straight line (e.g., Array, Stack, Queue)
 *  - Non-Linear Data Structures:
 *      Organize data in branching structures (e.g., Tree, Graph)
 * 
 * Characteristics of a Tree:
 * --------------------------
 *  - Consists of nodes (data) connected by edges (relationships)
 *  - Represents parent-child relationships
 *  - Each node has exactly one parent (except the root) and can have multiple children
 *  - Recursive structure:
 *      • Each child node is itself a subtree
 *  - The topmost node is called the Root
 *  - Leaf nodes are nodes with no children
 * 
 * ================================
 * 🌲 Types of Trees
 * ================================
 * - Binary Tree:
 *   - Each node has at most two children (left and right)
 *   - The placement of nodes doesn’t follow any specific order
 * 
 * - Binary Search Tree (BST):
 *   - A binary tree with ordering rules:
 *     • Left child < Parent
 *     • Right child > Parent
 *   - Makes searching, insertion, and retrieval faster (O(log n) average case)
 * 
 * - AVL Tree:
 *   - A self-balancing Binary Search Tree
 *   - Rule: The difference between the heights of the left and right subtrees 
 *     of any node (called the Balance Factor) is at most 1
 *   - Ensures O(log n) operations
 * 
 * - Red-Black Tree:
 *   - Another self-balancing Binary Search Tree
 *   - Balances the tree using color properties (Red/Black)
 *   - Used in many libraries and languages (e.g., Java’s TreeMap, C++ STL map/set)
 * 
 * - Heap:
 *   - A specialized complete binary tree
 *   - Types:
 *     • Min-Heap: Parent <= Children
 *     • Max-Heap: Parent >= Children
 *   - Commonly used in Priority Queues and Heap Sort
 * 
 * - Trie:
 *   - A specialized tree used for storing strings
 *   - Each level represents a character
 *   - Useful for prefix-based searching (autocomplete, spell check, search engines)
 * 
 * - Segment Tree:
 *   - Used for range queries (sum, min, max) and updates in arrays
 *   - Common in competitive programming
 * 
 * - B-Tree and B+ Tree:
 *   - Self-balancing search trees used in databases and file systems
 *   - Optimized for disk-based storage and indexing
 * 
 * ================================
 * 🔄 Tree Traversal Techniques
 * ================================
 * Traversal = visiting all nodes in a specific order
 * 
 * 1️⃣ Depth First Search (DFS)
 * ----------------------------
 * - Explores as deep as possible before backtracking
 * - Implemented via Recursion OR Stack
 * - Types:
 *   • Pre-order  (Root → Left → Right)
 *   • In-order   (Left → Root → Right)
 *   • Post-order (Left → Right → Root)
 * 
 * 2️⃣ Breadth First Search (BFS)
 * ------------------------------
 * - Also called Level Order Traversal
 * - Visits nodes level by level
 * - Implemented via Queue (FIFO)
 * 
 * ================================
 * ⚙️ Common Tree Operations
 * ================================
 * 1. Insertion → Add a new node
 * 2. Deletion → Remove a node (with 0, 1, or 2 children)
 * 3. Searching → Find a value (efficient in BST)
 * 4. Traversal → DFS (Pre, In, Post), BFS (Level Order)
 * 5. Height/Depth → Longest path from root to leaf
 * 6. Counting → Total nodes, leaves, non-leaves
 * 7. Path Finding → Root to any node
 * 8. Lowest Common Ancestor (LCA) → Shared parent of two nodes
 * 9. Balancing → Maintain optimal height (AVL, Red-Black)
 * 
 * ================================
 * 📌 Where Trees Are Used
 * ================================
 * - File Systems: Directory and file organization
 * - Databases: B-Tree / B+ Tree for indexing
 * - Web Applications: DOM (Document Object Model) is a tree
 * - Networking: Spanning Tree Protocol in routing algorithms
 * - Compilers: Parse trees and Abstract Syntax Trees
 * - Search Engines: Tries for autocomplete and search suggestions
 * - Operating Systems: Process scheduling trees, memory management
 * - AI/ML: Decision Trees, Game Trees
 */

/**
 * Key terminologies:
 *  - Node: A data element in the tree
 *  - Root: the topmost node in the tree
 *  - Parent and child: A parent is a node with children, a child is a node connected below a parent.
 *  - Leaf node: a node with no children
 *  - Edge: A connection between two nodes
 *  - Height: The number of edges on the longest path from the root to a leaf
 */