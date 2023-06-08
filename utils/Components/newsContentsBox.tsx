import React from "react";

interface NewsContentsBoxProps {
  NewsPaper: string;
  NewsThumbnail: string;
  NewsTitleText: string;
}

export default function NewsContentsBox(props: NewsContentsBoxProps) {
  const { NewsPaper, NewsThumbnail, NewsTitleText } = props;

  return (
    <div className="newsContentsBox">
      <div className="newsPaper">{NewsPaper}</div>
      <div className="newsThumbnail">{NewsThumbnail}</div>
      <div className="newsTitleText">{NewsTitleText}</div>
    </div>
  );
}
