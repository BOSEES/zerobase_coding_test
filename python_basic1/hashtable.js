const hashTable = Array.from({length:8}, () => 0);

function hashFunction(key) {
  let hashAddress = key.charCodeAt([0]);
  return hashAddress % 8;
}

function add(key, value) {
  const hashAddress = hashFunction(key);
  hashTable[hashAddress] = value;
}

function find(key) {
  const hashAddress = hashFunction(key);
  return hashTable[hashAddress];
}

console.log(add("duddlf",123123123));

console.log(find("duddlf"));