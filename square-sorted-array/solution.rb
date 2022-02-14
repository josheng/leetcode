# @param {Integer[]} nums
# @return {Integer[]}
def sorted_squares(nums)
  square_array = []
  nums.each { |num| square_array << num.abs2 }
  square_array.sort
end

# nums = [-4,-1,0,3,10]
nums = [-7,-3,2,3,11]

p sorted_squares(nums)
