//Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

function isLevelOrderBST(levelOrder) {
    if (!levelOrder || levelOrder.length === 0) {
      return true;
    }
  
    let left = -Infinity;
    let right = Infinity;
    let i = 1;
  
    while (i < levelOrder.length) {
      if (levelOrder[i] < left || levelOrder[i] > right) {
        return false;
      }
  
      if (levelOrder[i] < levelOrder[0]) {
        if (!isLevelOrderBST(levelOrder.slice(i), left, levelOrder[0])) {
          return false;
        }
      } else {
        if (!isLevelOrderBST(levelOrder.slice(i), levelOrder[0], right)) {
          return false;
        }
      }
  
      i++;
    }
  
    return true;
  }
//You can test the implementation using the provided examples:
const levelOrder1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(isLevelOrderBST(levelOrder1)); // Output: true

const levelOrder2 = [11, 6, 13, 5, 12, 10];
console.log(isLevelOrderBST(levelOrder2)); // Output: false
