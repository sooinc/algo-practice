// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//move to the right - we update min value
//move to the left - we update max value
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    //if the validate() recursive call returns false then we know it's not a valid BST
    //and we enter into this if statement to return false
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    //if the validate() recursive call returns false then we know it's not a valid BST
    //and we enter into this if statement to return false
    return false;
  }

  return true;
}

module.exports = validate;
