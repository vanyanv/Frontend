# Remove Duplicates from Sorted Array

## Problem Description
Given an integer array sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Return the number of unique elements (k) after modifying the first k slots of the array to contain the final result.

> Note: It does not matter what you leave beyond the first k elements.

## Examples

### Example 1:
**Input:** 
```
arr = [1,1,2,2,2,3,3]
```
**Output:** 
```
arr = [1,2,3,_,_,_,_]
return: 3
```
**Explanation:** The unique elements are [1,2,3]. The first 3 positions of the array now contain these elements.

### Example 2:
**Input:** 
```
arr = [1,1,1,2,2,3,3,3,3,4,4]
```
**Output:** 
```
arr = [1,2,3,4,_,_,_,_,_,_,_]
return: 4
```
**Explanation:** The unique elements are [1,2,3,4]. The first 4 positions of the array now contain these elements.

## Constraints
- Array is sorted in non-decreasing order
- Modification should be done in-place
- Original relative order must be maintained