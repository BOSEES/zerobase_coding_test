function Heap(data) {
  this.array = new Array();

  this.moveUp = (insertedIndex) => {
    const result = true;
    const parentIndex = parseInt(insertedIndex / 2, 10);
    if (this.array[parentIndex] > this.array[insertedIndex]) return false;
    if (insertedIndex === 1) return false;
    return result;
  }

  this.insert = (data) => {
    if (this.array.length === 0) {
      this.array.push(0);
      this.array.push(data);
    } else {
      this.array.push(data);
    }

    let insertedIndex = this.array.length - 1;
    while(this.moveUp(insertedIndex)) {
      const parentIndex = parseInt(insertedIndex / 2, 10);
      const temp = this.array[parentIndex];
      this.array[parentIndex] = this.array[insertedIndex];
      this.array[insertedIndex] = temp;
      insertedIndex = parentIndex;
    }
    return true;
  }

  this.moveDown = (popedIndex) => {
    let leftChildIndex = parseInt(popedIndex * 2);
    let rightChildIndex = parseInt(popedIndex * 2 + 1);

    if (leftChildIndex >= this.array.length) return false;
    else if (rightChildIndex >= this.array.length) {
      if (this.array[popedIndex] < this.array[leftChildIndex]) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.array[leftChildIndex] > this.array[rightChildIndex]) {
        if (this.array[popedIndex] < this.array[leftChildIndex]) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.array[popedIndex] < this.array[rightChildIndex]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } 

  this.pop = () => {
    if (this.array.length === 0) return "데이터가 없습니다.";
    let returnedData = this.array[1];
    this.array[1] = this.array[this.array.length - 1];
    this.array.pop();

    popedIndex = 1;
    while (this.moveDown(popedIndex)) {
      let leftChildIndex = parseInt(popedIndex * 2);
      let rightChildIndex = parseInt(popedIndex * 2 + 1);

      if (rightChildIndex >= this.array.length) {
        if (this.array[popedIndex] < this.array[leftChildIndex]) {
          let temp = this.array[popedIndex];
          this.array[popedIndex] = this.array[leftChildIndex];
          this.array[leftChildIndex] = temp;
          popedIndex = leftChildIndex;
        }
      } else {
        if (this.array[leftChildIndex] > this.array[rightChildIndex]) {
          if (this.array[popedIndex] > this.array[leftChildIndex]) {
            let temp = this.array[popedIndex];
            this.array[popedIndex] = this.array[leftChildIndex];
            this.array[leftChildIndex] = temp;
            popedIndex = leftChildIndex;
          }
        } else {
          if (this.array[popedIndex] < this.array[rightChildIndex]) {
            let temp = this.array[popedIndex];
            this.array[popedIndex] = this.array[rightChildIndex];
            this.array[rightChildIndex] = temp;
            popedIndex = rightChildIndex;
          }
        }
      }
    }
    return returnedData;
  }
}

const heap = new Heap(1);
heap.insert(5);
heap.insert(10);
heap.insert(4);
heap.insert(15);
heap.insert(8);
heap.insert(20);



console.log(heap.array);

heap.pop();
console.log(heap.array);
heap.pop();
console.log(heap.array);
heap.pop();
console.log(heap.array);

