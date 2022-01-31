
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  } 

  return matrix.reduce((acc, elem, index) => {
      if (index % 2 == 0) {
          acc.push(...elem);
      } else {
          acc.push(...elem.reverse());
      } 
      return acc;
  }, []);
}


