import React, { useState } from "react";
import "./SideBar.scss";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className={`Sidebar ${isOpen ? "open" : ""}`}>
      <button className="CloseButton" onClick={onClose}>
        &times;
      </button>
      <ul className="SidebarMenu">
        {HeaderMenuItem.map((Item: any, index: any) => (
          <li
            key={index}
            onClick={() => {
              if (Item.TitleUrl) {
                navigate(Item.TitleUrl);
                onClose();
              } else {
                console.error("URL is undefined or invalid");
              }
            }}
          >
            <a> {Item.Title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
