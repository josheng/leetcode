/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // nums integer array
  // kadane algorithm
  // initialize max to a negative number to factor in case when array is negative number
  let max = -Infinity;
  // counter t ostore current sum
  let current_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // let the current sum to be max of either current element, or the sum of current sum + current element
    current_sum = Math.max(nums[i], current_sum += nums[i]);
    // chose the max
    max = Math.max(max, current_sum)
  }
  return max;
};

// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
nums = [-1];
console.log(maxSubArray(nums));
