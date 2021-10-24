class PriorityQueue {
  constructor() {
    this.queue = new Array();
  }

  parentNodeIndex(childIndex) {
    return parseInt(childIndex / 2);
  }

  leftChildIndex(parentIndex) {
    return parseInt(parentIndex * 2);
  }

  rightChildIndex(parentIndex) {
    return parseInt(parentIndex * 2 + 1);
  }

  moveUp(insertedIndex) {
    if (this.queue[this.parentNodeIndex(insertedIndex)].priority > this.queue[insertedIndex].priority) {
      return true;
    } else {
      return false;
    }
  }

  is_empty() {
    return this.queue.length === 0;
  }
  
  put(priority, data) {
    const node = new Node(priority, data);
    if (this.queue.length === 0) {
      this.queue.push(node);
    } else {
      this.queue.push(node);
      let insertedIndex = this.queue.length - 1;
      while(this.moveUp(insertedIndex)) {
        let parentIndex = this.parentNodeIndex(insertedIndex);
        let temp = new Node(this.queue[parentIndex].priority, this.queue[parentIndex].data);
        this.queue[parentIndex] = this.queue[insertedIndex];
        this.queue[insertedIndex] = temp;
        insertedIndex = parentIndex;
      }
    }
  }

  get() {
    // gg
  }

  peek() {
    return this.queue[0];
  }
}

class Node {
  constructor(priority, data) {
    this.priority = priority;
    this.data = data;
  }
}

let pQueue = new PriorityQueue();

pQueue.put(5,"bb")
pQueue.put(4,"aa")
pQueue.put(1,"cc")
pQueue.put(3,"cc")
pQueue.put(7,"cc")

console.log(pQueue.peek());
