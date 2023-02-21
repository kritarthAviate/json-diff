export const compareJSON = (json1, json2) => {
  const keys1 = Object.keys(json1);
  const keys2 = Object.keys(json2);
  const combinedKeys = Object.keys({ ...json1, ...json2 });

  let sameCount = 0;
  let diffCount = 0;

  combinedKeys.forEach((key) => {
    if (keys1.includes(key) && keys2.includes(key)) {
      sameCount++;
      const value1 = json1[key];
      const value2 = json2[key];
      if (
        Array.isArray(value1) &&
        Array.isArray(value2) &&
        value1.length === value2.length
      ) {
        const [same, diff] = compareArrayOfJSON(value1, value2);
        sameCount += same;
        diffCount += diff;
      } else if (typeof value1 == "object" && typeof value1 == "object") {
        const [same, diff] = compareJSON(value1, value2);
        sameCount += same;
        diffCount += diff;
      } else if (value1 !== value2) {
        diffCount++;
      }
    } else {
      diffCount++;
    }
  });

  return [sameCount, diffCount];
};

const compareArrayOfJSON = (arr1, arr2) => {
  let sameCount = 0;
  let diffCount = 0;
  arr1.forEach((value1, i) => {
    const [same, diff] = compareJSON(value1, arr2[i]);
    sameCount += same;
    diffCount += diff;
  });
  return [sameCount, diffCount];
};
