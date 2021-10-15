  // // 연결리스트 구현

// function LinkedList() {
//   this.head = null;
//   this.length = 0;

//   this.add = (data) => {
//     const node = new Node(data);
//     if(this.head === null) {
//       this.head = node;
//       this.length++;
//     } else {
//       const prov = this.head;
//       this.head = node;
//       this.head.next = prov;
//       this.length++;
//     }
//   }
// }

// function Node(data) {
//   this.data = data;
//   this.next = null
// }

// let linkedList = new LinkedList();
// console.log(linkedList.this);

// const sol = () => {
//   return this
// }
// function sol2() {
//   return this
// }

// console.log(sol()); 
// console.log(sol2()); 



// let name1 = "duddlf";
// let name2 = name1;
// name1 = "wpfkem";

// console.log(name1, name2);

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  is_empty() {
    if(this.front === null) {
      return false;
    } else {
      return true;
    }
  }

  put(data) {
    const node = new Node(data);

    if (this.front === null) {
      this.front = node;
      this.rear = node;
    } else {
      let prevNode = this.rear;
      prevNode.next = node;
      this.rear = node;
      this.rear.prev = prevNode;
    }
  }

  get() {
    let front = this.front;

    if (front === null) return null;
    else {
      this.front = front.next;
      this.front.prev = null;
    }
    return front.data;
  }

  peek() {
    if (this.front === null) return null;
    else return this.front.data;
  }

}

let test = new LinkedQueue();

console.log(test.put("aa"));
console.log(test.peek());
console.log(test)