const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");

async function main() {
  const html = await request.get(
    "https://rahavard365.com/asset/462/%D9%88%D8%A8%D9%85%D9%84%D8%AA"
  );
  fs.writeFileSync("./rahavard365.html", html);

  const $ = await cheerio.load(html);
  const theText = $("html").html();
  const closePrice = theText.includes("close_price");
  console.log(closePrice);
}

main();
