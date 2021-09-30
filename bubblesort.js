let input = [4,5,6,2,0,8];

function bubbleSort(data) {
  const result = data;

  for (let i = 0; i < data.length; i++) {
    let flag = false;
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j + 1];
        data[j + 1] = data[j];
        data[j] = temp;
        flag = true;
      }
    }
    if (flag === false) {
      return result;
    }
  }

  return result;
}

console.log(bubbleSort(input));