/**
 * Q: [1,2,3,1] => true
 * Q: [1,2,3,4] => false
 */

function containsDuplicate(nums) {
  const map = {};
  for (const element of nums) {
    if (element in map) {
      map[element] = map[element] + 1;
      return true;
    } else {
      map[element] = 1;
    }
  }

  return false;
}

const result = containsDuplicate([1, 2, 3, 4]);
console.log("final result", result);
