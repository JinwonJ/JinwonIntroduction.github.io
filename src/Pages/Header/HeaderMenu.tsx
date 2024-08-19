import React from "react";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";
import "./HeaderMenu.scss";
const HeaderMenu = () => {
  return (
    <div id="HeaderMenu">
      {HeaderMenuItem.map((item) => (
        <div className="MenuList">
          <div className="MenuListItem">{item.Title}</div>
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
