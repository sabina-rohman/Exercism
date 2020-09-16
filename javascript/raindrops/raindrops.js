//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  const n3 = 'Pling';
  const n5 = 'Plang';
  const n7 = 'Plong';

  let result = '';

  if(num % 3 === 0){
    result += n3;
  }
  if(num % 5 === 0){
    result += n5;
  }
  if(num % 7 === 0){
    result += n7;
  }
  
  return result ? result : num.toString();
};
