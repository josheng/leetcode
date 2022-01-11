# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  # return false if x is not a int
  return false if x.integer? != true
  # return true if x is just a single int
  return true if x.to_s.length == 1

  # convert int to string for comparison
  x_string = x.to_s
  # create empty array to store results of comparison
  check_string_array = []

  x_string.length.times do |index|
    # stop the comparison if the length is <= 1
    if x_string.length <= 1
      break
    else
      if x_string[0] == x_string[-1]
        # if first and last index matches, remove them from string
        check_string_array << true
        x_string.delete_prefix!(x_string[0])
        x_string.delete_suffix!(x_string[-1])
      else
        return false
      end
    end
  end
  check_array(x_string.length, check_string_array)

end

def check_array(length, array)
  # if array does not contain false, it is a palindrome number
  return true if length <= 1 && array.include?(false) == false
end
