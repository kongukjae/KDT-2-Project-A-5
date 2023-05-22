import all_mighty_editor from "../../../utils/all-mighty-editor.js";
import tagMaker from "../../../utils/tagMaker.js";
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
const mainTextContainer = multiAndSingleTagMaker(
  mainDIv,
  "div",
  "main-container"
);
kingGodFlexEditor(mainTextContainer, "column", "", "");
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
    // ele.src = "./img-13.png";
  }
);

const form = tagMaker("div", mainTextContainer, {
  id: "submit_form",
  // method: "GET",
});

const textInput = tagMaker("input", form, {
  type: "text",
  value: "bulbasaur",
});

const submitButton = tagMaker("button", form, {
  type: "submit",
  innerText: "제출",
});
const nameDiv = tagMaker("div", form, {
  innerText: "이름이 표시",
});

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
const mainTextImgCss = { /*  width: "430px", height: "60%", */ scale: "0.2" };

//* 그 외 엘리먼트 스타일 수정
allMightyStyleEditor(mainDIv, mainDIvCss, (ele) => {
  console.dir(ele);
});
allMightyStyleEditor(mainTextTitle, mainTextTitleCss, (ele) => {});
allMightyStyleEditor(mainTextSub, mainTextSubCss, (ele) => {});
allMightyStyleEditor(mainTextImg, mainTextImgCss, (ele) => {});

// ! 포켓몬 랜덤 생성해보기

submitButton.addEventListener("click", function (event) {
  console.log("제출 확인");
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  // 문서가 서버에 데이터 요청 시작

  let random = Math.floor(Math.random() * 1010);
  // 현존하는 포켓몬 수(1010) 범위 내에서 무작위 숫자 생성하도록 변수 선언

  // const _URL = "https://pokeapi.co/api/v2/pokemon/" + random;
  const _URL = "http://localhost:8080/src/models/pokemonNames.json";
  //링크를 불러올 때마다 뒤에 붙여질 도감 번호를 랜덤으로 설정
  console.log(_URL);
  xhr.open("GET", _URL);
  // 접속할 URL을 어떻게 열지 정하고 (GET 혹은 POST) 입력하기 위해 미리 선언한 변수 (_URL)입력
  // xhr.responseType='json' <- JSON.parse 말고 다른 방식

  xhr.send();
  // API 서버에 요청 전송

  xhr.addEventListener("load", function () {
    // xhr 변수가 'load' 됐을 때, 함수 시작
    const _PokeData = JSON.parse(xhr.response);
    // JSON은 자바스크립트의 객체 방식을 데이터로 표현한 것.
    // 자바스크립트처럼 보이지만 진짜 자바스크립트는 아니기 때문에 해석 작업이 필요함. 그것에 필요한 명령어가 JSON.parse
    // if (textInput.value !== null) {
    //   for (let i = 0; i < _PokeData.length; i++) {
    //     if (textInput.value === _PokeData[i]) {
    //       nameDiv.innerText = _PokeData[i];
    //     }
    //   }
    // }
    console.log(_PokeData);
  });
});
