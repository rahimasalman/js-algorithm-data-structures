const LinkedListTail = require("./index");

class LinkedListQueue {
    constructor() {
        this.list = new LinkedListTail();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
