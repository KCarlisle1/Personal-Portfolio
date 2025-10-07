import { useState } from "react";
import "./App.css";
import PalindromeChecker from "./components/palindromeChecker.jsx";

function App() {
  const [result, setResult] = useState(""); //formatted like [stateVariable, setStateFuncton] = useState(intitialValue)
  const [infoShowing, setInfoShowing] = useState(false);

  const palindrome = (str) => {
    const upperAlnum = str.toUpperCase().match(/[A-Z0-9]/g);
    if (!upperAlnum) return false;
    return upperAlnum.join("") === upperAlnum.reverse().join("");
  };

  const handleCheck = (input) => {
    if (!input) {
      alert("Please input a value");
      return;
    }
    const isPalindrome = palindrome(input);
    setResult( //for updating state with the result of this ternary
      isPalindrome
        ? `"${input}" is a palindrome.`
        : `"${input}" is not a palindrome.`
    );
  };

  const toggleInfo = () => {
    setInfoShowing(!infoShowing);
  };

  return (
    <div>
      <h1>Palindrome Checker!</h1>
      <PalindromeChecker onCheck={handleCheck} />
      <p id="result">{result}</p>
      <div id="info-div">
        <button id="info-btn" onClick={toggleInfo}>
          {infoShowing ? "Hide Info" : "Show Info"}
        </button>
        {infoShowing && (
          <p id="info-paragraph">
            A palindrome is a word, phrase, number, or other sequence of
            characters that reads the same forward and backward (ignoring
            spaces, punctuation, and capitalization). Examples include
            'racecar', 'level', etc...
          </p>
        )}
      </div>
    </div>
  );
}

export default App;