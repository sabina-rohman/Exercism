//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotide) => {
  var newArr = nucleotide.split('');
  var output = '';
  newArr.forEach(function(letter){
      output += rnaDna[letter];
  })
  return output;
};

const rnaDna = {'C': 'G',
                 'G': 'C',
                 'T': 'A',
                 'A': 'U'
                }
