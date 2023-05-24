import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const rootDirectory = path.join(path.dirname(currentFilePath), ".."); // 현재 디렉토리 기준. 루트 폴더의 위치로 설정해주세요.
/* rootDirectory : 
C:/Users/over9/KDT-2_FullStack/KDT-2-Project-A-5
*/
const filePath = path.join(rootDirectory, "utils", "tagMaker.js"); // 1. 기존 파일의 경로
const fileContent = readFileSync(filePath, "utf8"); // 2. 새로 생성될 파일에도 작성될 기존 파일의 내용

const tsFilePath = path.join(rootDirectory, "utils", "tagMaker.ts"); // 3. 새 파일의 경로
writeFileSync(tsFilePath, fileContent, "utf8"); //3의 경로에 2의 내용을 작성함.

console.log(`${tsFilePath}의 경로에 js파일을 ts로 생성하였습니다.`);
