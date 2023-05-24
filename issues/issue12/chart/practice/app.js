// import express from "express";
// import path from "path";

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 2080;

const __dirName = path.resolve();
// index.html 페이지 작성
app.get("/", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirName + "/index.html");
});

// stock.js 파일 반환
app.get("/stock.js", (req, res) => {
  res.type("text/javascript");
  res.sendFile(__dirName + "/stock.js");
});

// about.html 페이지 작성
app.get("/about", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirName + "/about.html");
});

// 404 페이지 작성
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 500 페이지 작성

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Internal Server Error");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
