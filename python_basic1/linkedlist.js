// 연결리스트 구현

function LinkedList() {
  this.head = null;
  this.length = 0;

  this.add = (data) => {
    const node = new Node(data);
    if(this.head === null) {
      this.head = node;
      this.length++;
    } else {
      const prov = this.head;
      this.head = node;
      this.head.next = prov;
      this.length++;
    }
  }
}

function Node(data) {
  this.data = data;
  this.next = null
}

let linkedList = new LinkedList();
console.log(linkedList.this);

const sol = () => {
  return this
}
function sol2() {
  return this
}

console.log(sol()); 
console.log(sol2()); 



let name1 = "duddlf";
let name2 = name1;
name1 = "wpfkem";

console.log(name1, name2);
