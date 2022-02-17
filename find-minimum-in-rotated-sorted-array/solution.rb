# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
  # nums.sort.first
  return nums.first if nums.first < nums.last
  return nums.first if nums.length == 1

  low = 0
  high = nums.length - 1
  while true
    # find the middle index of the array
    mid = ((high - low) / 2) + low
    # set low to mid if the lower index element is lesser then middle index element
    # because the array is in ascending order, we can assume anything inbetween is in sequence
    if nums[low] < nums[mid]
      low = mid
    # if low index element is greater then middle index, we set high to mid
    # this will allow us to narrow down to the point of rotated array
    elsif nums[low] > nums[mid]
      high = mid
    # if low is equals to mid then we know that we have already reach the point when there is only 2 index left
    # so if low index element is greater then high index element, we have found the point of rotation
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
