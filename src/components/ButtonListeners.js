import React, { useEffect, useState } from "react";
import TileComponent from "../core/TileComponent";

const ButtonListeners = () => {
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    // Select all button elements within this component
    const buttons = document.querySelectorAll(".activity-button");

    const handleButtonClick = (e) => {
      const buttonText = e.target.innerText || "Unnamed Button";
      const timestamp = new Date().toLocaleTimeString();
      const newActivity = { text: `Clicked "${buttonText}"`, time: timestamp };

      setActivityLog((prevLog) => [newActivity, ...prevLog]);
    };

    buttons.forEach((button) =>
      button.addEventListener("click", handleButtonClick)
    );

    return () => {
      buttons.forEach((button) =>
        button.removeEventListener("click", handleButtonClick)
      );
    };
  }, []);

  return (
    <TileComponent>
      <h2 className="text-lg font-semibold mb-6 text-center">
        User Activity Monitor
      </h2>

      <div className="text-center mb-4">
        <p className="text-gray-600">Click any button below to log activity.</p>
      </div>

      {/* Sample Buttons */}
      <div className="flex space-x-4 justify-center mb-6">
        <button className="activity-button px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition">
          Button 1
        </button>
        <button className="activity-button px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
          Button 2
        </button>
        <button className="activity-button px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
          Button 3
        </button>
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">
          Activity Log
        </h3>
        {activityLog.length === 0 ? (
          <p className="text-gray-500 text-center">No activity recorded yet.</p>
        ) : (
          <ul className="space-y-2">
            {activityLog.map((activity, index) => (
              <li
                key={index}
                className="p-3 bg-blue-100 rounded-lg shadow-sm animate-pulse hover:bg-blue-200 transition"
              >
                <p className="text-blue-800 font-medium">{activity.text}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </TileComponent>
  );
};

export default ButtonListeners;
