function uniteUnique(arr) {
  // set new array container to first argument from arguments
  let newArr = arguments[0];

  // loop through the array arguments provided
  for (let i = 0; i < arguments.length; i++){
    // loop through the individual array item
    for (let j = 0; j < arguments[i].length; j++){
      // if the iteration of the array is not found in the container, push it into it
      if(newArr.indexOf(arguments[i][j]) === -1){
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}
