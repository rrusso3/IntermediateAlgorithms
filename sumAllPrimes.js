function sumPrimes(num) {
  // declare an empty array to be used to get the sum later
  const numArr = [];
  // function which checks if a number is prime
  const isPrime = (number) => {
      // loops from 2(first prime) up until the given number
      for (let i = 2; i <= number; i++){
          // if the number is divisible by something other than itself, return false
          if(number % i === 0 && number!= i){
             return false;
          }
       }
      // otherwise, return true
      return true;
  }

  // loop from 2 up until the input number
  for(let i = 2; i <= num; i++){
    // if the iteration is prime, push it into an array
    if(isPrime(i)){
      numArr.push(i);
    }
  }

  // reduce by summing up the values and return the sum
  return numArr.reduce((acc, val) => {
    return acc + val;
  })
}
