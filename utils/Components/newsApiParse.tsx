import React, { useEffect, useState } from "react";
import axios from "axios";

const newsAPI = (): JSX.Element => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const requestNews = async () => {
      const request = await axios.get("/news");
      const result = request.data;
      console.log(result);
      setNews(result);
    };
    requestNews();
  }, []);

  // const decodeHtmlEntitles = (text: string) => {
  //   const parse = new DOMParser();
  //   const decodedString = parse.parseFromString(text, "text/html").body
  //     .textContent;
  //   return decodedString;
  // };

  return (
    <>
      {news.length > 0 ? (
        news.map((element: { [key: string]: string }) => {
          return (
            <div className="newsContentsBox" font-size="11px">
              <div className="newsThumbnail">
                <img
                  className="newsImg"
                  src={element.thumbnail}
                  alt="기사의 썸네일 사진입니다"
                />
              </div>
              <div className="newsTitle">
                <a href={element.link}>{element.title}</a>
              </div>
            </div>
          );
        })
      ) : (
        <div>데이터 준비중 'ㅡ' /</div>
      )}
    </>
  );
};

export default newsAPI;
