import React, { useState } from "react";
import "./SideBar.scss";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`Sidebar ${isOpen ? "open" : ""}`}>
      <button className="CloseButton" onClick={onClose}>
        &times;
      </button>
      <ul className="SidebarMenu">
        {HeaderMenuItem.map((Item) => (
          <li>
            <a href="#section1">{Item.Title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
