import { useState } from "react";
import "./palindromeChecker.css";

const PalindromeChecker = ({ onCheck }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheck(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Please enter your text input to see if it is a palindrome:</h2>
      <input
        id="text-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button id="check-btn" type="submit">Check</button>
    </form>
  );
};

export default PalindromeChecker;