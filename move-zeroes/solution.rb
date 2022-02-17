# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  zeroes = nums.tally[0]
  nums.delete(0)
  zeroes.times { nums << 0 } if zeroes.nil? == false
end

nums = [0,1,0,3,12]
p move_zeroes(nums)
