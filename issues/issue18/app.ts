import express from "express";

console.log(__dirname); // 현재 모듈의 디렉토리 경로 출력
const app = express();

app.use(express.static("../../public"));
app.get("/", (req, res) => {
  res.status(200).send("OK");
});
app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(8080, () => {
  console.log("connected");
});
