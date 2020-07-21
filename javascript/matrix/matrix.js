//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.row = str
      .split('\n')
      .map(son => son
                      .split(' ')
                      .map(val => (Number(val))))
                      
  }

 get rows() {
    return this.row
  }

  get column() {
      return this.row[0].map((_, colIndex) => array.map(row => row[colIndex]));
  }
  
}
