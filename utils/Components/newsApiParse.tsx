import React, { useEffect, useState } from "react";
import "@dotlottie/player-component";
// import "../../src/views/css/loading";

import axios from "axios";

const newsAPI = (): JSX.Element => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const requestNews = async () => {
      const request = await axios.get("/news");
      const result = request.data;
      setNews(result);
    };
    requestNews();
  }, []);

  return (
    <>
      {news.length > 0 ? (
        news.map((element: { [key: string]: string }) => {
          return (
            <div className="newsContentsBox" font-size="11px">
              <a href={element.link} target="_blank">
                <div className="newsThumbnail">
                  <img
                    className="newsImg"
                    src={element.thumbnail}
                    alt="기사의 썸네일 사진입니다"
                  />
                </div>
                <div className="newsTitle">{element.title}</div>
              </a>
            </div>
          );
        })
      ) : (
        <div>
          <dotlottie-player
            src="../../src/models/loading.lottie"
            autoplay
            loop
            style={{ width: "50%", height: "10%" }}
          />
        </div>
      )}
    </>
  );
};

export default newsAPI;
