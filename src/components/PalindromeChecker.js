import React, { useState } from "react";
import TileComponent from "../core/TileComponent";

const PalindromeChecker = () => {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const palindrome = (input) => {
    const cleanedInput = input.toLowerCase().replace(/\s+/g, "");
    const cleanedReversedInput = cleanedInput.split("").reverse().join("");
    return cleanedReversedInput === cleanedInput;
  };

  const handleCheck = () => setIsPalindrome(palindrome(input));
  const handleClear = () => {
    setInput("");
    setIsPalindrome(null);
  };

  return (
    <TileComponent>
      <h2 className="text-lg font-semibold mb-4 text-center">
        Palindrome Checker
      </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border rounded w-full mb-4"
        placeholder="Enter text"
      />
      <div className="flex justify-center mb-4">
        <button
          onClick={handleCheck}
          className={`ml-2 p-2 rounded text-white ${
            input === "" ? "bg-gray-300" : "bg-blue-500"
          }`}
          disabled={input === ""}
        >
          Check
        </button>
        <button
          onClick={handleClear}
          className={`ml-2 p-2 rounded text-white ${
            input === "" ? "bg-gray-300" : "bg-red-400"
          }`}
        >
          Clear
        </button>
      </div>
      {isPalindrome !== null && (
        <p
          className={`mt-4 text-white p-2 rounded text-center ${
            isPalindrome ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isPalindrome ? "Palindrome" : "Not a Palindrome"}
        </p>
      )}
    </TileComponent>
  );
};

export default PalindromeChecker;
