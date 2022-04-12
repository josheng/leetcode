/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   // s is a string
//   // try building a hash for checks and a counter
//   // if exists in hash, delete the hash and continue onwards
//   // need to keep track of the longest substring
//   let sub_hash = {}
//   let counter = 0;
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     // if hash exist
//     if (sub_hash[s[i]]) {
//       // empty the hash
//       sub_hash = {}
//       // go back to the position where the substring started
//       i = i - counter;
//       // reset the counter
//       counter = 0;
//       continue;
//     }
//     // store the element into hash
//     sub_hash[s[i]] = 1;
//     // increase the substring count
//     counter++;
//     if (counter > max) {
//       // set new max if counter is greater then current max
//       max = counter;
//     }
//   }
//   return max;
// };
var lengthOfLongestSubstring = function (s) {
  //sliding window approach

  //2 pointers as the window
  let i = 0;
  let j = 0;
  // counter to store max
  let max = 0;
  // array to keep track of substring
  let sub_array = [];

  while (i < s.length) {
    // check if array contains the element at i
    if (sub_array.includes(s[i])) {
      // find the index of the element at j
      let index = sub_array.indexOf(s[j]);
      // remove it from array
      sub_array.splice(index, 1);
      // increment
      // this closes the window between j and i
      j++;
      // continue the loop to check if anymore repeating chars
      continue;
    }
    // push to array if it does not exist
    sub_array.push(s[i]);
    // set the max as either current max or the length of the window
    max = Math.max(max,i-j+1);
    i++;
  }
  return max;

};

// shld return "abc" ~ 3
// s = "abcabcbb"
//         i
// s = "abcabcbb"
//      j
// [a,b,c]
// shld return "b" ~ 1
// s = "bbbbb"

// shld return "wke" ~ 3
// s = "pwwkew"

// shld return 'vdf' ~ 3
// s = 'dvdf'

console.log(lengthOfLongestSubstring(s));
