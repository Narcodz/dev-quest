import React, { useState } from "react";
import TileComponent from "../core/TileComponent";

const DeepCopyDemo = () => {
  const initialDeepObj = { a: 1, b: { c: 2, d: 44 } };
  const initialShallowObj = { a: 2, b: { c: 4, d: 88 } };

  const [deepOriginalObj] = useState(initialDeepObj);
  const [shallowOriginalObj] = useState(initialShallowObj);

  const [deepCopiedObj, setDeepCopiedObj] = useState(
    JSON.parse(JSON.stringify(deepOriginalObj))
  );
  const [shallowCopiedObj, setShallowCopiedObj] = useState({
    ...shallowOriginalObj,
  });

  const handleDeepCopyChange = (newDValue) => {
    setDeepCopiedObj((prevObj) => ({
      ...prevObj,
      b: { ...prevObj.b, d: newDValue },
    }));
  };

  const handleShallowCopyChange = (newDValue) => {
    setShallowCopiedObj((prevObj) => {
      prevObj.b.d = newDValue;
      return { ...prevObj };
    });
  };

  return (
    <TileComponent>
      <h2 className="text-lg font-semibold mb-6 text-center">
        Deep vs. Shallow Copy Comparison
      </h2>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <h3 className="text-blue-600 font-bold mb-4">Deep Copy Scenario</h3>
          <label className="block text-center mb-4">
            <span className="text-gray-700 font-semibold">
              Modify Deep Copy b.d:
            </span>
            <input
              type="number"
              className="border p-2 rounded w-24 text-center ml-2"
              value={deepCopiedObj.b.d}
              onChange={(e) => handleDeepCopyChange(Number(e.target.value))}
            />
          </label>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-48 text-center mb-4">
            <h4 className="text-blue-500 font-bold mb-2">Original (Deep)</h4>
            <p>{JSON.stringify(deepOriginalObj)}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-md w-48 text-center">
            <h4 className="text-blue-600 font-bold mb-2">Deep Copy Result</h4>
            <p>{JSON.stringify(deepCopiedObj)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-green-600 font-bold mb-4">
            Shallow Copy Scenario
          </h3>
          <label className="block text-center mb-4">
            <span className="text-gray-700 font-semibold">
              Modify Shallow Copy b.d:
            </span>
            <input
              type="number"
              className="border p-2 rounded w-24 text-center ml-2"
              value={shallowCopiedObj.b.d}
              onChange={(e) => handleShallowCopyChange(Number(e.target.value))}
            />
          </label>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md w-48 text-center mb-4">
            <h4 className="text-green-500 font-bold mb-2">
              Original (Shallow)
            </h4>
            <p>{JSON.stringify(shallowOriginalObj)}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md w-48 text-center">
            <h4 className="text-green-600 font-bold mb-2">
              Shallow Copy Result
            </h4>
            <p>{JSON.stringify(shallowCopiedObj)}</p>
          </div>
        </div>
      </div>
    </TileComponent>
  );
};

export default DeepCopyDemo;
