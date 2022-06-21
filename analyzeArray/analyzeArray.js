const analyzeArray = (array) => {
  const sum = array.reduce((prevValue, currValue) => prevValue + Number(currValue), 0);

  const arrayLength = array.length;

  array.sort((a, b) => a - b);

  const min = Number(array[0]);

  const max = array[arrayLength - 1];

  return {
    average: sum / arrayLength,
    min,
    max,
    length: arrayLength,
  };
};

module.exports = analyzeArray;
