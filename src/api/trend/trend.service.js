const axios = require("axios");
const cheerio = require("cheerio");

class TrendService {
  constructor() {
    this.BASE_URL = "https://medium.com/";
  }
  async getTrend(tag, post_num) {
    const response = await axios.get(`${this.BASE_URL}/tag/${tag}`);
    const $ = cheerio.load(response.data);
    const data = $("body > script:nth-child(5)").text().slice(26);

    const json_data = JSON.parse(data);

    const topWriterRef =
      json_data.ROOT_QUERY[`tagTopWriters({"limit":6,"tagSlug":"${tag}"})`];

    const topWriter = await this.getWriter(topWriterRef, json_data);
    const trendPostRef =
      json_data.ROOT_QUERY[`tagFeed:(mode:HOT,tagSlug:${tag},limit:10)`].items;

    // console.log(trendPostRef);

    const posts = []

    trendPostRef.forEach((element) => {
      // console.log(element.post.__ref);
      const post = {
        title: json_data[element.post.__ref].title,
        firstPublishedAt: json_data[element.post.__ref].firstPublishedAt,
        latestPublishedAt: json_data[element.post.__ref].latestPublishedAt,
        readingTime: json_data[element.post.__ref].readingTime,
        uniqueSlug: json_data[element.post.__ref].uniqueSlug,
        clapCount: json_data[element.post.__ref].clapCount,
        voterCount: json_data[element.post.__ref].voterCount,
        tags: json_data[element.post.__ref].tags,
      };
      posts.push(post)
    });

    const return_data = {
      writerCount:
        json_data.ROOT_QUERY[`tagFeaturesFromSlug({"tagSlug":"${tag}"})`]
          .writerCount,
      postCountLatest:
        json_data.ROOT_QUERY[`tagFeaturesFromSlug({"tagSlug":"${tag}"})`]
          .postCountLatest,

      topWriter: topWriter,
      trendPosts: posts,
    };

    return return_data
  }

  async getWriter(data, json_data) {
    const list = [];

    data.forEach((element) => {
      let domain;
      if (json_data[element.__ref].customDomainState) {
        domain = json_data[element.__ref].customDomainState.live.domain;
      } else {
        domain = "";
      }
      const data = {
        name: json_data[element.__ref].name,
        bio: json_data[element.__ref].bio,
        customDomain: domain,
      };

      list.push(data);
    });
    return list;
  }
}

const trendService = new TrendService();
module.exports = {
  trendService,
};
