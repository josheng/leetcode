/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
  // nums is an array
  // sorted in non-decreasing order i.e ascending
  // remove dup in place
  // return the final result up till k unique elements
  // two pointer approach
  // i = 0, j = 1
  // compare i and j
  // if its the same, j move to next index
  // if not the same, i+1, then assign i to be j
  let i = 0;
  for (let j = 1; j <= nums.length; j++){
    if (nums[i] === nums[j]){
      continue;
    } else {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(nums.slice(0,i));
  return i;
};
nums = [0,0,0,0,1,2,2,2,3,3,3,3,3,4,4,5,5,6,7,8,9]
console.log(removeDuplicates(nums));
//             i
// nums = [0,1,2,0,1,2,2,2,3,3,3,3,3,4,4,5,5,6,7,8,9]
//                   j

// should return 10
// nums = [0,1,2,3,4,5,6,7,8,9,-,-,-,-,-,-,-,-,-,-,-]
