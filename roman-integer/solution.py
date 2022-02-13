class Solution:
    def romanToInt(self, s: str) -> int:
        roman_dict = {"I": 1,"IV": 4,"V": 5,"IX": 9,"X": 10,"XL": 40,"L": 50,"XC": 90,"C": 100,"CD": 400,"D": 500,"CM": 900,"M": 1000}
        year = 0
        while len(s) != 0:
            if roman_dict.get(s[0:2]) == None:
                year += roman_dict.get(s[0:1])
                s = s[1::]
            else:
                year += roman_dict.get(s[0:2])
                s = s[2::]




solution = Solution()
solution.romanToInt("MCMXCIV")
