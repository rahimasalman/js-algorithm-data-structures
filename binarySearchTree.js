class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
         this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode;
            }
            else {
              this.insertNode(root.left, newNode);
            }
        } else {
            if(root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(root.value === value) {
                return true;
            } else if(value < root.value){
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

const binarySearchTree = new BinarySearchTree();
console.log(binarySearchTree.isEmpty());

binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);

console.log(binarySearchTree.isEmpty());

console.log(binarySearchTree.search(binarySearchTree.root,10));
console.log(binarySearchTree.search(binarySearchTree.root,5));
console.log(binarySearchTree.search(binarySearchTree.root,3));

binarySearchTree.insert(3);
binarySearchTree.insert(7);

binarySearchTree.preOrder(binarySearchTree.root);

console.log('this is inOrder func ------------------')

binarySearchTree.inOrder(binarySearchTree.root);

console.log('this is postOrder func ------------------')

binarySearchTree.postOrder(binarySearchTree.root);