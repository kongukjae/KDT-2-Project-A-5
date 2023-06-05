const express2 = require("express");
const axios2 = require("axios");
const cheerio = require("cheerio");
const app2 = express2();
const dotenv2 = require("dotenv");
dotenv2.config({ path: "../../.env" });

const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;
const displayLength = 1;
const category = 101;

//meta태그의 name = og:image 부분의 url을 추출하는 함수
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
    console.error("Error:", error);
    return null;
  }
};

app2.get("/search/news", async (req: any, res: any) => {
  const query = req.query.query as string;

  try {
    let api_url = "";
    if (!query) {
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        "경제"
      )}&display=${displayLength}&category=${category}`;
    } else {
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
    //임시로 보내는 객체
    const searchData = [
      { title: "News 1", content: "This is news 1" },
      { title: "News 2", content: "This is news 2" },
      { title: "News 3", content: "This is news 3" },
    ];
    res.join(searchData);
    // res.status(200).json({
    //   ...response.data,
    //   ogImageUrl: ogImageUrl,
    // });
    console.log(response.data.items[0].title);
    console.log(response.data.items[0].link);
    console.log(`thumbnail사진 : ${ogImageUrl}`);
    console.log(response.data.items[0].description);
    console.log("-----------단 나누기-------------");
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).end();
      console.log("error =", error.response.status);
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
