let input = [4,5,6,2,0,8];

function quick(data) {
  if (data.length <= 1) return data;
  let left = [];
  let right = [];
  let pivot = data[0];

  for (let i = 1; i < data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i])
    } else {
      right.push(data[i]);
    }
  }

  return quick(left).concat(pivot, quick(right));
}

console.log(quick(input));