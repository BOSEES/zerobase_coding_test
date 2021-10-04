const graph = {
  "A": ["B","C"],
  "B": ["A","D"],
  "C": ["A","G","H","I"],
  "D": ["B","E","F"],
  "E": ["D"],
  "F": ["D"],
  "G": ["C"],
  "H": ["C"],
  "I": ["C","J"],
  "J": ["I"],
}

function bfs(data,start) {
  let visited = [];
  let needVisit = [];
  needVisit.push(start);

  while(needVisit.length) {
    let node = needVisit.shift();
    if(!filter(visited,node)){
      visited.push(node);
      needVisit.push(...data[node]);
    } 
  }
  return visited;
}

function filter(array, target) {
  for (i of array) {
    if (i === target) return true;
  }
  return false;
}

console.log(bfs(graph,"A"));
