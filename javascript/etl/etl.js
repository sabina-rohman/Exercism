//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (obj) => {
  const result = {};
  for(const key in obj){
    const values = obj[key];
    for(const value of values){
      result[value.toLowerCase()] = Number(key);
    }
  }
  return result;
};

