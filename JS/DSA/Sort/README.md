# Stability in Sorting Algorithms

## What is a stable sorting algorithm?

A sorting algorithm is called **STABLE** if it preserves the relative order of elements with equal keys after sorting.

**Example:** If two elements have the same value and appear in the order A before B in the original array, a stable sort will keep A before B in the sorted array.

## Why are stable sorting algorithms useful?

- Useful when sorting objects with multiple keys (e.g., sort by department, then by salary)
- Important in database records, UI tables, and logs
- Helps maintain previous sorting order

## Which sorting algorithms are stable?

- Bubble Sort
- Insertion Sort
- Merge Sort
- Counting Sort
- Radix Sort

> **Note:** Comparison-based stable algorithms like Merge Sort and Insertion Sort naturally maintain the order of equal elements.

## Which sorting algorithms are unstable?

- Selection Sort
- Quick Sort
- Heap Sort

> **Reason:** These algorithms may swap non-adjacent elements, which can change the relative order of equal values.

## Can we make an unstable sorting algorithm stable?

Yes, but usually with extra space or additional logic.

**Common approaches:**
- Store the original index with each element
- Use extra memory for stable partitioning

**Trade-off:**
- Increased space complexity
- Possible performance impact

---

# In-Place Sorting

## What is in-place sorting?

An in-place sorting algorithm uses O(1) or constant extra space and modifies the original array directly.

## In-place sorting algorithms

- Insertion Sort
- Selection Sort
- Bubble Sort
- Heap Sort

> **Note:** Merge Sort is NOT in-place because it requires additional memory.

## Key Takeaway

Stability preserves the order of equal elements, while in-place sorting minimizes extra space usage.

