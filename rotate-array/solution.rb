# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
  k.times { nums.prepend(nums.pop) }
  nums
end

nums = [-1,-100,3,99]
k = 2

p rotate(nums,k)
