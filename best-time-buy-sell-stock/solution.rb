# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  min_value = prices.first
  profit = 0

  # 1.upto(prices.length - 1) do |index|
  #   profit = prices[index] - min_value if (prices[index] - min_value) > profit
  #   min_value = prices[index] if prices[index] < min_value
  # end
  prices.each do |value|
    profit = value - min_value if (value - min_value) > profit
    min_value = value if value < min_value
  end
  profit
end

# prices = [7,1,5,3,6,4]
prices = [2,4,1]

p max_profit(prices)
