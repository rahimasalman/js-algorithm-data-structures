class Queue {
        constructor() {
            this.items = []
        }

        enqueue(element) {
            this.items.push(element)
        }

        dequeue() {
            return this.items.shift()
        }

        isEmpty() {
            return this.items.length === 0
        }
        peek() {
            if(!this.isEmpty()) {
                return this.items[0]
            }
            return null;
        }

        size() {
            return this.items.length
        }

        print() {
            console.log(this.items.toString())
        }
}

const queue = new Queue()
console.log('This is an queue example')
console.log(queue.isEmpty())


queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)

console.log(queue.size())

queue.print()

console.log(queue.peek())

queue.dequeue()

console.log(queue.peek())