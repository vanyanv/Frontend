# Count Subarrays with Given XOR

## Problem Description
Given an array of integers and a target value K, find the total number of subarrays whose XOR equals K.

## Problem Statement
You need to write a function that takes an array `A` of integers and a target value `K` as input. The function should return the count of all possible subarrays whose elements, when XORed together, equal K.

## Examples

### Example 1:
```
Input: 
array = [4, 2, 2, 6, 4]
K = 6

Output: 4

Explanation: 
The subarrays with XOR = 6 are:
1. [4, 2]
2. [4, 2, 2, 6, 4]
3. [2, 2, 6]
4. [6]
```

### Example 2:
```
Input:
array = [5, 6, 7, 8, 9]
K = 5

Output: 2

Explanation:
The subarrays with XOR = 5 are:
1. [5]
2. [5, 6, 7, 8, 9]
```

## Function Signature
```
int countXORSubarrays(int[] A, int K)
```

## Input Format
- First parameter: An array of integers A
- Second parameter: Target XOR value K

## Output Format
- Return an integer representing the count of valid subarrays

## Constraints
- 1 ≤ Length of array ≤ 10^5
- 0 ≤ A[i] ≤ 10^5
- 0 ≤ K ≤ 10^5

## Test Cases
```
Test Case 1:
Input: [1, 2, 3, 4], K = 3
Output: 2

Test Case 2:
Input: [1, 1, 1], K = 0
Output: 2

Test Case 3:
Input: [2, 4, 6], K = 6
Output: 2
```