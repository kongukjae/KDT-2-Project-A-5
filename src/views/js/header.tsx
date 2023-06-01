import React, { useState } from "react";

export default function Header() {
  const [title, setTitle] = useState("홈");
  const changeTitle = () => {
    // 새로운 제목으로 변경
    setTitle("페이지 이름 바뀜");
  };

  return (
    <>
      <div className="header">
        <div className="head_text" onClick={changeTitle}>{title}</div>
      </div>
    </>
  );
}
