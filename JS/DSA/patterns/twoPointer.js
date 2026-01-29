/**
 * ============================================================================
 * TWO POINTER TECHNIQUE - COMPREHENSIVE GUIDE
 * ============================================================================
 * 
 * WHAT IS IT?
 * -----------
 * A technique that uses two references (pointers) to traverse a data structure
 * efficiently. Instead of nested loops, pointers move strategically to solve
 * problems in linear time.
 * 
 * 
 * HOW IT WORKS - THREE MAIN PATTERNS:
 * ------------------------------------
 * 
 * 1. OPPOSITE DIRECTION (Converging Pointers)
 *    - One pointer starts at the beginning, one at the end
 *    - Move them toward each other
 *    - Use case: Palindrome checks, two-sum in sorted array
 * 
 * 2. SAME DIRECTION (Fast & Slow Pointers)
 *    - Both pointers start at the beginning
 *    - One moves faster than the other
 *    - Use case: Remove duplicates, detect cycles, find middle
 * 
 * 3. SLIDING WINDOW (Dynamic Range)
 *    - Two pointers define a window that expands/contracts
 *    - Adjust window size based on conditions
 *    - Use case: Substrings, subarrays with constraints
 * 
 * 
 * KEY BENEFITS:
 * -------------
 * ✓ Time Efficient: O(n) instead of O(n²)
 * ✓ Space Efficient: O(1) extra space (usually in-place)
 * ✓ Early Exit: Stop as soon as condition is met
 * ✓ No Nested Loops: Avoids expensive double iterations
 * ✓ Simple & Intuitive: Easy to understand and implement
 * 
 * 
 * COMMON USE CASES:
 * -----------------
 * 
 * ARRAYS & STRINGS:
 * ✓ Sorted or sortable data problems
 * ✓ Finding pairs/triplets/quadruplets with target sum
 * ✓ Removing duplicates from sorted arrays
 * ✓ Reversing or rearranging elements
 * ✓ Palindrome verification
 * ✓ Merging sorted arrays
 * ✓ Partitioning (e.g., move zeros to end, Dutch National Flag)
 * ✓ Container with most water / trapping rain water
 * ✓ Longest substring without repeating characters
 * ✓ Minimum window substring
 * ✓ Anagram or permutation checks
 * ✓ String compression
 * 
 * LINKED LISTS:
 * ✓ Detecting cycles (Floyd's Cycle Detection)
 * ✓ Finding middle node
 * ✓ Removing Nth node from end
 * ✓ Finding intersection point of two lists
 * ✓ Checking if linked list is palindrome
 * ✓ Reordering lists
 * 
 * 
 * PATTERN RECOGNITION - WHEN TO USE:
 * -----------------------------------
 * • Problem mentions "sorted" or "sortable" data
 * • Looking for pairs, triplets, or ranges
 * • Need to compare elements from different positions
 * • Want to avoid O(n²) nested loops
 * • Working with contiguous sequences
 * • Need to track a window or range of elements
 * • Problem involves "in-place" modification
 * • Finding elements with specific distance/position relationships
 * 
 * 
 * SPACE COMPLEXITY:
 * -----------------
 * • Usually O(1) - only the two pointer variables
 * • Exception: When building new results or working with immutable strings
 *              (may require O(n) for output storage)
 * 
 * 
 * CODE EXAMPLES:
 * --------------
 */

// ============================================================================
// EXAMPLE 1: PALINDROME CHECK (Opposite Direction)
// ============================================================================
/**
 * Check if a string is a palindrome
 * Pattern: Opposite Direction (Converging)
 * Time: O(n), Space: O(1)
 * 
 * Visualization:
 * "racecar"
 *  ↑     ↑
 *  L     R
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Early exit - mismatch found
    }
    left++;   // Move toward center
    right--;  // Move toward center
  }
  
  return true; // All characters matched
}

// ============================================================================
// EXAMPLE 2: TWO SUM IN SORTED ARRAY (Opposite Direction)
// ============================================================================
/**
 * Find two numbers that add up to target in a sorted array
 * Pattern: Opposite Direction (Converging)
 * Time: O(n), Space: O(1)
 * 
 * Visualization:
 * [1, 2, 3, 4, 6]  Target: 7
 *  ↑           ↑
 *  L           R
 */
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    const sum = nums[left] + nums[right];
    
    if (sum === target) {
      return [left, right]; // Found the pair!
    } else if (sum < target) {
      left++;  // Need larger sum, move left pointer right
    } else {
      right--; // Need smaller sum, move right pointer left
    }
  }
  
  return [-1, -1]; // No pair found
}

// ============================================================================
// EXAMPLE 3: REMOVE DUPLICATES FROM SORTED ARRAY (Same Direction)
// ============================================================================
/**
 * Remove duplicates in-place, return new length
 * Pattern: Same Direction (Fast & Slow)
 * Time: O(n), Space: O(1)
 * 
 * Visualization:
 * [1, 1, 2, 2, 3]
 *  ↑  ↑
 *  S  F  (Slow tracks unique position, Fast explores)
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  
  let slow = 0; // Points to last unique element
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // Copy unique element
    }
  }
  
  return slow + 1; // Length of unique elements
}

// ============================================================================
// EXAMPLE 4: LINKED LIST CYCLE DETECTION (Same Direction - Floyd's Algorithm)
// ============================================================================
/**
 * Detect if linked list has a cycle
 * Pattern: Same Direction (Fast & Slow - Tortoise and Hare)
 * Time: O(n), Space: O(1)
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;       // Move 1 step
    fast = fast.next.next;  // Move 2 steps
    
    if (slow === fast) {
      return true; // Cycle detected - pointers met
    }
  }
  
  return false; // No cycle - fast reached end
}

// ============================================================================
// EXAMPLE 5: SLIDING WINDOW - LONGEST SUBSTRING WITHOUT REPEATING CHARS
// ============================================================================
/**
 * Find length of longest substring without repeating characters
 * Pattern: Sliding Window
 * Time: O(n), Space: O(min(n, m)) where m is charset size
 * 
 * Visualization:
 * "abcabcbb"
 *  ↑ ↑
 *  L R  (Window expands/contracts)
 */
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let left = 0;
  let maxLength = 0;
  
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    
    // If character seen and inside current window
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1; // Shrink window
    }
    
    seen.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// ============================================================================
// EXAMPLE 6: REVERSE ARRAY IN-PLACE (Opposite Direction)
// ============================================================================
/**
 * Reverse an array in-place
 * Pattern: Opposite Direction (Converging)
 * Time: O(n), Space: O(1)
 */
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Swap elements
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr;
}

// ============================================================================
// EXAMPLE 7: MOVE ZEROS TO END (Same Direction)
// ============================================================================
/**
 * Move all zeros to end while maintaining relative order
 * Pattern: Same Direction (Partitioning)
 * Time: O(n), Space: O(1)
 * 
 * Visualization:
 * [0, 1, 0, 3, 12]
 *  ↑  ↑
 *  S  F  (Slow tracks non-zero position)
 */
function moveZeroes(nums) {
  let slow = 0; // Position for next non-zero element
  
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // Swap non-zero element to slow position
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  
  return nums;
}

// ============================================================================
// EXAMPLE 8: THREE SUM (Combination of Patterns)
// ============================================================================
/**
 * Find all unique triplets that sum to zero
 * Pattern: Sorting + Opposite Direction for each element
 * Time: O(n²), Space: O(1) excluding output
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b); // Sort first
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i];
    
    // Two pointer for remaining two elements
    while (left < right) {
      const sum = nums[left] + nums[right];
      
      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

/**
 * ============================================================================
 * QUICK TIPS:
 * ============================================================================
 * 
 * 1. Always check for edge cases (empty array, single element)
 * 2. For sorted arrays, think two pointers first
 * 3. Use fast/slow for linked list problems
 * 4. Sliding window for substring/subarray problems
 * 5. Remember to handle duplicates when needed
 * 6. Two pointers often eliminate need for extra data structures
 * 7. Watch for off-by-one errors in pointer movement
 * 8. Consider sorting first if problem allows (changes O(n) to O(n log n))
 * 
 * ============================================================================
 * COMPLEXITY TRANSFORMATION:
 * ============================================================================
 * 
 * Without Two Pointers:        With Two Pointers:
 * • Time: O(n²)         →      • Time: O(n)
 * • Space: O(n)         →      • Space: O(1)
 * • Nested loops        →      • Single pass
 * • Extra storage       →      • In-place
 * 
 * This technique transforms many quadratic problems into linear solutions!
 * ============================================================================
 */