import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu.tsx";
import "./Header.scss";
import { PC, Mobile } from "../../MediaQuery/MediaQuery.tsx";
import Sidebar from "../SideBar/SideBar.tsx";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
      <PC>
        <div id="Header" className="HeaderDesktop">
          <div className="HeaderTitleWrap">
            <div className="HeaderTitle">Jinwon Introduction & Player</div>
            <button className="SearchButton">
              <img className="SearchIcon" src="../images/SearchIcon.png" alt="Search" />
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
            <div className="HeaderTitle">Jinwon Introduction & Player</div>
            <button className="SearchButton" onClick={openSidebar}>
              <img className="SearchIcon" src="../images/MobileMenu.png" alt="Menu" />
            </button>
          </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </Mobile>
    </>
  );
};

export default Header;
