# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  return 0 if nums[0] > target
  low = 0
  high = nums.length - 1

  while true
    mid = ((high - low) / 2) + low
    if mid == low && (nums[high] == target || nums[low] < target && nums[high] > target)
      return high
    elsif mid == low && nums[high] < target
      return high + 1
    elsif nums[mid] == target
      return mid
    elsif nums[mid] > target
      high = mid
    elsif nums[mid] < target
      low = mid
    end
  end
end

# nums = [1,3]
# target = 3
nums = [1,3,5,6]
target = 3

p search_insert(nums,target)
# high = 1
# low = 0
# mid = 1 - 0 = 1 / 2 = 0 + 0 = 0
# nums[0] = 1
# 1 < 3
# low = 0
