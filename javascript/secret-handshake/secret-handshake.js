//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (decimalnum) => {
    const actions = ['wink', 'double blink', 'close your eyes', 'jump']
    const binaryNum = decimalnum.toString(2);
    const binaryArr = binaryNum.split("").reverse()
    const resultArr = [];
    for(var i = 0; i < binaryArr.length; i++){
      if(i === 4){
        if(binaryArr[i] === '1'){
          return resultArr.reverse();
        }
      }
      if(binaryArr[i] === '1'){
        resultArr.push(actions[i]);
      }
    }
    return resultArr;
};
