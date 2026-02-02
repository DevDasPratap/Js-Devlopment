/**
 * Stability in sorting algorithm
 * Example: stable short is: Bubble sort, Insertion sort, Merge sort
 * Example: unstable sort: Selection sort, quick sort, heap sort
 */

// In-Place Sorting: An in-place sorting algorithm uses constant extra space for producing the output (modifies the given array only). It sorts the list only by modifying the order of the elements within the list. 
// In-Place Sorting:
// Insertion Sort
// Selection Sort
// Bubble Sort
/**
 * Stability in Sorting Algorithm
 * What is a stable sorting algorithm? 
 * Where stable sorting algorithms are useful?
 * Which sorting algorithms are stable? 
 *  - Some Sorting Algorithms are stable by nature, such as Bubble Sort, Insertion Sort, Merge Sort, Count Sort, etc. Comparison-based stable sorts such as Merge Sort and Insertion Sort maintain stability
 * Which sorting algorithms are unstable?
 * Can we make any sorting algorithm stable? 
 */


// merge two sorted array
const array1 = [1, 3, 4, 5]
const array2 = [2, 4, 6, 8]
function mergeTwoSortedArray(array1, array2) {
    const array1Length = array1.length
    const array2Length = array2.length
    const merge = []
    let i = 0, j = 0
    while (i<array1Length && j<array2Length) {
        if (array1[i] <= array2[j]) {
            merge.push(array1[i])
            i++
        }else{
            merge.push(array2[j])
            j++
        }
    }

    // Add remaining elements
    while (i<array1Length) {
        merge.push(array1[i])
            i++
    }
    while (j<array1Length) {
        merge.push(array2[j])
            j++
    }
    return merge
}
// console.log(mergeTwoSortedArray(array1, array2))


const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
function intersection(nums1, nums2) {
    const lengthOfNums1 = nums1.length
    const lengthOfNums2 = nums2.length
    const maxLength = Math.max(lengthOfNums1, lengthOfNums2)
    const arr = []
    for (let index = 0; index < maxLength; index++) {
        if (nums1.includes(nums2[index])) {
            if (!arr.includes(nums2[index])) {
                arr.push(nums2[index])
            }
        }
    }
    return arr
}
// console.log(intersection(nums1, nums2))

// Union of Two Arrays
const arr1 = [7, 1, 5, 2, 3, 6]
const arr2 = [3, 8, 6, 22, 7] 
// your program should print Union as [1, 2, 3, 5, 6, 7, 8, 22].

function unioun(arr1, arr2) {
    const arr1Length = arr1.length
    const arr2Length = arr2.length
    const unionSet = new Set()
    for (let index = 0; index < arr1Length; index++) {
        if (!unionSet.has(arr1[index])) {
            unionSet.add(arr1[index])
        }
    }
    for (let index = 0; index < arr2Length; index++) {
        if (!unionSet.has(arr2[index])) {
            unionSet.add(arr2[index])
        }
    }
    const unionSort = [...unionSet].sort((a,b)=>a-b)
    return unionSort
}
console.log(unioun(arr1, arr2))