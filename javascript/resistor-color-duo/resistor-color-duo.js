//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
    let index1 = String(COLORS.indexOf(color1));
    let index2 = String(COLORS.indexOf(color2));
    let add = index1 + index2;
    return Number(add);
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];