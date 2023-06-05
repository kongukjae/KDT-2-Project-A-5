import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <div className="head_text">{title}</div>
    </div>
  );
};

export default Header;
