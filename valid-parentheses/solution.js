/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let validArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      validArr.push(s[i]);
    } else if (brackets[validArr.pop()] !== s[i]) {
      return false;
    }
  }
  return validArr.length === 0;
};

// s = "()";
// s = "({[]})";
s = "(([]){})";
// s = "(]";
// s = "(){}[]";
console.log(isValid(s));
