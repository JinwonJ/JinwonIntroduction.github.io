import React, { useState } from "react";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <div className="MenuListItem">{item.Title}</div>
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
