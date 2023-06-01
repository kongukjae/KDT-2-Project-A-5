import React from "react";

export default function Header({headLiner} : {headLiner : string}) {
  return (
    <>
      <div className="header">
        <div className="head_text">{headLiner}</div>
      </div>
    </>
  );
}
