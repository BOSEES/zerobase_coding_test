let input = [4,5,6,2,0,8];

function selectSort(data) {
  const result = data;

  for (let i = 0; i < data.length - 1; i++) {
    let targetIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[targetIndex]) {
        targetIndex = j;
      }
    }
    let temp = data[i];
    data[i] = data[targetIndex];
    data[targetIndex] = temp;
  }
  return result;
}

console.log(selectSort(input));