import React from "react";

interface NewsContentsBoxProps {
  NewsContentsBoxNewsPaper: string;
  NewsContentsBoxThumbnail: string;
  NewsContentsBoxTitleText: string;
}

export default function NewsContentsBox(props: NewsContentsBoxProps) {
  const {
    NewsContentsBoxNewsPaper,
    NewsContentsBoxThumbnail,
    NewsContentsBoxTitleText,
  } = props;

  return (
    <div className="newsContentsBox">
      <div className="NewsContentsBoxNewsPaper">{NewsContentsBoxNewsPaper}</div>
      <div className="NewsContentsBoxThumbnail">{NewsContentsBoxThumbnail}</div>
      <div className="NewsContentsBoxTitleText">{NewsContentsBoxTitleText}</div>
    </div>
  );
}
