var minCost = function (colors, neededTime) {
  let i = 0;
  let j = 1;
  let sum = 0;
  while (j < colors.length) {
    if (colors[i] === colors[j]) {
      sum += Math.min(neededTime[i], neededTime[j]);
      if (neededTime[i] > neededTime[j]){
        j++;
      }else {
        i = j;
        j++;
      }
    } else {
      i = j;
      j++;
    }
  }
  return sum;
};

console.log(minCost("cddcdcae",[4, 8, 8, 4, 4, 5, 4, 2]));
console.log(minCost("bbbaaa", [4, 9, 3, 8, 8, 9]));
console.log(minCost("aaabbbabbbb",  [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]));
