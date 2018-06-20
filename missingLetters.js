function fearNotLetter(str) {
  // create an alphabet array
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // create an array of the alphabet string split into single letters
  const strSplit = str.split("");
  // create an index to check the alphabet by, mainly if the string doesnt start at the beggining of the alphabet
  let index = alphabet.indexOf(strSplit[0]);

  // loop through the split string array
  for (let i = 0; i < strSplit.length; i++){
    if(alphabet[index] === strSplit[i]){
      // if the string values are equal, increment the alphabets index
      index++;
    } else if(alphabet[i] !== strSplit[i]){
      // if the string values are not equal, return the value from the alphabet that the string is missing
      return alphabet[index];
    }
  }
}
