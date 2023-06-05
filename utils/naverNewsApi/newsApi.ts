const express2 = require("express");
const axios2 = require("axios");
const cheerio = require("cheerio");
const app2 = express2();
const dotenv2 = require("dotenv");
dotenv2.config({ path: "../../.env" });

const client_id = `${process.env.naverDevClientId}`; // 네이버 개발자 클라이언트 아이디
const client_secret = `${process.env.naverDevClientSec}`; // 네이버 개발자 클라이언트 시크릿
const displayLength = 1; // 표시할 검색 결과 수
const category = 101; // 뉴스 카테고리 코드

// og:image 메타 태그에서 URL을 추출하는 함수
const getPageData = async (url: string) => {
  try {
    const response = await axios2.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // og:image 태그 추출
    const ogImageTag = $('meta[property="og:image"]');
    const ogImageUrl = ogImageTag.attr("content");

    return ogImageUrl;
  } catch (error) {
    console.error("에러:", error);
    return null;
  }
};

app2.get("/search/news", async (req: any, res: any) => {
  const query = req.query.query;

  try {
    let api_url = "";
    if (!query) {
      //search/new일떄는 경제 카테고리의 최신 기사만 10개 보여줌
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        "경제"
      )}&display=${displayLength}&category=${category}`;
    } else {
      //search/news?query=검색어 가 있다면 보여줄 주소
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        query
      )}&display=${displayLength}&category=${category}`;
    }

    const options = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios2.get(api_url, options);

    // og:image URL 추출
    const ogImageUrl = await getPageData(response.data.items[0].link);
    // 임시로 보내는 객체
    const searchData = [
      { title: "뉴스 1", content: "이것은 뉴스 1입니다." },
      { title: "뉴스 2", content: "이것은 뉴스 2입니다." },
      { title: "뉴스 3", content: "이것은 뉴스 3입니다." },
    ];
    res.json(searchData);
    // res.status(200).json({
    //   ...response.data,
    //   ogImageUrl: ogImageUrl,
    // });
    console.log(response.data.items[0].title);
    console.log(response.data.items[0].link);
    console.log(`썸네일 사진: ${ogImageUrl}`);
    console.log(response.data.items[0].description);
    console.log("------------------");
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).end();
      console.log("에러 =", error.response.status);
    } else {
      res.status(500).end();
      console.error(error);
    }
  }
  // /search/news 데이터를 가져오는 로직을 구현합니다.
  // 필요에 따라 데이터를 가공한 후 클라이언트에 응답합니다.
  // 예시로 임의의 데이터를 보내는 것으로 가정합니다.
});

app2.listen(8080, () => {
  console.log(
    "http://127.0.0.1:3000/search/news?query=검색어 app listening on port 3000!"
  );
});
