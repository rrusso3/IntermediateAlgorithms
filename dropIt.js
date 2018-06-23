function dropElements(arr, func) {
  // get a set length of the array that won't chagne after shift
  const arrLength = arguments[0].length;

  // loop through the array
  for(let i = 0; i < arrLength; i++){
    // if the function is untrue of the first element in the array, shift it off the array
    if(!func(arr[0])){
      arr.shift();
    }
  }

  // return the array
  return arr;
}
