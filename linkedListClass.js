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
    //  Big(O) - O(1)
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

    print() {
        if(this.isEmpty()) {
            console.log('This list is empty')
        } else {
            let curr = this.head;
            let listValues = '';
            while(curr) {
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }

    //  Big(O) - O(n)
    /* Linked list - Append */
    append(value) {
        const node = new Node(value);
        // (Empty list)
          if(this.isEmpty()) {
              this.head = node;
          }
        // (Existing list)
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
          }
          this.size ++;
    }

    /* Linked list - Insertion */

    insert(value, index) {

        // (Invalid index)
        if(index < 0 || index > this.size) {
            console.log('This index does not exist!');
            return;
        }

        // (index = 0)
        if(index === 0) {
            this.prepend(value);
        }

        // (index > 0)
        else {
            const node = new Node(value);
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next;
            }
            node.next = prev.next; // which will ensure the new node is connected to the existing list
            prev.next = node;
            this.size ++;
        }
    }

    /* Linked list - Remove */

    removeFrom(index) {
        if(index < 0 || index >= this.size) {
            console.log('This index does not exist!')
            return null;
        }
        let removedNode;
        if(index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        }

        else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
               prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    /* Linked list - Remove value */

    removeValue(value) {
        if(this.isEmpty()) {
            return null;
        }
        if(this.head.value === value) {
            // Big(O) = O(1)
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            // Big(O) = O(n)
            let removedNode;
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next) {
                removedNode = prev.next
                prev.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
}

}

const list = new LinkedList();
console.log('Is list empty?', list.isEmpty());
console.log('The list size is:', list.getSize());

list.print();

list.prepend(100);

list.print();

list.prepend(200);
list.prepend(300);
list.print();

// append
list.append(600);
list.print();

// insertion
list.insert(400,3);
list.insert(500,4);
list.print();
list.insert(500,7);
list.print();
list.insert(500,-6);
list.print();
console.log(list.getSize());

console.log('This is removeFrom method!');

list.removeFrom(3);
console.log(list.removeFrom(8));
console.log(list.removeFrom(-6));

list.print();
console.log(list.getSize());


console.log('This is removeValue method!');
list.print()

console.log(list.removeValue(1000));
console.log(list.removeValue(200));

console.log(list.getSize());

list.print();
