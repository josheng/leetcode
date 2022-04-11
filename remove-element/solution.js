/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = (nums, val) => {
  // nums is an array
  // val is the element to be removed in place
  let i = 0;
  for (let j = i; j < nums.length; j++){
    if (nums[j] === val) {
      continue;
    } else {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

nums = [0,2,1,2,4,3,3,4,0,2]
val = 2
console.log(removeElement(nums,val));
// if j is not = to val, set j = i move both
// if j is = to val
// j++
//                       i
// nums = [0,1,4,3,3,4,0,4,0,2]
//                           j
// should return
// nums = [0,1,4,3,3,4,0,-,-,-]
// k = 7
