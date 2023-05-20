# JSON Similarity Score Calculator [[Link](https://endearing-wisp-cbacd9.netlify.app/)]

## Description
This App compares two json objects and gives a score between 0 and 1 as to how similar they are. A score of 1 means the objects are identical.


## Setup
To run this project, install it locally using yarn:

```
$ npm install
$ npm start
$ yarn start

```

## Tech Stack
Main libraries and frameworks used:
* React
* Javascript


## Explanation

```jsx
const Obj1 = {
    "abc": "abc"
}
const Obj2 = {
    "abc": "abcb"
}
// Score is 0.5 since keys are same but values are different

const Obj1 = {
    "abc": "[1]",
    "def": "def"
}
const Obj2 = {
    "abc": "[1]",
    "xxx": "xxx"
}

// Score is 0.3333 since both objects have 1 same key-value pair, the key "def" is missing in ob2 and key "xxx" is missing in ob1
```


## Scores from sample data in test_data folder

- `BreweriesMaster` and `BreweriesSample1` -> 1.0000
- `BreweriesMaster` and `BreweriesSample2` -> 0.7547
- `BreweriesMaster` and `BreweriesSample3` -> 0.9574
- `BreweriesMaster` and `BreweriesSample4` -> 0.4000
- `BreweriesMaster` and `BreweriesSample5` -> 0.9524
