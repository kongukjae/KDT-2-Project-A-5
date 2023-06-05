const express = require("express");
const axios2 = require("axios");
const app2 = express();
const dotenv2 = require("dotenv");
dotenv2.config({ path: "../../.env" });

const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;

app2.get("/search/news", async (req: any, res: any) => {
  const query = req.query.query as string;

  try {
    const api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
      query
    )}`;
    const options = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios2.get(api_url, options);
    res.status(200).json(response.data);
    console.log(response.data.items.length);
    console.log("-----------단 나누기-------------");
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).end();
      console.log("error =", error.response.status);
    } else {
      res.status(500).end();
      console.error(error);
    }
  }
});

app2.listen(8080, () => {
  console.log(
    "http://127.0.0.1:3000/search/news?query=검색어 app listening on port 3000!"
  );
});
