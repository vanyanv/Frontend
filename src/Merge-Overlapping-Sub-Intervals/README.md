# Merge Overlapping Sub-intervals

## Problem Statement
Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

## Examples

### Example 1:
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, they can be merged into [1,6].
```

### Example 2:
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Since intervals [1,4] and [4,5] share an endpoint, they can be merged into [1,5].
```

## Problem Constraints
- 1 ≤ intervals.length ≤ 10^4
- intervals[i].length == 2
- 0 ≤ start_i ≤ end_i ≤ 10^4

## Expected
- Write a solution to merge all overlapping intervals
- Return an array of the non-overlapping intervals that cover all the intervals in the input
