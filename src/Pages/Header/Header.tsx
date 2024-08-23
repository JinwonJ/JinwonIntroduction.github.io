import React from "react";
import HeaderMenu from "./HeaderMenu.tsx";
import "./Header.scss";
const Header = () => {
  return (
    <div id="Header">
      <div className="HeaderTitleWrap">
        <div className="HeaderTitle">Jinwon Introducton & Player</div>
        <button className="SearchButton">
          <img className="SearchIcon" src="../images/SearchIcon.png" alt="Search" />
        </button>
      </div>
      <div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export default Header;
