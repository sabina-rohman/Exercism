//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(values) {
    this.values = values;
  }

  get scores() {
    return this.values;
  }

  get latest() {
    return this.values[this.values.length - 1];
  }

  get personalBest() {
    return Math.max(...this.values);
  }

  get personalTopThree() {
    const bestThree = [];
    const newArr = [...this.values].sort().reverse();

    if(newArr.length < 4){
      return newArr;
    }

    for(let i = 0; i < 3; i++){
      let maxScore = Math.max(...newArr);
      bestThree.push(maxScore);
      let maxScoreIndex = newArr.indexOf(maxScore);
      newArr.splice(maxScoreIndex, 1);
    }
    return bestThree;

  }
}
