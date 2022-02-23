# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
  # two pointers algo
  # set first pointer as start of array and second pointer as last of array
  first_index = 0
  sec_index = numbers.length - 1
  loop do
    # return index if the numbers adds up to target
    if numbers[first_index] + numbers[sec_index] == target
      return [first_index+1, sec_index+1]
    # move first pointer to the right of array if the sum is smaller then target
    elsif numbers[first_index] + numbers[sec_index] < target
      first_index += 1
    # move second pointer to the left if sum is larger then target
    elsif numbers[first_index] + numbers[sec_index] > target
      sec_index -= 1
    end
  end
end

# numbers = [2,7,11,15]
# target = 9

# numbers = [-1,0]
# target = -1

numbers = [2,3,4]
target = 6

p two_sum(numbers, target)
