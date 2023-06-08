import crawlingData from "./crawling";

(async () => {
  console.log(
    await crawlingData(
      "https://n.news.naver.com/mnews/ranking/article/025/0003285511?ntype=RANKING"
    )
  );
})();
