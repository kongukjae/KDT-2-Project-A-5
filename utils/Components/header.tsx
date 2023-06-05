import React from "react";
import style from "../../src/views/css/style.module.css"


interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={style.header}>
      <div className="head_text">{title}</div>
    </div>
  );
};

export default Header;
