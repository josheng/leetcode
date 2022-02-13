# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
require "pry-byebug"

def search(nums, target)
  # return 0 if nums.length == 1 && nums.first == target
  # return -1 if nums.length == 1 && nums.first != target
  mid_index = nums.length/2
  while true
    if (nums[mid_index].nil? || nums[mid_index] < target) && (nums[mid_index+1].nil? || nums[mid_index+1] > target)
      return -1
    elsif nums[mid_index] == target
      return mid_index
    elsif nums[mid_index] > target
      mid_index -= 1
    elsif nums[mid_index] < target
      mid_index += 1
    end
  end
end

# nums = [-1,0,3,5,9,12]
# target = 9

# nums = [-1,0,3,5,9,12]
# target = 2

# nums = [-1,0,3,5,9,12]
# target = 13

# nums = [2,5]
# target = 0
nums = [5]
target = 5



p search(nums,target)
