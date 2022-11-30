class Node {
    constructor(value) {
        this.value = value
        this.next = value
        this.value = value
        this.next = value
        this.next = null
    }
}

const newNode = new Node (4)
const newNodeOne = new Node (8)
const newNodeTwo = new Node (12)

class LinkedList {
    constructor(value){
        const newNode = new Node (value)
        this.head = newNode
        this.value = newNodeOne
        this.value = newNodeTwo
        this.tail = this.head
        this.length = 3

    }
}

let myLinkedList = new LinkedList(4)
let myLinkedListOne = new LinkedList(8)
let myLinkedListTwo = new LinkedList(12)
console.log(myLinkedListTwo)