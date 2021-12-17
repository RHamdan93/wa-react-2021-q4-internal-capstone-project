const replaceInArray = (item, idx, array) => {
  return [
    ...array.slice(0, idx),
    item,
    ...array.slice(Math.min(array.length, idx + 1), array.length),
  ];
};

export default replaceInArray;
