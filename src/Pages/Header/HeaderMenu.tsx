import React, { useState } from "react";
import { HeaderMenuItem } from "../HeaderMenuItem.tsx";
import "./HeaderMenu.scss";

const HeaderMenu = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onMouseHover = (index: number) => {
    setHoveredIndex(index);
  };

  const offMouseHover = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="HeaderMenu">
      {HeaderMenuItem.map((item, index) => (
        <div key={index} className="MenuList" onMouseOver={() => onMouseHover(index)} onMouseOut={offMouseHover}>
          <div className="MenuListItem">{item.Title}</div>
          {hoveredIndex === index && item.SubTitle && <button className="SubTitle">{item.SubTitle}</button>}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
