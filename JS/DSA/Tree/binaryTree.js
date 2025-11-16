/**
 * ================================
 * 📘 Binary Tree Documentation
 * ================================
 * 
 * 1️⃣ What is a Binary Tree?
 * -------------------------
 * - A Binary Tree is a hierarchical data structure
 *   where each node has at most two children:
 *     • Left Child
 *     • Right Child
 * 
 * - Basic terms:
 *   • Node  → The building block where data is stored
 *   • Edge  → Connection between parent and child nodes
 *   • Root  → The topmost node of the tree (no parent)
 *   • Leaf  → Node with no children
 * 
 * - Difference from General Tree:
 *   • General Tree → A node can have many children
 *   • Binary Tree → Each node can have at most 2 children
 * 
 * -------------------------------
 * 2️⃣ Practical Applications
 * -------------------------------
 * - File Systems (hierarchical folder structure)
 * - Expression Evaluation (e.g., arithmetic expressions)
 * - Databases and Indexing (B-Trees, BSTs)
 * - Hierarchical Data Representation
 * - Priority Queues (Heaps)
 * - Routing Algorithms and Pathfinding
 * 
 * -------------------------------
 * 3️⃣ Characteristics
 * -------------------------------
 * - Hierarchical structure (parent → child)
 * - Recursive nature:
 *     • Each subtree is itself a binary tree
 * - Each node has:
 *     • Data
 *     • Left reference
 *     • Right reference
 * 
 * -------------------------------
 * 4️⃣ Binary Tree Implementation (Steps)
 * -------------------------------
 * - Create a `Node` class (stores data + left + right references)
 * - Create a `BinaryTree` class (manages root, insertions, traversals)
 * - Insert nodes (usually level-order: left → right)
 * - Traversals:
 *     • Inorder   (Left → Root → Right)
 *     • Preorder  (Root → Left → Right)
 *     • Postorder (Left → Right → Root)
 *     • Level-Order (Breadth-First Search)
 * 
 * -------------------------------
 * 5️⃣ Traversal Techniques
 * -------------------------------
 * 🔹 DFS (Depth-First Search)
 *    - Goes as deep as possible before backtracking
 *    - Variants:
 *        • Inorder
 *        • Preorder
 *        • Postorder
 *    - Implementation: recursion OR stack-based
 * 
 * 🔹 BFS (Breadth-First Search)
 *    - Visits nodes level by level
 *    - Implementation: uses a Queue (FIFO)
 * 
 * -------------------------------
 * 6️⃣ Where Used in JavaScript
 * -------------------------------
 * - Abstract Syntax Trees (ASTs) in compilers, Babel, ESLint, Webpack
 * - DOM traversal and manipulation in browsers
 * - Data visualization libraries (hierarchical charts, org charts)
 * - Algorithm practice (sorting, searching, recursion problems)
 * 
 * -------------------------------
 * 7️⃣ Where Used in Node.js
 * -------------------------------
 * - Abstract Syntax Trees (V8 engine, TypeScript compiler, Babel)
 * - Databases:
 *     • MongoDB, MySQL, PostgreSQL → internally use B-Trees/Binary Trees for indexing
 * - File System (fs module):
 *     • Directories and files are naturally hierarchical (tree structure)
 * - GraphQL:
 *     • Queries parsed into AST (tree structure) before execution
 * - Real-time applications:
 *     • Decision trees in AI (chatbots, games, recommendations)
 * - Job scheduling and priority queues (using Heaps)
 * 
 * -------------------------------
 * 8️⃣ Real-World Example
 * -------------------------------
 * - Expression Trees:
 *     • Used in compilers to evaluate arithmetic expressions
 * - File Systems:
 *     • Directories as nodes, sub-directories/files as children
 * - Search Trees:
 *     • BSTs for fast lookup and sorting
 * * ---------------------------------------------------------
 * ✅ Common Binary Tree Operations:
 * ---------------------------------------------------------
 * 1. Insertion:
 *    - Add a new node in the correct position.
 *    - In Binary Search Tree (BST), left < root < right.
 * 
 * 2. Deletion:
 *    - Remove a node and rearrange tree.
 *    - Cases:
 *        - Node is a leaf → remove directly
 *        - Node has one child → replace with child
 *        - Node has two children → replace with inorder successor/predecessor
 * 
 * 3. Searching:
 *    - Find if a value exists (O(log n) in BST, O(n) in general tree).
 * 
 * 4. Traversal:
 *    - DFS (Preorder, Inorder, Postorder)
 *    - BFS (Level Order)
 * 
 * 5. Height / Depth Calculation:
 *    - Height: longest path from root to leaf.
 *    - Depth: distance of a node from root.
 * 
 * 6. Counting:
 *    - Count total nodes, leaf nodes, non-leaf nodes.
 * 
 * 7. Path Finding:
 *    - Find path from root to a given node.
 * 
 * 8. Lowest Common Ancestor (LCA):
 *    - Find common parent of two nodes.
 * 
 * -------------------------------
 * 🌟 Why Learn Binary Trees?
 * -------------------------------
 * - Foundation of advanced structures:
 *     • Binary Search Trees (BSTs)
 *     • AVL Trees
 *     • Red-Black Trees
 *     • Heaps
 * - Improves understanding of recursion and hierarchical data
 * 
 * ================================
 */


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        console.log(this.root);
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  search(valueToSearch) {
    if (!this.root) {
      return false;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.value === valueToSearch) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    return false;
  }

  levelOrder() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.add(10);
binaryTree.add(20);
binaryTree.add(30);
binaryTree.add(40);
binaryTree.add(50);

console.log("Finding 20", binaryTree.search(20));
console.log("Finding 80", binaryTree.search(80));

console.log("Level order");
binaryTree.levelOrder();

console.log("Pre order");
binaryTree.preOrder();

console.log("In order");
binaryTree.inOrder();

console.log("Post order");
binaryTree.postOrder();