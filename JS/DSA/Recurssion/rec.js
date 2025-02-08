/**
 * Print 1 to n without using loop
 * You are given an integer N. Print numbers from 1 to N
 * without the help of loops.
 * Input: N = 5 Output: 1 2 3 4 5
 * Explanation: We have to print numbers from 1 to 5.
 * https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops3621/1
 */

/**
 * Fibonacci Number
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each
 * number is the sum of the two preceding ones, starting from 0 and 1. That is, F(0)= 0, F(1)=1
 * F(n)= F(n-1) + F(n-2), for n>1 Given n, calculate F(n).
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
 * https://leetcode.com/problems/fibonacci-number/description/
 */

/**
 * Sum of digits
 * Given a number, N. Find the sum of all the digits of N
 * Input: N = 12 
 * Output: 3 
 * Explanation: Sum of 12's digits: 1 + 2 = 3
 * https://practice.geeksforgeeks.org/problems/sum-of-digits1742/1
 */

/**
 * Palindrome String
 * Given a string S, check if it is palindrome or not.
 * Input:S = "abba" 
 * Output: 1 
 * Explanation: S is a palindrome
 * https://practice.geeksforgeeks.org/problems/palindrome-string0817/1
 */

/**
 * Power of Two
 * Given an integer n, return true if it is a power of two otherwise return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2 x
 * Input: n = 1
 * Output: true
 * Explanation: 20 = 1
 * https://leetcode.com/problems/power-of-two/description/
 */


/**
 * Rope Cutting
 * You are given N ropes. A cut operation is performed on ropes such that all of them are reduced by the length of 
 * the smallest rope. Display the number of ropes left after 
 * every cut operation until the length of each rope is zero.
 * 
 * Input : arr[ ] = {5, 1, 1, 2, 3, 5} 
 * Output : 4 3 2 
 * Explanation: In the first operation, the minimum ropes are 1 So, we reduce length 1 from all of them
 * after reducing we left with 4 ropes and we do the same for rest.
 * https://practice.geeksforgeeks.org/problems/rope-cutting3334/1
 */

/**
 * Valid Parentheses
 * Given a string s containing just the characters '(', ')', '{', '}', 
 * '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Input: s = "()"
 * Output: true
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/**
 * Pow(x, n)
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x )
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 * https://leetcode.com/problems/powx-n/description/
 */

/**
 * Subsets
 * Given a set of positive integers, find all its subsets.
 * Input : 
 * array = {1, 2, 3} 
 * Output : 
 * this space denotes null element. 
 * 1 
 * 1 2 
 * 1 2 3 
 * 1 3 
 * 2 
 * 2 3
 * 3
 * 
 * Explanation: The following are the subsets of the array {1, 2, 3}. 
 * https://practice.geeksforgeeks.org/problems/subsets-1613027340/1
 */

/**
 * Subset Sum Problem
 * Given an array of non-negative integers, and a value sum, determine if there is a subset of the given set with 
 * sum equal to given sum.
 * Input: 
 * N = 6 
 * arr[] = {3, 34, 4, 12, 5, 2} 
 * sum = 9 
 * Output: 1 
 * Explanation: Here there exists a subset with sum = 9, 4+3+2 = 9.
 * https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1
 */

/**
 * Letter Combinations of a Phone Number
 * 
 * Given a string containing digits from 2-9 inclusive, return 
 * all possible letter combinations that the number could 
 * represent. Return the answer in any order.
 * 
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */

/**
 * Tower of Hanoi
 * 
 * The tower of Hanoi is a famous puzzle where we have 
 * three rods and N disks. The objective of the puzzle is to 
 * move the entire stack to another rod. You are given the
 * number of discs N. Initially, these discs are in the rod 1.
 * You need to print all the steps of discs movement so that
 * all the discs reach the 3rd rod. Also, you need to find the total moves.
 * 
 * Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N.
 * Also, all the discs have different sizes and a bigger disc
 * cannot be put on the top of a smaller disc. Refer the
 * provided link to get a better clarity about the puzzle.
 * 
 * Input: N = 2 
 * Output: 
 * move disk 1 from rod 1 to rod 2 
 * move disk 2 from rod 1 to rod 3 
 * move disk 1 from rod 2 to rod 3 3 
 * Explanation: For N=2 , steps will be as follows in the 
 * example and total 3 steps will be taken.
 * 
 * https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
 */

/**
 * Josephus Problem
 * 
 * Given the total number of persons n and a number k
 * which indicates that k-1 persons are skipped and kth
 * person is killed in circle in a fixed direction.
 * After each operation, the count will start from k+1th
 * person. The task is to choose the safe place in the circle
 * so that when you perform these operations starting from
 * 1st place in the circle, you are the last one remaining and
 * survive.starting from 1st place in the circle, you are the
 * last one remaining and survive.
 * 
 * Input: n = 3 k = 2 
 * Output: 3 
 * Explanation: There are 3 persons so skipping 1 person i.e 1st
 * person 2nd person will be killed. Thus the safe position is 3.
 */

/**
 * Find all possible palindromic partitions of a String
 * 
 * Given a String S, Find all possible Palindromic partitions of the given String.
 * 
 * Input: S = "geeks" 
 * Output: g e e k s g ee k s 
 * Explanation: All possible palindromic partitions are printed.
 * 
 * https://practice.geeksforgeeks.org/problems/find-all-possible-palindromic-partitions-of-a-string/1?
 */

/**
 * Expression Add Operators
 * 
 * Given a string S that contains only digits (0-9) and an
 * integer target, return all possible strings to insert the binary operator ' + ', ' - ', or ' * ' between the digits of S 
 * so that the resultant expression evaluates to the target value
 * 
 * Note:
 * 1. Operands in the returned expressions should not
 * contain leading zeros. For example, 2 + 03 is not
 * allowed whereas 20 + 3 is fine. It is allowed to not insert
 * any of the operators.
 * 
 * 2 If no solution is found, return an empty string array
 * 
 * 
 * Input: S = "123" target = 6
 * Output: { "1*2*3", "1+2+3"}
 * Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
 * https://practice.geeksforgeeks.org/problems/expression-add-operators/1
 */

/**
 * Reverse Nodes in k-Group
 * 
 * Given the head of a linked list, reverse the nodes of the
 * list k at a time, and return the modified list.
 * 
 * k is a positive integer and is less than or equal to the
 * length of the linked list. If the number of nodes is not a
 * multiple of k then left-out nodes, in the end, should
 * remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 */

/**
 * N-Queens
 * 
 * The n-queens puzzle is the problem of placing n queens
 * on an n x n chessboard such that no two queens attack each other.
 * 
 * Given an integer n, return all distinct solutions to the nqueens puzzle. You may return the answer in any order.
 * 
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a
 * queen and an empty space, respectively.
 * 
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]
 * https://leetcode.com/problems/n-queens/description/
 */

/**
 * Scrambled String
 * 
 * Given two strings S1 and S2 of equal length, the task is to determine if S2 is a scrambled form of S1.
 * 
 * Scrambled string: Given string str, we can represent it as a binary tree by partitioning it into two non-empty 
 * substrings recursively.
 * 
 * To scramble the string, we may choose any non-leaf node and swap its two children.
 * 
 * Suppose, we choose the node co and swap its two
 * children, it produces a scrambled string ocder.
 * 
 * Similarly, if we continue to swap the children of nodes der and er, it produces a scrambled string ocred.
 * 
 * Note: Scrambled string is not the same as an Anagram.
 * 
 * Print "Yes" if S2 is a scrambled form of S1 otherwise print "No".
 */

/**
 * Scrambled String
 * 
 * https://practice.geeksforgeeks.org/problems/scrambled-string/1
 */

/**
 * Here are some tips to help you become proficient in using recursion:
 * 
 * Clear Out Your Basics:
 * Start with a solid understanding of recursion and how it works,
 * understand how a function calls itself to solve a problem in smaller, similar instances.
 * 
 * Identify Base Cases:
 * Every recursive function should have one or more base cases, which
 * are the simplest scenarios that can be solved directly, it’s Important
 * to prevent infinite recursion.
 * 
 * Create the Recursive Case:
 * For non-base cases, define how the problem can be broken down
 * into smaller, similar subproblems. This is the recursive case, and it
 * should eventually lead to the base case.
 * 
 * Visualize Recursion:
 * Use visualization techniques, such as recursion trees or stack
 * diagrams, to understand the flow of recursive function calls and how
 * they build up and resolve.
 * 
 * Test and Debug:
 * Test your recursive functions with various inputs to ensure they work 
 * correctly. Be prepared for stack overflow errors in case of incorrect 
 * base cases or excessive recursion.
 * 
 * Maintain State:
 * Ensure that the state of your program is maintained correctly across 
 * recursive calls. This includes variables, data structures, and other 
 * information necessary to solve the problem.
 * 
 * Use Helper Functions:
 * In some cases, it may be helpful to create a helper function within 
 * your recursive function to encapsulate the recursion logic and pass 
 * additional parameters if needed.
 * 
 * Practice, Practice, Practice:
 * Recursion can be challenging, so practice is essential. Work on a 
 * variety of problems that can be solved using recursion to gain 
 * experience and confidence.
 * 
 * Learn from Examples:
 * Study and understand examples of recursive algorithms and 
 * functions, such as those for calculating factorials, Fibonacci 
 * advanced data structures and algorithms, such as merge sort, 
 * quicksort, and tree traversal, rely on recursion.
 * 
 * Avoid Excessive Recursion:
 * While recursion is elegant, it may not always be the most efficient 
 * solution. In some cases, iterative approaches may be better for 
 * performance reasons.
 */