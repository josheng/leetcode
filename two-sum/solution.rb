# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
require 'pry-byebug'

def two_sum(nums, target)
  x = 0
  answer_arr = []
  new_arr = []
  nums.sort.each do |num|
    x = target - num
    y = nums.bsearch do |num|
        num >= x
        end
    if y.nil? == false && num + y == target
        answer_arr << num
        answer_arr << y
        break
    end
  end
  p answer_arr
  new_arr << nums.index(answer_arr[0])
  nums[nums.index(answer_arr[0])] = ''
  new_arr << nums.index(answer_arr[1])
  new_arr
end

nums = [-1,-2,-3,-4,-5]
target = -8

# nums = [3,2,4], target = 6
#
# nums = [3,3]
# target = 6

p two_sum(nums, target)

# def two_sum(nums, target)
#     answer_arr = []
#     answer = []
#     answer_hash = {}
#     new_arr = nums.combination(2).to_a
#     new_arr.each do |x|
#         answer_hash[x.sum] = x
#       if answer_hash.has_key?(target)
#         answer_arr << nums.index(answer_hash[target][0])
#         nums[nums.index(answer_hash[target][0])] = ''
#         answer_arr << nums.index(answer_hash[target][1])
#         break
#       end
#     end
#     answer_arr
# end
