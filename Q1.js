//Given a binary tree, your task is to find subtree with maximum sum in tree.
function maxSubtreeSum(root) {
  let maxSum = Number.NEGATIVE_INFINITY;

  function getSubtreeSum(node) {
    if (node === null) {
      return 0;
    }

    const leftSum = getSubtreeSum(node.left);
    const rightSum = getSubtreeSum(node.right);
    const currentSum = node.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, currentSum);

    return currentSum;
  }

  getSubtreeSum(root);

  return maxSum;
}
//You can test the implementation using the provided examples:

// Example 1:
const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(maxSubtreeSum(tree1)); // Output: 28

// Example 2:
const tree2 = {
  val: 1,
  left: {
    val: -2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: -6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
};

console.log(maxSubtreeSum(tree2)); // Output: 7
