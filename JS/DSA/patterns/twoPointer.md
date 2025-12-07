# 🧭 Two Pointers Pattern — Complete Guide

The **Two Pointers** pattern is one of the most powerful algorithmic techniques used to optimize array, string, and linked list problems.  
It typically helps reduce **O(n²)** brute-force solutions to **O(n)** or **O(n log n)**.

## 📌 What Is the Two Pointers Technique?

Two Pointers involves using **two indices** (`left`, `right`, `fast`, `slow`) that traverse a data structure based on specific rules.

The pattern helps:
- Solve pair, triplet, and subarray problems efficiently  
- Process sorted data  
- Perform in-place array operations  
- Traverse linked lists optimally  

## 🎯 When to Use Two Pointers?

### ✔ Use on Arrays / Strings When:
- Data is **sorted**
- You can sort the data before processing
- You need to:
  - Find **pairs**, **triplets**, **quadruplets**
  - Check **palindromes**
  - Compute **range/subarray** problems
  - **Merge** or **partition** data
  - **Remove duplicates**
  - **Rearrange** elements

### ✔ Use on Linked Lists When:
- Detecting cycles (**Floyd’s Cycle Detection**)
- Finding the **middle** of a linked list
- Removing **k-th node from end**
- Checking **palindrome** linked list
- Merging **two sorted lists**
- Reversing or reordering lists

## ⚙️ Types of Two Pointer Patterns

### 1️⃣ Opposite Direction Pointers
Both pointers start at opposite ends and move towards each other.

### 2️⃣ Same Direction (Fast–Slow Pointers)
Both pointers start at the beginning.  
`fast` moves first; `slow` follows.

### 3️⃣ Sliding Window (Dynamic Window)
Two pointers form a window that expands and contracts.

## 🧩 Typical Steps of Two Pointers

1. Initialize **two pointers**
2. Create the required **condition**
3. Move pointers depending on that condition
3. Update answer when needed
4. Stop when pointers cross or reach end

## 📘 LeetCode Problems Using Two Pointers

| # | Problem Name | Pattern | LeetCode |
|---|--------------|---------|----------|
| 1  | Remove Duplicates from Sorted Array | Fast–Slow | 26 |
| 2  | Two Sum II | Opposite | 167 |
| 3  | Move Zeroes | Fast–Slow | 283 |
| 4  | Reverse String | Opposite | 344 |
| 5  | Container With Most Water | Opposite | 11 |
| 6  | Valid Palindrome | Opposite | 125 |
| 7  | Squares of a Sorted Array | Opposite | 977 |
| 8  | Subarray Product Less Than K | Sliding Window | 713 |
| 9  | Remove Element | Fast–Slow | 27 |
| 10 | 3Sum | Sorted + Two Pointers | 15 |
| 11 | Sort Colors | 3 Pointers | 75 |
| 12 | Longest Substring Without Repeating Characters | Sliding Window | 3 |
| 13 | Minimum Size Subarray Sum | Sliding Window | 209 |
| 14 | Trapping Rain Water | Opposite | 42 |
| 15 | Longest Mountain in Array | Opposite + Scan | 845 |
| 16 | Valid Palindrome II | | 680 |

## ➕ Additional Two Pointer Problems

### Arrays
- Merge Sorted Arrays  
- Partition array  
- Remove adjacent duplicates  
- K closest elements  

### Linked Lists
- Reorder List  
- Palindrome Linked List  
- Cycle detection  
- Remove Nth node  

## 🧠 Summary

The Two Pointers Technique is essential for:
- Sorted array problems  
- Subarray problems  
- Linked list traversal  
- In-place modifications  

