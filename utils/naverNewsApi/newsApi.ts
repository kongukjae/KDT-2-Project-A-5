import axios from "axios";
import dotenv from "dotenv";
import { response } from "express";
dotenv.config({ path: "../../.env" });

const client_id = `${process.env.naverDevClientId}`; // 네이버 개발자 클라이언트 아이디
const client_secret = `${process.env.naverDevClientSec}`; // 네이버 개발자 클라이언트 시크릿
const query = `경제`;
const displayLength = 1; // 표시할 검색 결과 수
// 검색할 카테고리 코드 (정치: 100, 경제: 101, 사회: 102, 생활/문화: 103, 세계: 104, IT/과학: 105)
const category = 101; // 뉴스 카테고리 코드

const api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
  query
)}&display=${displayLength}&category=${category}`;

axios
  .get(api_url, {
    headers: {
      "X-Naver-Client-Id": `${client_id}`,
      "X-Naver-Client-Secret": `${client_secret}`,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
