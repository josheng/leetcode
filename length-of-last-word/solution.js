/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let counter = 0;
  // iterate from the back since only want to find out last word
  for (let i = s.length-1; i >= 0; i--) {
    // if there is counter and we found a space, break the loop
    if (counter > 0 && s[i].match(/\s/)) break;
    // continue loop if there is empty space
    if (s[i].match(/\s/)) {
      continue;
    }else {
      counter++;
    }
  }
  return counter;
};

// 2 liner solution, same speed
    // let new_arr = s.trim().split(" ");
    // return new_arr[new_arr.length - 1].length;

// s = "Hello World";
// s = "   fly me   to   the moon  ";
s ="a"
console.log(lengthOfLastWord(s));
