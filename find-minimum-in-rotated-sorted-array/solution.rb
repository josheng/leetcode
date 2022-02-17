# @param {Integer[]} nums
# @return {Integer}
def find_min(nums)
    # nums.sort.first
    return nums.first if nums.first < nums.last
    low = 0
    high = nums.length - 1
    while true
      mid = ((high - low) / 2) + low

    end
end

nums = [3,4,5,1,2]
p find_min(nums)
