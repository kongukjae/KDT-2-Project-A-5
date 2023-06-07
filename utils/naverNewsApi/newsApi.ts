import axios from "axios";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const client_id = `${process.env.naverDevClientId}`;
const client_secret = `${process.env.naverDevClientSec}`;
const query = "경제";
const displayLength = `3`;
const category = 101;

const data = async () => {
  const api_url = `https://openapi.naver.com/v1/search/news?query=${encodeURIComponent(
    query
  )}&display=${displayLength}&category=${category}`;
  const request = await axios.get(api_url, {
    headers: {
      "X-Naver-Client-Id": `${client_id}`,
      "X-Naver-Client-Secret": `${client_secret}`,
    },
  });
  console.log(await request.data.items);
};

export default data();
