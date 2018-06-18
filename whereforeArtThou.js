function whatIsInAName(collection, source) {
  let arr = collection.filter(function(item){
    for(let i in source){
      if(source[i] !== item[i]){
        return false;
      }
    }
    return true;
  });

  return arr;
}
