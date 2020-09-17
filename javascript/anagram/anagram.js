//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (str, arr) => {
  return arr.filter(word => isAnagram(str.toLowerCase(), word.toLowerCase()));
}

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }
  return arrangeAlphabetically(str1) === arrangeAlphabetically(str2);
}

const arrangeAlphabetically = str => 
str.split('').sort().join('');
