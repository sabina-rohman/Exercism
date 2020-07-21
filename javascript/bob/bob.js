//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  if(isEmpty(message)){
    return 'Fine. Be that way!'
  }
 else if(isAllCaps(message) && questions(message)){
    return 'Calm down, I know what I\'m doing!';
 }
 else if(isAllCaps(message)){
    return 'Whoa, chill out!'
  } else if(questions(message)){
    return 'Sure.'
  } 
   else {
    return 'Whatever.'
  }
};

const isAllCaps = (str) => {
  return isAlpha(str) && str === str.toUpperCase();
}

const questions = (str) => {
  return str.endsWith('?');
}

const isEmpty = (str) => {
  return str.trim() === "";
}

const isAlpha = (str) => {
   return str
    .split('')
    .map(val => (((val >= 'a') && (val <= 'z')) || ((val >= 'A') && (val <= 'Z'))))
    .includes(true)
}