//Construct the BST (Binary Search Tree) from its given level order traversal.

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBST(levelOrder) {
    if (!levelOrder || levelOrder.length === 0) {
      return null;
    }
  
    const root = new Node(levelOrder[0]);
    const queue = [root];
    let index = 1;
  
    while (queue.length > 0) {
      const node = queue.shift();
  
      if (index < levelOrder.length) {
        node.left = new Node(levelOrder[index]);
        queue.push(node.left);
        index++;
      }
  
      if (index < levelOrder.length) {
        node.right = new Node(levelOrder[index]);
        queue.push(node.right);
        index++;
      }
    }
  
    return root;
  }
//You can test the implementation using the provided example:
const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);

// Helper function to print the BST in an inorder traversal
function inorderTraversal(node) {
  if (node === null) {
    return;
  }

  inorderTraversal(node.left);
  console.log(node.val);
  inorderTraversal(node.right);
}

inorderTraversal(root);
