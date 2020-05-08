// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counter = [0];
  let allNodes = [root, 'stop'];

  while (allNodes.length > 1) {
    let remove = allNodes.shift();
    if (remove === 'stop') {
      allNodes.push(remove);
      counter.push(0);
      continue;
    }
    allNodes.push(...remove.children);
    counter[counter.length - 1]++;
  }

  return counter;
}

module.exports = levelWidth;
