const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { writer } = require("repl");
const { CustomError } = require("../../error/CustomError");

const BASE_URL = "https://medium.com/";

class PostService {
  constructor() {}

  async getPub(publication, post_num, writer_num, trend_num) {
    const data = await this.getGeneralInfo(
      publication,
      post_num,
      writer_num,
      trend_num
    );
    return data;
  }

  async getGeneralInfo(publication, post_num, writer_num, trend_num) {
    const response = await axios.get(`${BASE_URL}${publication}/latest`);

    const html = response.data.slice(16);

    // console.log(html);
    const json = JSON.parse(html);

    if (parseInt(post_num) > json.payload.posts.length) {
      throw new CustomError("post_num out of Index", 404);
    }

    if (parseInt(writer_num) > json.payload.writerNames.length) {
      throw new CustomError("writer_num out of Index", 404);
    }

    post_num = await this.checkNum(post_num, json.payload.posts);
    writer_num = await this.checkNum(post_num, json.payload.posts);

    const trend_res = await axios.get(`${BASE_URL}${publication}/trending/`);

    const trend_data = trend_res.data.slice(16);
    const trend_json = JSON.parse(trend_data);


    const data = {
      description: json.payload.collection.description,
      creatorId: json.payload.collection.creatorId,
      followerCount: json.payload.collection.metadata.followerCount,
      tags: json.payload.collection.tags,
      twitterUsername: json.payload.collection.twitterUsername,
      facebookPageName: json.payload.collection.facebookPageName,
      instagramName: json.payload.collection.instagramUsername,
      latest_posts: await this.getPosts(post_num, json),
      trend_posts: await this.getPosts(trend_num, trend_json),
      writers: json.payload.writerNames.slice(0, writer_num),
    };

    return data;
  }

  async getPosts(limit, json) {
    console.log(limit);
    const posts = [];
    for (let i = 0; i < limit; i++) {
      const post = {
        id: json.payload.posts[i].id,
        title: json.payload.posts[i].title,
        subtitle: json.payload.posts[i].virtuals.subtitle,
        lang: json.payload.posts[i].detectedLanguage,
        wordCount: json.payload.posts[i].virtuals.wordCount,
        readingTime: json.payload.posts[i].virtuals.readingTime,
        creatorId: json.payload.posts[i].creatorId,
        createdAit: json.payload.posts[i].createdAt,
        updatedAt: json.payload.posts[i].updatedAt,
        firstPublishedAt: json.payload.posts[i].firstPublishedAt,
        latestPublishedAt: json.payload.posts[i].latestPublishedAt,
      };
      posts.push(post);
    }
    return posts;
  }

  async checkNum(num, posts) {
    if (!num) {
      return posts.length;
    } else {
      return num;
    }
  }
}

const postsService = new PostService();
module.exports = {
  postsService,
};

// fetch("https://medium.com/startup-grind/load-more?sortBy=latest", {
//   headers: {
//     accept: "application/json",
//     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ru;q=0.7",
//     "content-type": "application/json",
//     "sec-ch-ua":
//       '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-client-date": "1660280860225",
//     "x-obvious-cid": "web",
//     "x-xsrf-token": "0270ea37b692",
//     cookie:
//       '_ga=GA1.2.643780041.1640351527; __stripe_mid=8109d22a-f98d-4391-8db9-d8135fcb1e692f168c; g_state={"i_p":1657090671644,"i_l":2}; nonce=AmVfDcuc; sid=1:vKzkYMFbBU16Js5xOL70G38LunlucToGnzgiytgkj6WV4+YhFdEuRNNhjEwVtJHQ; uid=444e61425f39; lightstep_guid/medium-web=8650b8cbe389bca0; lightstep_session_id=6184da0885ece20f; pr=1; tz=-600; __cfruid=a3a75fc5cc06ce823331630365bc1ced0af93267-1660279827; xsrf=0270ea37b692; sz=1050',
//     Referer: "https://medium.com/startup-grind/latest",
//     "Referrer-Policy": "unsafe-url",
//   },
//   body: '{"limit":10,"to":"1633110938223"}',
//   method: "POST",
// });
