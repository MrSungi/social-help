import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Theme = ({ text, help }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Link
      className={isHovering ? "cardHovered" : "card"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      to={"/info"}
      state={{ help: help }}
    >
      <div>{text}</div>
    </Link>
  );
};

export default Theme;
