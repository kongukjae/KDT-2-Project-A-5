import express from "express";
import crawlingData from "../../utils/naverNewsApi/crawling";
import newsData from "../../utils/naverNewsApi/newsApi";

const app = express();

const newsApp = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const _newsData = (await newsData()).data.items;
  const response = await Promise.all(
    _newsData.map(async (element: any) => {
      return await crawlingData(element.link);
    })
  );
  res.json(response); //클라이언트에 응답할 데이터
  next();
};

export default newsApp;
