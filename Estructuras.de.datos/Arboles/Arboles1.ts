interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

function createTreeNode<T>(value: T): TreeNode<T> {
  return {
    value,
    left: null,
    right: null,
  };
}

interface BinaryTree<T> {
  root: TreeNode<T> | null;
}

function createBinaryTree<T>(): BinaryTree<T> {
  return {
    root: null,
  };
}

function insert<T>(tree: BinaryTree<T>, value: T): void {
  const newNode: TreeNode<T> = createTreeNode(value);

  if (!tree.root) {
    tree.root = newNode;
    return;
  }

  let current: TreeNode<T> | null = tree.root;

  while (current) {
    if (value < current.value) {
      if (!current.left) {
        current.left = newNode;
        return;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = newNode;
        return;
      }
      current = current.right;
    }
  }
}

function countElements<T>(node: TreeNode<T> | null): number {
  if (!node) {
    return 0;
  }

  return 1 + countElements(node.left) + countElements(node.right);
}

function findMinValue<T>(node: TreeNode<T> | null): T | null {
  if (!node) {
    return null;
  }

  while (node.left) {
    node = node.left;
  }

  return node.value;
}

function findMaxValue<T>(node: TreeNode<T> | null): T | null {
  if (!node) {
    return null;
  }

  while (node.right) {
    node = node.right;
  }

  return node.value;
}

function inOrderTraversal<T>(node: TreeNode<T> | null): void {
  if (!node) {
    return;
  }

  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

function preOrderTraversal<T>(node: TreeNode<T> | null): void {
  if (!node) {
    return;
  }

  console.log(node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal<T>(node: TreeNode<T> | null): void {
  if (!node) {
    return;
  }

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.value);
}

// Ejemplo de uso:
const tree: BinaryTree<number> = createBinaryTree();
insert(tree, 5);
insert(tree, 3);
insert(tree, 7);
insert(tree, 2);
insert(tree, 4);
insert(tree, 6);
insert(tree, 8);

console.log("Recorrido en orden:");
inOrderTraversal(tree.root);

console.log("Número de elementos en el árbol:", countElements(tree.root));

console.log("Valor mínimo en el árbol:", findMinValue(tree.root));
console.log("Valor máximo en el árbol:", findMaxValue(tree.root));
