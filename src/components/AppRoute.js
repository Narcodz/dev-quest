import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PalindromeChecker from "./PalindromeChecker";
import FlattenArray from "./FlattenArray";
import DeepCopyDemo from "./DeepCopyDemo";
import ButtonListeners from "./ButtonListeners";
import UserDataComponent from "./UserDataComponent";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palindrome" element={<PalindromeChecker />} />
        <Route path="/flatten" element={<FlattenArray />} />
        <Route path="/deep-copy" element={<DeepCopyDemo />} />
        <Route path="/button-listeners" element={<ButtonListeners />} />
        <Route path="/optimize-user-fetch" element={<UserDataComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
