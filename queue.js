class Queue {
    constructor() {
        this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }
    clear() {
        this.items = [];
    }
}

let queue = new Queue();

queue.add(1);
queue.add(2);
queue.add(4);
queue.add(8);

console.log(queue.items);

queue.remove();

console.log(queue.items);

queue.clear();

console.log(queue.items);









