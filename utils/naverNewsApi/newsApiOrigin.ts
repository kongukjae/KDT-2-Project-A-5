const express3 = require("express");
const axios3 = require("axios");
const app3 = express3();
const dotenv3 = require("dotenv");
dotenv2.config({ path: "../../.env" });

const client_id2 = `${process.env.naverDevClientId}`;
const client_secret2 = `${process.env.naverDevClientSec}`;
const displayLength2 = 10;
app3.get("/search/news", async (req: any, res: any) => {
  const query = req.query.query as string;

  try {
    const api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
      query
    )}&display=${displayLength}`;
    const options = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios2.get(api_url, options);
    res.status(200).json(response.data);
    console.log(response.data.items[0].title);
    console.log(response.data.items[0].link);
    console.log(`thumbnail사진 : ${response}`);
    console.log(response.data.items[0].description);
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

app3.listen(8080, () => {
  console.log(
    "http://127.0.0.1:3000/search/news?query=검색어 app listening on port 3000!"
  );
});
