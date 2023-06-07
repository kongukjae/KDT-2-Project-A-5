import React, { useState, useEffect } from "react";

interface ContentsBoxProps {
  newsContentsBoxNewsPaper: string;
  NewsContentsBoxThumbnail: string;
  NewsContentsBoxTitleText: string;
}

export default function NewsThumbnail({
  newsContentsBoxNewsPaper,
  NewsContentsBoxThumbnail,
  NewsContentsBoxTitleText,
}: ContentsBoxProps) {
  return (
    <div className="ContentsBox">
      <div className="newsContentsBoxNewsPaper">{newsContentsBoxNewsPaper}</div>
      <div className="NewsContentsBoxThumbnail">{NewsContentsBoxThumbnail}</div>
      <div className="NewsContentsBoxTitleText">{NewsContentsBoxTitleText}</div>
    </div>
  );
}
