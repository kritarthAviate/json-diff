const data1 = {
  state: "MT",
  "state-bird": "Western Meadowloark",
  "state-fish": "Cutthroat Trout",
  breweries: [
    {
      name: "Madison River Brewing",
      location: {
        address: "20900 Frontage Rd Building B",
        city: "Belgrade",
        state: "MT",
        "zip-code": "59714",
      },
      "food-available": false,
      beers: [
        {
          name: "Salmon Fly Honey Rye",
          color: "Gold",
          "international-bitterness-units": 12,
          "alcohol-by-volume": 0.04,
        },
        {
          name: "Copper John Scotch Ale",
          color: "Copper",
          "international-bitterness-units": 35,
          "alcohol-by-volume": 0.055,
        },
        {
          name: "Dropper IPA",
          color: "Amber",
          "international-bitterness-units": 108,
          "alcohol-by-volume": 0.065,
        },
      ],
    },
    {
      name: "Bozeman Brewing",
      location: {
        address: "504 N. Broadway",
        city: "Bozeman",
        state: "MT",
        "zip-code": "59715",
      },
      "food-available": true,
      beers: [
        {
          name: "Bozone Amber Ale",
          color: "Amber",
          "international-bitterness-units": 29,
          "alcohol-by-volume": 0.054,
        },
        {
          name: "Plum Street Porter",
          color: "Dark",
          "international-bitterness-units": 52,
          "alcohol-by-volume": 0.06,
        },
      ],
    },
  ],
};
const data2 = {
  state: "MT",
  breweries: [
    {
      name: "Madison River Brewing",
      "food-available": false,
      "beer-list": [
        {
          name: "Salmon Fly Honey Rye",
          "international-bitterness-units": 12,
          "alcohol-by-volume": 0.04,
        },
        {
          name: "Copper John Scotch Ale",
          color: "Copper",
          "international-bitterness-units": 35,
          "alcohol-by-volume": 0.055,
        },
        {
          name: "Dropper IPA",
          color: "Amber",
          "international-bitterness-units": 108,
          "alcohol-by-volume": 0.065,
        },
      ],
    },
    {
      name: "Bozeman Brewing",
      address: {
        streetaddress: "504 N. Broadway",
        city: "Bozeman",
        "zip-code": "59715",
      },
      "food-available": true,
      "beer-list": [
        {
          name: "Bozone Amber Ale",
          color: "Amber",
          "international-bitterness-units": 29,
          "alcohol-by-volume": 0.054,
        },
        {
          name: "Plum Street Porter",
          color: "Dark",
          "international-bitterness-units": 52,
          "alcohol-by-volume": 0.06,
        },
      ],
    },
  ],
};
const compareJSON = (json1, json2) => {
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
        const [sameC, diffC] = compareJSON(value1, value2);
        sameCount += sameC;
        diffCount += diffC;
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
const [sameCount, diffCount] = compareJSON(data1, data2);
console.log({ sameCount, diffCount });
console.log(1 - diffCount / (sameCount + diffCount));
