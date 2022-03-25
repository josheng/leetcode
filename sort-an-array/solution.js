/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = nums => {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));
    
    return mergeArray(left, right);
};

let mergeArray = (arr1, arr2) => {
    let new_arr = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            new_arr.push(arr1[i]);
            i++;
        }else{
            new_arr.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length){
        new_arr.push(arr1[i]);
        i++;
    }   
    while (j < arr2.length){
        new_arr.push(arr2[j]);
        j++;
    }
    return new_arr;
};
