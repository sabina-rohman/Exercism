//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (str1, str2) => {
  
  if (str1.length === 0 && str2.length !== 0){
    throw 'left strand must not be empty';
  }
  else if(str1.length !== 0 && str2.length === 0){
    throw 'right strand must not be empty';
  }
  else if(str1.length !== str2.length) {
    throw 'left and right strands must be of equal length';
  }

  let count = 0;
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      count++;
    }
  }
  return count;
};
