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
  counter = 0
  string_array = s.chars
  string_array.each_with_index do |letter, index|
    if letter.match?(/[aeiouAEIOU]/)
      vowel_array << letter
      vowel_index << index
    end
  end
  vowel_index.each do |index|
    string_array[index] = vowel_array.join.reverse.chars[counter]
    counter += 1
  end
  p string_array.join
end

reverse_vowels("aA")
