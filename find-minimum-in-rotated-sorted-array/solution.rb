# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
  # nums.sort.first
  return nums.first if nums.first < nums.last
  return nums.first if nums.length == 1

  low = 0
  high = nums.length - 1
  while true
    mid = ((high - low) / 2) + low
    if nums[low] < nums[mid]
      low = mid
    elsif nums[low] > nums[mid]
      high = mid
    elsif low == mid && nums[low] > nums[high]
      # below 2 lines will return number of rotation instead
      # new_array = nums[high..-1]
      # return new_array.length
      return nums[high]
    end
  end
end

# nums = [3,4,5,6,7,8,1,2]
# nums = [2,1]
# nums = [5,1,2,3,4]

p find_min(nums)
