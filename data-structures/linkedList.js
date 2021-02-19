// linked list 

// 10-->5-->16

// let myLinkedList = {
//   head:{
//     value:10,
//     next:{
//       value:5,
//       next{
//         value:16,
//         next:null
//       }
//     }
//   }
// }

class Node{
    constructor(value){
      this.value = value;
      this.next = null
    }
  }
  
  class linkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head;
      this.length = 1;
  
    }
    append(value) {
      //code here
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head
      this.head = newNode;
      this.length++;
      return this;
    }
    printList(){
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index){
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }
  
  const myLinkedList = new linkedList(10);
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.prepend(1)
  myLinkedList.insert(1, 22)
  myLinkedList.remove(1)
  // console.log(myLinkedList)
  
  // linkedList {
  //   head: { value: 10, next: null },
  //   tail: { value: 10, next: null },
  //   length: 1
  // }