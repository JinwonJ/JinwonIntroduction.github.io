import React, { useState } from "react";
import "./SideBar.scss";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`Sidebar ${isOpen ? "open" : ""}`}>
      <button className="CloseButton" onClick={onClose}>
        &times;
      </button>
      <ul className="SidebarMenu">
        <li>
          <a href="#section1">Section 1</a>
        </li>
        <li>
          <a href="#section2">Section 2</a>
        </li>
        <li>
          <a href="#section3">Section 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
