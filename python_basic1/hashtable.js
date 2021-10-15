
//체이닝 기법 - 해쉬테이블 & 링크드리스트(배열)
const hashTable = Array.from({length:8}, () => 0);
function hashFunction(key) {
  return key % 8;
}

function set(key, value) {
  let indexKey = key.charCodeAt([0]);
  const hashAddress = hashFunction(indexKey);

  if (hashTable[hashAddress] === 0) {
    hashTable[hashAddress] = [[indexKey, value]];
  } else {
    hashTable[hashAddress].push([indexKey,value]);
  }
}

function get(key) {
  const indexKey = key.charCodeAt([0]);
  const hashAddress = hashFunction(indexKey);

  if (hashTable[hashAddress] === 0) {
    return "데이터가 없습니다."
  } else {
    for (let i of hashTable[hashAddress]) {
      if(i[0] === indexKey) {
        return i[1];
      }
    }
  }
}

console.log(set("hello",1111111));
console.log(set("duddlf2",2222222));
console.log(set("zero3",2222222));
console.log(set("base4",3333333));

console.log(get("hello"));
console.log(get("duddlf2"));
console.log(get("zero3"));
console.log(get("base4"));


//폐쇠기법 - 리니어 프로브
// const hashTable = Array.from({length:8}, () => 0);
// function hashFunction(key) {
//   return key % 8;
// }

// function add(key, value) {
//   let indexKey = key.charCodeAt([0]);
//   const hashAddress = hashFunction(indexKey);
//   if (hashTable[hashAddress] === 0) {
//     hashTable[hashAddress] = [[indexKey, value]];
//   } else {
//     hashTable[hashAddress].push([indexKey,value]);
//   }
// }

// function find(key) {
//   const indexKey = key.charCodeAt([0]);
//   const hashAddress = hashFunction(indexKey);

//   if (hashTable[hashAddress] === 0) {
//     return "데이터가 없습니다."
//   } else {
//     for (let i of hashTable[hashAddress]) {
//       if(i[0] === indexKey) {
//         return i[1];
//       }
//     }
//   }
// }

// console.log(add("duddlf",1111111));
// console.log(add("dbdlf",2222222));
// console.log(add("zero",2222222));
// console.log(add("nomen",3333333));
// console.log(hashTable);

// console.log(find("dbdlf"))

