let input = [4,5,6,2,0,8];

function insertionSort(data) {
  const result = data;

  for (let i = 1; i < data.length; i++) {
    let temp = data[i]; //2
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp < data[j]) {  //2 < 6,5,4
        data[j + 1] = data[j]
      } else {
        break;
      }
    }
    data[j + 1] = temp;
  }

  return result;
}

console.log(insertionSort(input));