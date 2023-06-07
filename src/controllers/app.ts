import express from "express";
import path from "path";
import * as fs from "fs";
import dotenv from "dotenv";
// import dbConnect from "../../utils/DB/dbConfigure";
import axios from "axios";
import cheerio from "cheerio";
// const cheerio = require("cheerio");
import { Server } from "socket.io";
import http from "http";

// import fs from "fs";
dotenv.config({ path: "../../.env" }); // env 경로 설정
// root 디렉토리 경로 설정(express용)
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app: express.Application = express();
const server = http.createServer(app);
app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.

app.get("/", (req, res) => {
  console.log({ root: rootPublic });
  res.sendFile(`index.html`, { root: rootPublic });
});

//naver news api key, parameters들
const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;
const displayLength = 1;
// 검색할 카테고리 코드 (정치: 100, 경제: 101, 사회: 102, 생활/문화: 103, 세계: 104, IT/과학: 105)
const category = 101;

//html head 부분의 meta 데이터를 읽는 로직
const getPageData = async (url: string) => {
  try {
    const response = await axios.get(url);
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

//search/news의 경로로 GET요청이 오면 응답으로 객체를 보내는 메서드.
app.get("/search/news", async (req: express.Request, res: express.Response) => {
  const query: string = req.query.query as string;

  try {
    let api_url = "";
    if (!query) {
      //* 요청 url의 끝이 /search/new일때는 경제 카테고리의 최신 기사만 10개 보여줌
      api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
        "경제"
      )}&display=${displayLength}&category=${category}`;
    } else {
      //* 요청 url의 끝이 /search/news?query=검색어 가 있다면 보여줄 주소
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

    const response = await axios.get(api_url, options);

    //* getPageData 함수를 사용하여 og:image url 추출(썸네일 사진)
    const ogImageUrl = await getPageData(response.data.items[0].link);
    //임시로 보낼 객체. 삭제가능
    const searchData = [
      { title: "News 1", content: "This is news 1" },
      { title: "News 2", content: "This is news 2" },
      { title: "News 3", content: "This is news 3" },
    ];
    res.status(200).json(searchData); //임시로 보낼 객체 삭제시 삭제.
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
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
