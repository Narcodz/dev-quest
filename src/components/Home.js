import React from "react";
import NavigationButton from "../core/NavigationButton";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 mx-10 border rounded-3xl border-gray-300 pt-10 pb-10 mt-10">
      <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
        DevQuest
      </h1>
      <div className="flex flex-row justify-evenly">
        <NavigationButton
          to="/palindrome"
          bgColor="bg-indigo-400"
          label="Palindrome Checker"
        />
        <NavigationButton
          to="/flatten"
          bgColor="bg-green-400"
          label="Flatten Array"
        />
        <NavigationButton
          to="/deep-copy"
          bgColor="bg-pink-400"
          label="Deep Copy Demo"
        />
        <NavigationButton
          to="/button-listeners"
          bgColor="bg-amber-400"
          label="Button Listeners"
        />
        <NavigationButton
          to="/optimize-user-fetch"
          bgColor="bg-cyan-400"
          label="Optimize User Fetch"
        />
      </div>
    </div>
  );
};

export default Home;
