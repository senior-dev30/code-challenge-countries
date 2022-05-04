import React from "react";
import { Routes, Route } from "react-router-dom";
import CountryScreen from "../pages/coutry-screen";
import HomeScreen from "../pages/home-screen";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path=":id" element={<CountryScreen />} />
    </Routes>
  );
};
