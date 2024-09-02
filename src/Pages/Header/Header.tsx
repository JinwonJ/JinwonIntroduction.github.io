import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu.tsx";
import "./Header.scss";
import { PC, Mobile } from "../../MediaQuery/MediaQuery.tsx";
import Sidebar from "../SideBar/SideBar.tsx";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const basename = process.env.PUBLIC_URL || "";
  const handleNavigateHome = () => {
    const isProduction = process.env.NODE_ENV === "production";
    // 배포 환경일 때
    if (isProduction) {
      window.location.href = `${window.location.origin}/JinwonIntroduction.github.io/`;
    }
    // 개발 환경일 때
    else {
      navigate("/");
    }
  };
  return (
    <>
      <PC>
        <div id="Header" className="HeaderDesktop">
          <div className="HeaderTitleWrap">
            <div
              className="HeaderTitle"
              onClick={() => {
                handleNavigateHome();
              }}
            >
              Jinwon Introduction & Player
            </div>
            <button className="SearchButton">
              <img className="SearchIcon" src=" images/SearchIcon.png" alt="Search" />
            </button>
          </div>
          <div>
            <HeaderMenu />
          </div>
        </div>
      </PC>
      <Mobile>
        <div id="Header" className="HeaderMobile">
          <div className="HeaderTitleWrap">
            <div
              className="HeaderTitle"
              onClick={() => {
                handleNavigateHome();
                closeSidebar();
              }}
            >
              Jinwon Introduction & Player
            </div>
            <button className="SearchButton" onClick={openSidebar}>
              <img className="SearchIcon" src="images/MobileMenu.png" alt="Menu" />
            </button>
          </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </Mobile>
    </>
  );
};

export default Header;
