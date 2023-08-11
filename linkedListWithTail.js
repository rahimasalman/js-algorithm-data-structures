class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListTail {
    constructor() {
       this.head = null;
       this.tail = null;
       this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
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
    // Big(O) = O(1)
    prepend(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // Big(O) = O(1)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    // Big-O = O(1)
    removeFromFront() {
        if(this.isEmpty()) {
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next
            this.size--;
            return value
        }
    }
    // Big(O) = O(n)
    removeFromEnd() {
        if(this.isEmpty()) {
            return null;
        } else {
            const value = this.tail.value;
            if(this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                let prev = this.head;
                while(prev.next !== this.tail) {
                    prev = prev.next
                }
                prev.next = null;
                this.tail = prev;
            }
            this.size--;
            return value;
        }
    }
}

const list = new LinkedListTail();
console.log('Is list empty?', list.isEmpty());

console.log('The list size is:', list.getSize());

list.prepend(100);
list.prepend(200);
list.prepend(300);
list.print();

list.append(500);
list.append(400);
list.print();

list.prepend(700);
list.print();

list.removeFromFront();
list.print();

console.log(list.removeFromFront());
list.print();

console.log(list.removeFromFront());
list.print();

console.log(list.removeFromEnd());
list.print();

