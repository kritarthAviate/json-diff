# JSON Similarity Score Calculator

This App compares two json objects and gives a score between 0 and 1 as to how similar they are. A score of 1 means the objects are identical.

Checkout the app here:- https://endearing-wisp-cbacd9.netlify.app/

#### How to Install and Run the Project.

After cloning the project, run : `npm install`
To start the app, run : `npm start`

#### Examples of how to Use the Project.

```
first Obj - {"abc": "abc"}
second Obj - {"abc": "abcb"}
// Score is 0.5 since keys are same but values are different
```

```
first Obj - {
    "abc": "[1]",
    "def": "def"
}
second Obj - {
    "abc": "[1]",
    "xxx": "xxx"
}

// Score is 0.3333 since both objects have 1 same key-value pair, the key "def" is missing in ob2 and key "xxx" is missing in ob1
```

#### Scores from sample data in test_data folder

- `BreweriesMaster` and `BreweriesSample1` -> 1.0000
- `BreweriesMaster` and `BreweriesSample2` -> 0.7547
- `BreweriesMaster` and `BreweriesSample3` -> 0.9574
- `BreweriesMaster` and `BreweriesSample4` -> 0.4000
- `BreweriesMaster` and `BreweriesSample5` -> 0.9524
