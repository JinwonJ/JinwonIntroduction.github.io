import Header from "../Pages/Header/Header.tsx";
import Introduction from "../Pages/Introduction/Introduction.tsx";
import MainPage from "../Pages/MainPage/MainPage.tsx";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
};

export default App;
