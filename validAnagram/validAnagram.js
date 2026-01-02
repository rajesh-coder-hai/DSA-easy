const str1 = "anagram";
const str2 = "nagaram";

//remember for strings str1.split("") is same as [...str1]

function validAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  //======= method 1: using sorting: T(n log n)
  // const sortedS1 = s1.split("").sort().join("");
  // const sortedS2 = s2.split("").sort().join("");
  // console.log("validAnagram---", sortedS1, sortedS2);

  // return sortedS1 === sortedS2;

  //======= method 2: using object/map key count
  const obj1 = new Map();
  const obj2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i];
    const c2 = s2[i];

    obj1.set(c1, (obj1.get(c1) || 0) + 1);
    obj2.set(c2, (obj2.get(c2) || 0) + 1);

    //if going with plain object then
    //  obj1[c1] = (obj1[c1] || 0) + 1;
    //  obj2[c2] = (obj2[c2] || 0) + 1;
  }

  console.log("checking maps", { obj1, obj2 });

  for (const [key, count] of obj1) {
    if (obj2.get(key) !== count) {
      return false;
    }
  }

  // for (let key in obj1) {
  //   if (obj1[key] !== obj2[key]) {
  //     return false;
  //   }
  // }

  return true;
}

const result = validAnagram(str1, str2);
console.log("Result:", result);
