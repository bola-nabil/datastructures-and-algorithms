class Node {
    constructor(element, next = null) {
        this.element = element
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(element) {
        this.head = new Node(element, this.head);
    }

    insertLast(element) {
        let node = new Node(element);
        let temp;
        if(!this.head) {
            this.head = node;
        } else {
            temp = this.head;
            while(temp.next) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.insertFirst(element);
            return;
        }

        const node = new Node(element);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
        if (count == index) {
            return (current.element);
        }
        count++;
        current = current.next;
        }
        return null;
    }
    removeAt(index) {
        if (index > 0 && index > this.size) {
        return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
        this.head = current.next;
        } else {
        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
    }

        this.size--;
    }

        printList() {
            let temp = this.head;
            while(temp) {
                console.log(temp.element);
                temp = temp.next;
            }
        }
    }

