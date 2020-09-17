//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { config } from "process";

export const isIsogram = (str) => {
    str = str.toLowerCase().split('').sort();
    for(var i = 0; i < str.length - 1; i++){
        if(str[i] === ' ' || str[i] === '-'){
          continue;
        }
        if(str[i] === str[i+1]){
            return false;
        }
    }
    return true;
};
