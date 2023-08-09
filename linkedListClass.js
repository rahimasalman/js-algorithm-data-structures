class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
/*
Linked list class
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    /* Linked list - Prepend */
    prepend(value) {
        const node = new Node(value);
        // (Empty list)
        if(this.isEmpty()) {
            this.head = node;
        }
        // (Existing list)
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size ++;
    }
}

const list = new LinkedList();
console.log('Is list empty?', list.isEmpty());
console.log('The list size is:', list.getSize());

list.prepend(100);
list.prepend(200);
list.prepend(300);