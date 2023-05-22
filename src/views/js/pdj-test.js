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
    ele.src = "/src/views/img/img-13.png";
  }
);

const form = tagMaker("form", mainTextContainer, {
  id: "submit_form",
  method: "GET",
});

const textInput = tagMaker("input", form, {
  type: "text",
  name: "name",
});

const submitButton = tagMaker("button", form, {
  type: "submit",
  innerText: "제출",
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

form.addEventListener("submit", function () {
  console.log("제출 확인");
});

// form.addEventListener("submit", function (event) {
//   console.log("제출 확인");
//   event.preventDefault();
//   const xhr = new XMLHttpRequest();
//   // 문서가 서버에 데이터 요청 시작

//   let random = Math.floor(Math.random() * 1010);
//   // 현존하는 포켓몬 수(1010) 범위 내에서 무작위 숫자 생성하도록 변수 선언

//   const _URL = "https://pokeapi.co/api/v2/pokemon/" + random;
//   //링크를 불러올 때마다 뒤에 붙여질 도감 번호를 랜덤으로 설정

//   xhr.open("GET", _URL);
//   // 접속할 URL을 어떻게 열지 정하고 (GET 혹은 POST) 입력하기 위해 미리 선언한 변수 (_URL)입력
//   // xhr.responseType='json' <- JSON.parse 말고 다른 방식

//   xhr.send();
//   // API 서버에 요청 전송

//   xhr.addEventListener("load", function () {
//     // xhr 변수가 'load' 됐을 때, 함수 시작
//     const _PokeData = JSON.parse(xhr.response);
//     // JSON은 자바스크립트의 객체 방식을 데이터로 표현한 것.
//     // 자바스크립트처럼 보이지만 진짜 자바스크립트는 아니기 때문에 해석 작업이 필요함. 그것에 필요한 명령어가 JSON.parse

//     console.log(_PokeData);
//     // JSON이 잘 변한됐는지 확인

//     // const _PokeInfo = _PokeData.species.url;
//     // console.log(_PokeInfo);
//     // 정보가 정상적으로 불러와졌는지 확인하기 위해 변수 선언 후 console.log로 확인
//     // 이후 추가적으로 가져올 정보들 어떤 것이 있는지 확인

//     const _PokePhoto = _PokeData.sprites;
//     // 변수 _PokeDate의 sptites(포켓몬 초상화) 위치를 찾은 뒤 식별해줌

//     const h2 = document.createElement("img");
//     h2.setAttribute("src", _PokePhoto.front_default);
//     root.appendChild(h2);
//     // 포켓몬 초상화 출력.

//     // 한글 포켓몬 이름 가져오기 위해 한번 더 불러온다.

//     const xhr2 = new XMLHttpRequest();
//     xhr2.open("GET", _PokeData.species.url);
//     // 이번엔 맨 처음 선언한 _PokeData의 .species.url의 정보를 가져오려고 함

//     xhr2.send();
//     //서버에 요청

//     xhr2.addEventListener("load", function () {
//       const _PokeKoreaData = JSON.parse(xhr2.response);
//       // 마찬가지로 자바스크립트로 활용할 수 있도록 JSON.parse 선언

//       const _PokeKoreaName = _PokeKoreaData.names[2];
//       // 한국어 이름 식별

//       console.log(_PokeKoreaName);
//       // 한국어 출력되는지 확인

//       const h1 = document.createElement("h1");
//       h1.textContent = _PokeKoreaName.name;
//       root.appendChild(h1);
//       // 포켓몬 한글 이름 출력..
//     });
//   });
// });
