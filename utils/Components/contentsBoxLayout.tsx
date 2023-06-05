import React, { useState, useEffect } from "react";
import Thumbnail from "./thumbnail";

import boxStyle from "../../src/views/css/contentsBox.module.css";

export default () => {
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);

  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 컴포넌트를 널어 자료 화면을 띄운다.
  useEffect(() => {
    addTagToLayout(<Thumbnail />);
  }, []);

  return (
    <>
      <div className={boxStyle.contentBox}>{showLayout}</div>
    </>
  );
};
