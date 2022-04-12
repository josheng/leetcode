/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  // return if empty string or if needle is more then haystack
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let i = 0;
  let j = 0;
  let first_occur = [];

  // loop thru both haystack and needle
  // break loop if either haystack or needle is at the end
  while (j < haystack.length && i < needle.length) {
    // if character does not match
    if (needle[i] !== haystack[j]) {
      // reset if it is not a continuous match
      if (i > 0) {
        // move J back to the index where first match occurs
        j = j - i;
        // move to the next index
        j++;
        // reset both I and array to initial state
        i = 0;
        first_occur = [];
      } else {
        // increment j index if does not match
        j++;
      }
    } else {
      // push the index position of the match
      first_occur.push(j);
      i++;
      j++;
    }
  }
  // console.log(first_occur);
  // if no matcg or incomplete match, return -1
  if (first_occur.length === 0 || first_occur.length !== needle.length) {
    return -1
  } else {
    // else just return the first occurance of the match
    return first_occur[0]
  }
};

// haystack = "mississippi";
// needle = "issip";
// haystack = "aaaaa"
// needle = "bba"
haystack = "mississippi";
needle = "issipi";

console.log(strStr(haystack,needle))
