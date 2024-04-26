function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
     nums = nums.filter((num, index) => num > 0 && nums.indexOf(num) === index);
    
    // Sort the array
    nums.sort((a, b) => a - b);

    let missing_num = 1;
    for (const num of nums) {
        if (num === missing_num) {
            missing_num++;
        } else {
            return missing_num;
        }
    }
    return missing_num;
  }
  
  module.exports = smallestMissingPositiveInteger;

