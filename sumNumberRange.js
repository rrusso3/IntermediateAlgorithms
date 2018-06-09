function sumAll(arr) {
  let firstNum = arr[0];
  let secondNum = arr[1];
  let total = firstNum + secondNum;
  let rangeSum = 0;
  
  if(firstNum < secondNum){
    for (let i = firstNum + 1; i < secondNum; i++){
      rangeSum += i;
    }
  }
  if(firstNum > secondNum){
    for (let i = secondNum + 1; i < firstNum; i++){
      rangeSum += i;
    }
  }

  return rangeSum + total;
}
