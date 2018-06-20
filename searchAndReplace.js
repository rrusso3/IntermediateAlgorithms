function myReplace(str, before, after) {
  // reg exps
  const capitalRegexp = /[A-Z]/;
  const lowerRegexp = /[a-z]/;
  // split the string into an array of strings
  const newArr = str.split(" ");
  // get the index of the word to replace
  const arrIndex = newArr.indexOf(before);

  // if the word is present, proceed
  if(arrIndex !== -1){
    // remove the word from the array and change with the replacement
    const removed = newArr.splice(arrIndex, 1, after)

    // if the removed word has a first letter capital, proceed
    if(capitalRegexp.test(removed[0].substr(0, 1))){
      // grap the word again and set its place in the array to null
      const afterToUpper = newArr.splice(arrIndex, 1, null);
      // set a string equal to the solo string contained in the array
      let strToSplit = afterToUpper[0];
      // split that string
      let strSplit = strToSplit.split("");
      // set the first letter of the string to uppercase
      strSplit[0] = strSplit[0].toUpperCase();
      // splice back in the joined string with the modified letter
      newArr.splice(arrIndex, 1, strSplit.join(""));
      // return the array of strings joined into the original sentance
      return newArr.join(" ");
    }

    // if the removed word has a first letter lower case, proceed
    // some logic as aboved, except inverted for lowercase sensitivity
    if(lowerRegexp.test(removed[0].substr(0, 1))){
      const afterToLower = newArr.splice(arrIndex, 1, null);
      let strToSplit = afterToLower[0];
      let strSplit = strToSplit.split("");
      strSplit[0] = strSplit[0].toLowerCase();
      newArr.splice(arrIndex, 1, strSplit.join(""));
      return newArr.join(" ");
    }
  }
}
