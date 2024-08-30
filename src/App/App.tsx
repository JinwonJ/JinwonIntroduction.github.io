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
        <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage />} />
        <Route path={`${process.env.PUBLIC_URL}/introduction`} element={<Introduction />} />
      </Routes>
    </div>
  );
};

export default App;
