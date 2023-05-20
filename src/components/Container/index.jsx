import "./styles.css";
import { useState } from "react";
import { compareJSON } from "../../utils";
const Container = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      if (!input1 || !input2) {
        throw new Error("Both inputs are required for comparision!");
      }
      try {
        JSON.parse(input1);
      } catch {
        throw new Error("Invalid JSON at first input!");
      }
      try {
        JSON.parse(input2);
      } catch {
        throw new Error("Invalid JSON at second input!");
      }
      const [sameCount, diffCount] = compareJSON(
        JSON.parse(input1),
        JSON.parse(input2)
      );
      const result = (1 - diffCount / (sameCount + diffCount)).toFixed(4);
      setResult(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (event, setter) => {
    setError("");
    setResult("");
    setter(event.target.value);
  };

  return (
    <>
      <p className="heading">JSON Similarity Score Calculator</p>
      <form onSubmit={handleSubmit}>
        <div className="inputOutput">
          <div className="textArea">
            <textarea
              rows={30}
              cols={60}
              value={input1}
              onChange={(e) => handleInputChange(e, setInput1)}
              placeholder={"Enter JSON to compare"}
            />
          </div>
          <div className="buttonWithText">
            <button type="submit" className="submitButton">
              Compare
            </button>
            {!!error?.length && <p className="error">{error}</p>}
            {<p className="result">{result}</p>}
          </div>
          <div className="textArea">
            <textarea
              rows={30}
              cols={60}
              value={input2}
              onChange={(e) => handleInputChange(e, setInput2)}
              placeholder={"Enter JSON to compare"}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Container;
