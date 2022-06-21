const analyzeArray = (array) => {
  const sum = array.reduce((prevValue, currValue) => prevValue + currValue, 0);

  const arrayLength = array.length;

  array.sort();

  const min = array[0];

  const max = array[arrayLength];

  return {
    average: sum / arrayLength,
    min,
    max,
    arrayLength,
  };
};

module.exports = analyzeArray;
