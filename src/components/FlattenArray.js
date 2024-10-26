import React, { useState } from "react";
import TileComponent from "../core/TileComponent";
import { flattenDeeplyNestedArray } from "../utils/flattenArray";

const FlattenArray = () => {
  const [inputArray, setInputArray] = useState("");
  const [flattenedArray, setFlattenedArray] = useState([]);
  const [error, setError] = useState("");

  const handleFlattenArray = () => {
    try {
      const parsedArray = JSON.parse(inputArray);

      if (!Array.isArray(parsedArray)) {
        throw new Error("Input is not a valid array.");
      }
      setFlattenedArray(flattenDeeplyNestedArray(parsedArray));
      setError("");
    } catch (err) {
      setError("Invalid array format. Please enter a valid nested array.");
      setFlattenedArray([]);
    }
  };

  return (
    <TileComponent>
      <h2 className="text-lg font-semibold mb-6 text-center">
        Flatten Deeply Nested Array
      </h2>
      <div className="flex flex-col items-center gap-4">
        <textarea
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          placeholder='Enter nested array, e.g., ["A", [1, 2, ["B", 3]]]'
          className="p-2 border border-gray-300 rounded w-full max-w-lg h-24"
        ></textarea>
        <button
          onClick={handleFlattenArray}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Flatten Array
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {flattenedArray.length > 0 && (
          <div className="mt-4 p-4 bg-green-100 rounded w-full max-w-lg text-center">
            <h3 className="text-green-600 font-bold mb-2">Flattened Array</h3>
            <p>{JSON.stringify(flattenedArray)}</p>
          </div>
        )}
      </div>
    </TileComponent>
  );
};

export default FlattenArray;
