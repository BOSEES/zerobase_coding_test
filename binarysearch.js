let input = [1,2,3,4,5,6,7,8,9];

function binary(data,target) {
  let pivot = data[parseInt(data.length / 2)];
  if (target === pivot) return true;
  if (data.length === 1 ) {
    if (target === pivot) {
      return true;
    } else {
      return false;
    }
  }
  if (target > pivot) {
    let temp = data.slice(parseInt(data.length / 2) + 1 );
    return binary(temp,target);
  } else {
    let temp = data.slice(0, parseInt(data.length / 2));
    return binary(temp,target);
  }
}

console.log(binary(input,1))