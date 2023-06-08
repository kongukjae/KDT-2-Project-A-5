import cheerio from "cheerio";
import axios from "axios";

interface Pata {
  title: string | undefined;
  thumbnail: string | undefined;
  description: string | undefined;
  repoter: string | undefined;
  press: string | undefined;
}

const crawlingData = async (url: string) => {
  const html = await axios.get(url);

  const $ = cheerio.load(html.data);
  const parseData: Pata = {
    title: $('meta[property="og:title"]').attr("content"),
    thumbnail: $('meta[property="og:image"]').attr("content"),
    description: $("._article_body")
      .text()
      .replace(/           /g, "<br>")
      .trim(),
    repoter: $(".byline").text().trim(),
    press: $('meta[property="og:article:author"]').attr("content"),
  };
  return parseData;
};
export default crawlingData;
