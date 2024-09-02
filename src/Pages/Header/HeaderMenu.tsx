import React, { useState } from "react";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";
import "./HeaderMenu.scss";
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const onMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="HeaderMenu">
      {HeaderMenuItem.map((item, index) => (
        <div key={index} className="MenuList" onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>
          <button className="MenuListItemButton">
            <div
              className="MenuListItem"
              onClick={() => {
                if (item.TitleUrl) {
                  navigate(item.TitleUrl);
                } else {
                  console.error("URL is undefined or invalid");
                }
              }}
            >
              {item.Title}
            </div>
          </button>
          {hoveredIndex === index && item.SubTitle && (
            <div className="SubTitle" onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>
              {item.SubTitle}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
