import all_mighty_editor from "../../utils/all-mighty-editor.js";
const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

const root = document.getElementById("root");
kingGodFlexEditor(root, "row", "center", "center");

//* 엘리먼트 생성 페이지
const mainDIv = multiAndSingleTagMaker(root, "div", "main-div", 1, (ele) => {});
const mainTextContainer = multiAndSingleTagMaker(mainDIv, "div", "main-div");
const mainTextTitle = multiAndSingleTagMaker(
  mainTextContainer,
  "div",
  "main-text-title",
  1,
  (ele) => {
    ele.textContent = "하이";
  }
);
const mainTextSub = multiAndSingleTagMaker(
  mainTextContainer,
  "div",
  "main-text-sub",
  1,
  (ele) => {
    ele.textContent = "하이";
  }
);
const mainTextImg = multiAndSingleTagMaker(
  mainTextContainer,
  "img",
  "main-text-img",
  1,
  (ele) => {
    ele.src = "./img-13.png";
  }
);

//* CSS 부분
const mainDIvCss = {
  width: "430px",
  height: "932px",
  border: "1px solid black",
  margin: "10px",
};
const mainTextContainerCss = {};
const mainTextTitleCss = { fontSize: "24px", backgroundColor: "red" };
const mainTextSubCss = { fontSize: "64px", backgroundColor: "skyblue" };
const mainTextImgCss = { width: "430px", height: "60%" };
//* 그 외 엘리먼트 스타일 수정
allMightyStyleEditor(mainDIv, mainDIvCss, (ele) => {
  console.dir(ele);
});
allMightyStyleEditor(mainTextTitle, mainTextTitleCss, (ele) => {});
allMightyStyleEditor(mainTextSub, mainTextSubCss, (ele) => {});
allMightyStyleEditor(mainTextImg, mainTextImgCss, (ele) => {});
