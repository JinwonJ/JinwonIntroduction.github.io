import React from "react";
import HeaderMenu from "./HeaderMenu.tsx";
import "./Header.scss";
const Header = () => {
  return (
    <div id="Header">
      <div className="HeaderTitleWrap">
        <div className="HeaderTitle">Jinwon Introducton & Player</div>
        <img className="SearchIcon" src="../images/SearchIcon.png" alt="Search" />
      </div>
      <div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
