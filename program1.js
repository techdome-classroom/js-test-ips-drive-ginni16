function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
     if (nums.length === 0) return 1;

  const set = new Set(nums.filter(num => num > 0));

  for (let i = 1; ; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  }
  
  module.exports = smallestMissingPositiveInteger;

