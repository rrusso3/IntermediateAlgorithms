function pairElement(str) {
  // split up the string into an array of single letter strings
  const splitStr = str.split("");
  // set up a container to put the DNA pairs into
  const containerArr = [];

  // iterate over the array of single letter strings
  splitStr.forEach((elem) =>{
    // if the element is matched, push to the container the correct sequence. same logic for each case
    if(elem === "T"){
      containerArr.push(["T", "A"]);
    }
    if(elem === "A"){
      containerArr.push(["A", "T"]);
    }
    if(elem === "G"){
      containerArr.push(["G", "C"]);
    }
    if(elem === "C"){
      containerArr.push(["C", "G"]);
    }
  })

  // return back the container array
  return containerArr;
}
