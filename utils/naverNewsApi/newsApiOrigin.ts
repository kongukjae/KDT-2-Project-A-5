const axios3 = require("axios");
const dotenv3 = require("dotenv");
dotenv3.config({ path: "../../.env" });

// 요청 URL
const url = "https://openapi.naver.com/v1/search/news.json";

// 요청 헤더
const headers = {
  "X-Naver-Client-Id": process.env.naverDevClientId,
  "X-Naver-Client-Secret": process.env.naverDevClientSec,
};
const YOUR_SEARCH_KEYWORD = "**";
const YOUR_CATEGORY_CODE = "101";
// 요청 파라미터
const params = {
  query: YOUR_SEARCH_KEYWORD, // 검색 키워드
  display: 10, // 가져올 기사 개수 (최대 100)
  start: 1, // 검색 결과 시작 위치 (1부터 시작)
  sort: "date", // 정렬 순서 (similarity: 유사도, date: 날짜)
  category: YOUR_CATEGORY_CODE, // 검색할 카테고리 코드 (정치: 100, 경제: 101, 사회: 102, 생활/문화: 103, 세계: 104, IT/과학: 105)
};

// API 요청 보내기
axios3
  .get(url, { headers, params })
  .then((response: any) => {
    const data = response.data;

    // 검색 결과 확인
    if (data.items) {
      const items = data.items;
      console.log(items);
      items.forEach((item: any) => {
        const title = item.title;
        const link = item.link;
        console.log(`${title} - ${link}`);
      });
    } else {
      console.log("검색 결과가 없습니다.");
    }
  })
  .catch((error: Error) => {
    console.error("API 요청 중 오류가 발생했습니다:", error);
  });
