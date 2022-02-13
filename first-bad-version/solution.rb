# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
    return 1 if is_bad_version(1) == true
    low = 1
    high = n
    while true
        mid = ((high - low) / 2) + low
        if mid == low && is_bad_version(high)
            return high
        elsif is_bad_version(mid)
            high = mid
        else
            low = mid
        end
    end
end
