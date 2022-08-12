const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

class TrendService {
  constructor() {
    this.BASE_URL = "https://medium.com/";
  }
  async getTrend(tag, post_num) {
    const response = await axios.get(`${this.BASE_URL}/tag/${tag}`);
    const $ = cheerio.load(response.data);
    const data = $("body > script:nth-child(5)").text().slice(26);

    fs.writeFile("text1.txt", data, (err) => {
      console.log(err);
    });
  }
}

const trendService = new TrendService();
module.exports = {
  trendService,
};
