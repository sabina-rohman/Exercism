//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  const gigaseconds = Math.pow(10, 12)
  const time = moment.getTime() + gigaseconds

  return new Date(time)
};

