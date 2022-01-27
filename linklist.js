class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    index(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
let linkedlist = new LinkedList();
linkedlist.add(5);
linkedlist.add(28);
linkedlist.add(99);
linkedlist.add(67);
linkedlist.add(1111);
linkedlist.add(3);
linkedlist.add(9999);
linkedlist.add(8901);
linkedlist.add(491);
linkedlist.add(123);
linkedlist.add(69);
linkedlist.printList();

console.log(linkedlist.index(10));