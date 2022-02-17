# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  num_hash = {}
  nums.each_with_index do |num, index|
    if num_hash.has_value?(target-num) && num_hash.key(target-num) != index
      return [num_hash.key(target-num), index]
    end
    num_hash[index] = num
  end
end
