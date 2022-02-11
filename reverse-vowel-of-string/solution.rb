# @param {String} s
# @return {String}
def reverse_vowels(s)
  # break string into array
  # if contain vowel, record index into array
  # retrieve the vowels and put into another array
  # reverse the array
  # replace the index with reversed vowel
  vowel_index = []
  vowel_array = []
  string_array = s.chars
  string_array.each_with_index do |letter, index|
    if letter.match?(/[aeiouAEIOU]/)
      vowel_array << letter
      vowel_index << index
    end
  end
  rev_vowel = vowel_array.join.reverse.chars
  vowel_index.each_with_index do |vindex, index|
    string_array[vindex] = rev_vowel[index]
  end
  string_array.join
end

reverse_vowels("leetcode")
