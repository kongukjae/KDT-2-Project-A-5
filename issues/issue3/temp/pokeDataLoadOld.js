import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.join(__dirname, "/../../../"); //현재 폴더 위치 기준 root값 계산.
const absolutePath = path.resolve("asdf.html");
// pokemonNames.json
console.log(absolutePath);
// JSON 파일 읽기
fs.readFile(rootDir + "/pokemonNames.json", "utf8", (err, data) => {
  if (err) {
    console.error("파일 읽기 오류:", err);
    return;
  }

  try {
    // JSON 문자열을 JavaScript 객체로 변환
    // const jsonObject = JSON.parse(data);
    // JavaScript 객체를 콘솔에 출력
    console.log(data);
  } catch (error) {
    console.error("JSON 파싱 오류:", error);
  }
});
