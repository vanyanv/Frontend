## Solution

To reverse an array, you can use the following approach:

### Approach 1: Using a loop

1. Initialize two pointers, one at the beginning (`start`) and one at the end (`end`) of the array.
2. Swap the elements at these pointers.
3. Move the `start` pointer towards the end and the `end` pointer towards the start.
4. Repeat steps 2 and 3 until the `start` pointer is greater than or equal to the `end` pointer.

### Example Code

```python
def reverse_array(arr):
    start = 0
    end = len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr

# Example usage
arr = [5, 4, 3, 2, 1]
print(reverse_array(arr))  # Output: [1, 2, 3, 4, 5]
```

### Approach 2: Using Python's slicing

Python provides a simple way to reverse an array using slicing.

### Example Code

```python
def reverse_array(arr):
    return arr[::-1]

# Example usage
arr = [10, 20, 30, 40]
print(reverse_array(arr))  # Output: [40, 30, 20, 10]
```
