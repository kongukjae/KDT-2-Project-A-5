import React, { useEffect, useState } from "react";
import "@dotlottie/player-component";
import styles from "../../src/views/css/loading.module.css";

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
            <div className="newsInformation">
              <div className="newsContentsBox" font-size="11px">
                <a href={element.link} target="_blank">
                  <div className="newsThumbnail">
                    <img
                      className="newsImg"
                      src={element.thumbnail}
                      alt="thumbnail"
                    />
                  </div>
                  <div className="newsTitle">{element.title}</div>
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.loading}>
          <dotlottie-player
            src="../../src/models/loading.lottie"
            autoplay
            loop
            style={{ width: "50%", height: "100%" }}
          />
        </div>
      )}
    </>
  );
};

export default newsAPI;
