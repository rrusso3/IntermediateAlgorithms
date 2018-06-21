function sumFibs(num) {
  // set up an array that will hold our numbers, initialized to 1
  let arrFib = [1];
  // set up a loop starting at 1 that will loop until the index reaches the number provided
  for(let i = 1; i <= num;){
    // push our starting index 1 onto our holder array
    arrFib.push(i);
    // update i by adding the last value as well as the second to last value of the array together
    i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }
  // when i exceeds num, dont push anymore to the array and begin the reduce.
  let result = arrFib.reduce((acc, val) => {
    // when the value is odd, add it to the accumulator
    if(val % 2 !== 0) return acc + val;
    // when the value is even, don't do anything with it and just return the accumulator
    else return acc;
  });

  // return the reduced result
  return result;
}
