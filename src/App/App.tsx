// import Header from "../Pages/Header/Header.tsx";
// import Introduction from "../Pages/Introduction/Introduction.tsx";
// import MainPage from "../Pages/MainPage/MainPage.tsx";
// import "./App.scss";
// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { changeLanguage } from "./Redux/LanguageType/TranslateSlice.tsx";
// import { RootState } from "./Redux/Store.tsx";

// const App = () => {
//   const dispatch = useDispatch();

//   const language = useSelector((state: RootState) => state.translate.language);

//   const handleChangeLanguage = () => {
//     const newLanguage = language === "en" ? "ko" : "en";
//     dispatch(changeLanguage(newLanguage));
//   };
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/introduction" element={<Introduction />} />
//       </Routes>
//       <button className="TranslateButton" onClick={handleChangeLanguage}>
//         {language === "en" ? "En" : "Kr"}
//       </button>
//     </div>
//   );
// };

// export default App;

import Header from "../Pages/Header/Header.tsx";
import Introduction from "../Pages/Introduction/Introduction.tsx";
import MainPage from "../Pages/MainPage/MainPage.tsx";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "./Redux/LanguageType/TranslateSlice.tsx";
import { RootState } from "./Redux/Store.tsx";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.translate.language);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsPageLoaded(false); // 페이지 로드 시작
      const timer = setTimeout(() => {
        setIsPageLoaded(true); // 페이지 로드 완료
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setIsPageLoaded(true);
    }
  }, [location.pathname]);

  // 언어 변경 핸들러
  const handleChangeLanguage = () => {
    const newLanguage = language === "en" ? "ko" : "en";
    dispatch(changeLanguage(newLanguage));
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>

      {/* 페이지가 로드된 후에만 버튼을 표시 */}
      {isPageLoaded && (
        <button className="TranslateButton" onClick={handleChangeLanguage}>
          {language === "en" ? "En" : "Kr"}
        </button>
      )}
    </div>
  );
};

export default App;
