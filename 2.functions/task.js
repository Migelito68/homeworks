// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] <= min) {
      min = arr[i];
    } else if(arr[i] >= max) {
      max = arr[i];
    }
  }
  avg = +(sum / arr.length).toFixed(2);
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum +=arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = worker(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max;
  min = Infinity;
  max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return Math.abs(max - min);
  // Ваш код
}

function makeWork(arrOfArr, worker2) {
  let max;
  max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = worker2(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  
  return max;
}
