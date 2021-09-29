function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.head = null;

  this.insert = (value) => {
    const node = new Node(value);

    if(this.head === null) this.head = node;
    else {
      let currentNode = this.head;
      while(true) {
        if (currentNode.value > value) {
          if (currentNode.left === null) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  this.search = (value) => {
    currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) {
        return true;
      } else {
        if (currentNode.left < value) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }

    this.delete = (value) => {
      let seached = false;
      let currentNode = this.head;
      let parentNode= this.head;
      while(currentNode) {
        if (currentNode.value === value) {
          seached = true;
          break;
        } else if (currentNode.value < value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else {
          parentNode = currentNode;
          currentNode = currentNode.left;
        }
      }

      if (!seached) {
        return false;
      }

      if (currentNode.left === null && currentNode.right === null) {
        if (parentNode.value < value) {
          parentNode.right = null;
        } else {
          parentNode.left = null;
        }
        delete currentNode;
      }

      if (currentNode.left !== null && currentNode.right === null) {
        if (value < parentNode.value) {
          parentNode.left = currentNode.left;
        } else {
          parentNode.right = currentNode.left;
        }
      } else if (currentNode.left === null && currentNode.right !== null){
        if (value < parentNode.value) {
          parentNode.left = currentNode.right;
        } else {
          parentNode.right = currentNode.right;
        }
      } else {
        if (value < parentNode.value) {
          let changeNode = currentNode.right;
          let changeParentNode = currentNode.right;
          while(changeNode.left !== null) {
            changeParentNode = changeNode;
            changeNode = changeNode.left;
          }
          if(changeNode.right !== null) {
            changeParentNode.left = changeNode.right;
          } else {
            changeParentNode.left = null;
          }
          parentNode.left = changeNode;
          changeNode.right  = currentNode.right;
          changeNode.left = changeNode.left;
        }
      }
    }
    return false;
  }

  //삭제
  //1. 삭제할 노드를 탐색. value가 같다면 current.right를 지정
  //2. currentNode.right를 while문으로 왼쪽만 순회.
  //3. while 문의 조건은 currentNode.left가 null이라면 종료.
  //4. 마지막 노드의 왼쪽 자식노드를 삭제할 노드에서 추출하여 대입. 오른쪽도 마찬가지로 대입.
  //5. 마지막 노드의 오른쪽 자식이 있더라면 그 오른쪽 자식을 마지막 노드의 부모노드의 왼쪽자식으로 대입.
  //6. 마지막 노드의 왼쪽 자식이 있다면 마찬가지로 부모노드의 왼쪽 자식으로 대입.
}

const binaryTree = new BinaryTree();

binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(5);
binaryTree.insert(4);

console.log(binaryTree.search(3));