import React, { useState, useEffect } from "react";

import NewsThumbnail from "./newsThumbnail";
export default () => {
  const [showLayout, setShowLayout] = useState<JSX.Element[]>([]);

  const addTagToLayout = (tag: JSX.Element) => {
    setShowLayout((prevLayout: JSX.Element[]) => [...prevLayout, tag]);
  };

  // 컴포넌트를 널어 자료 화면을 띄운다.
  useEffect(() => {
    addTagToLayout(
      <NewsThumbnail
        newsContentsBoxNewsPaper="한국경제"
        NewsContentsBoxThumbnail="썸네일"
        NewsContentsBoxTitleText="의견 갈린 연준, 환율 1320원 돌파..."
      />
    );
  }, []);

  return (
    <>
      <div className="contentBox">{showLayout}</div>
    </>
  );
};
