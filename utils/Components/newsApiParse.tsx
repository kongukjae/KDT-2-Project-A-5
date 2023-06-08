import React, { useEffect, useState } from "react";
import axios from "axios";

const newsAPI = (): JSX.Element => {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    const requestNews = async() => {
      const request = await axios.get('/news');
      const result = request.data.items;
      console.log(result);
      setNews(result);
    }
    requestNews();
  }, [])
  return (
    <div>
      {(news.length > 0)? news.map((element:{[key:string]:string})=>{return <div>{element.title}</div>}) : <div>데이터 준비중 'ㅡ' /</div>}
    </div>
  )
};

export default newsAPI;
