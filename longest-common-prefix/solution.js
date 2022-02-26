/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // set first string of array as initial string for comparison
  let initString = strs[0];
  // start loop at index 1
  for (let index = 1; index < strs.length; index++) {
    const otherStr = strs[index];
    // prefix counter
    let prefix = 0;
    // iterate thru the strings
    for (let j = 0; j < otherStr.length; j++) {
      // compare the letters, if matches, increase counter
      if (initString[j] === otherStr[j]) {
        prefix++;
      } else {
        break; //break out of loop if does not match
      }
    }
    // set the initial string to the prefix
    initString = initString.slice(0, prefix);
  }
  return initString;
};

// strs = ["flower", "flow", "flight"];
// strs = ["ab", "a"];
strs = ["cir", "car"];
console.log(longestCommonPrefix(strs));
