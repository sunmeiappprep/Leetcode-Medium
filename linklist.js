class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkList {
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head
        this.length = 1
    }
    // make a new obj node
    // repoint old tail to new node
    // make new node new tail
    // append plus plus
    append(value) {
    const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    printlist(){
        let arr = []
        let node = this.head
        while (node != null){
            arr.push(node.value)
            node = node.next
        }
        console.log(arr);
    }

    insert(index,value) {
        const newNode = new Node(value)
        if (index === 0){
            return this.prepend(value)
        }

        if (index >=  this.length){
            return this.append(value)
        }
        const leader = this.findIndex(index-1)
        const holding = leader.next
        leader.next = newNode
        newNode.next = holding
        this.length++
    }   
    findIndex(index){
        let counter = 0;
        let currentNode = this.head
        while (counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
}

const list =  new LinkList(20)
list.append(5)
list.append(1)

list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)

list.prepend(7)
list.insert(20,99)
list.printlist()

// console.log(list)