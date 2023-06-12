// import crawlingData from "./crawling";

// (async () => {
//   console.log(
//     await crawlingData(
//       "https://n.news.naver.com/mnews/ranking/article/025/0003285511?ntype=RANKING"
//     )
//   );
// })();
import axios from "axios";

(async () => {
  const request = await axios.get("http://localhost:8080/news");
  console.log(request.data);
})();
