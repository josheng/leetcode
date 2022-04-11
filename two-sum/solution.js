/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  // nums is an array of integer
  // target is the sum of 2 numbers in the array
  // cannot use same element twice
  // return the index of the integer
  // brute force will be too slow
  // sorting will have to keep track of the element index
  // using hash
  let nums_hash = {};
  // loop thru the array once
  for (let i = 0; i < nums.length; i++) {
    // find the value of target - current array element
    let sum_target = target - nums[i]
    // check if the value is in the hash
    if (sum_target in nums_hash) {
      // return the index as an array
      return [nums_hash[sum_target], i]
    }
    // store using the element as key and index as value
    nums_hash[nums[i]] = i;
  }
};

nums = [2,7,11,15]
target = 9
