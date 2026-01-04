/**
 * given an array of numbers. calculate the product of ith element except self. ex: in below array product at 0th element is product of elements at index 1,2,3, similarly for other indexes. do this without division. the product at any index is product of it's prefix and suffix.
 * numArr = [1,2,3,4] => output= [24,12,8,6]
 */

/**
 * NOTES:
 *  a) if there are 2 zeros in input array then result = Array(numArr.length).fill(0). meaning output is array with all zeros.
 *  ex: [1,2,0,4,8,0,9] = [0,0,0,0,0,0,0]
 *  b) if there are 1 zeros then calculate the product of all non-zeros numbers and fill the array with 0 except the index where the original zero was found. here we need to place the calculated product.
 * ex: [1,2,0,4] = [0,0,8,0]
 * c) if allowed, division method will work only when there are no zeros. else it will result in NaN. LOL. thats's the catch.
 */

function productOfArrayExceptSelf(nums) {
  let leftProduct = 1;
  let output = Array(nums.length).fill(1);
  //we will fill the out put with all the left product and reuse it for right product
  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  return output;
}
const result = productOfArrayExceptSelf([1, 2, 0, 4, 9]);
console.log("productOfArrayExceptSelf", result);

//using division method
// let answer = 1;
// function usingDivisionMethod(nums) {
//   const allProduct = nums.map((ele) => {
//     answer = answer * ele;
//     return answer;
//   });
//   console.log("checking the product", answer);
//   const output = Array(nums.length).fill(1);
//   nums.forEach((n, i) => {
//     output[i] = answer / n;
//   });

//   return output;
// }

// const result = usingDivisionMethod([1, 2, 3, 4]);
// console.log("usingDivisionMethod", result);
