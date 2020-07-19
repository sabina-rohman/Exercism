//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  let strArr = str.split('');
  let newStr = '';
  for(let i = strArr.length-1; i >= 0; i--){
      newStr += strArr[i];
  }
  return newStr;
};
