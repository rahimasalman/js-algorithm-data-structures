class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
       return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack()

console.log(stack.isEmpty())


stack.push(100)
stack.push(200)
stack.push(300)

console.log(stack.size())

stack.print()

console.log(stack.peek())

stack.pop()

console.log(stack.peek())