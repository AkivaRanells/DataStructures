//send to hadas

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    print() {

        if (this.head === null) {
            console.log('Empty list');
            return;
        };
        let currentNode = this.head;
        if (this.length === 1) {
            console.log(currentNode.data)
        } else {
            for (let i = 1; i <= this.length; i++) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }

    addToTheBegin(newNode) {
        // console.log(newNode);
        newNode.next = this.head;
        // console.log(this.head);
        this.head = newNode;
        // console.log(this.head.next);

        this.length++;
    }

    addToTheEnd(value) {
        let newNode = new ListNode(value);
        if (this.length != 0) {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        } else {
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    deleteNode(value) {
        if (this.length === 0) return;
        let currentNode = this.head;
        for (let i = 1; i <= this.length; i++) {
            if (currentNode.data === value) {
                currentNode.next = currentNode.next.next;
                this.length--;
                return;
            }
            currentNode = currentNode.next;
        }
        console.log("Value not found");
    }

    removeItemByIndex(index) {
        if (this.length === 0) return;
        if (index = 1) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        if (index === this.length) {
            currentNode.next = null;
        } else {
            currentNode.next = currentNode.next.next;
        }
        this.length--;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let list = new LinkedList();

list.print();
list.addToTheEnd(1);
// console.log(list.head.data);
list.print();
let node1 = new ListNode(5);
list.addToTheBegin(node1);
list.print();
let node2 = new ListNode(10);
list.addToTheBegin(node2);
console.log(list);
list.addToTheEnd(3);
list.print();

list.deleteNode(5);
console.log(list);
list.print();
list.removeItemByIndex(1);
console.log(list);
list.print();
console.log(list);
//finish debugging


