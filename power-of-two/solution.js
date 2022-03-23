/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = n => {
  //how to solve with recursion
  // n = 16
  // 16 / 2 = 8
  // 8 / 2 = 4
  // 4 / 2 = 2
  // 2 / 2 = 1

  if (n === 1) {
    return true;
  }
  if (n < 1 ){
    return false;
  }
  return isPowerOfTwo(n/2)
};

console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(33));
console.log(isPowerOfTwo(17));
