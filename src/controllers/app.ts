import express from "express";
import path from "path";
import * as fs from "fs";
import dotenv from "dotenv";
// import dbConnect from "../../utils/DB/dbConfigure";
import axios from "axios";
import { Server } from "socket.io";
import http from "http";

// import fs from "fs";
dotenv.config({ path: "../../.env" }); // env 경로 설정
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app = express();
const server = http.createServer(app);
app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.

app.get("/", (req, res) => {
  console.log({ root: rootPublic });
  res.sendFile(`index.html`, { root: rootPublic });
});

const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;
const displayLength = 1;
const category = 101;

//search/news의 경로로 GET요청이 오면 응답으로 객체를 보내는 메서드.
app.get("/search/news", (req, res) => {
  //임시로 보낼 메서드.
  const searchData = [
    { title: "News 1", content: "This is news 1" },
    { title: "News 2", content: "This is news 2" },
    { title: "News 3", content: "This is news 3" },
  ];
  res.status(200).json(searchData);
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
