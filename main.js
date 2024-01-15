"use-strict";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}
class BinarySearch {
  constructor(sortedArray) {
    this.array = sortedArray;
  }

  search(target) {
    let left = 0;
    let right = this.array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.array[mid] === target) {
        return mid; // Found the target
      } else if (this.array[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }

    return -1; // Target not found
  }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const binarySearchInstance = new BinarySearch(sortedArray);
const targetValue = 6;
const result = binarySearchInstance.search(targetValue);

if (result !== -1) {
  console.log(`${targetValue} found at index ${result}.`);
} else {
  console.log(`${targetValue} not found in the array.`);
}
