/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  let pali_str;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    // odd palindrome
    // set both pointer to start from same area
    let l = i;
    let r = i;
    // condition to not exceed the boundary of string, and the pointers that is moving outwards matches
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // if the window length is greater then max
      // i.e the substring is longest
      if (r-l+1 > max) {
        // save the substring into a var only if the window length is the longest
        pali_str = s.slice(l,r+1);
        // set the new max to be the length of the window
        max = r-l+1
      }
      // increase window size, move to left and right
      l--;
      r++;
    }
    // even palindrome
    // for cases where the middle 2 characters are the same
    l = i;
    r = i+1;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > max) {
        pali_str = s.slice(l, r + 1);
        max = r - l + 1;
      }
      l--;
      r++;
    }
  }
  // finally return the substring
  return pali_str;
};

// s = "babad";
// s = "cbbd";
s = "hbkjemnajsracecarolmljs"

console.log(longestPalindrome(s));
