const axios = require("axios");
const cheerio = require("cheerio");

class UserService {
  constructor() {
    this.BASE_URL = "https://medium.com/";
  }
  async getUser(user, post_num) {
    const response = await axios.get(`${this.BASE_URL}@${user}`);
    const $ = cheerio.load(response.data);
    const data = $("body > script:nth-child(5)").text().slice(26);

    const json_data = JSON.parse(data);

    console.log(json_data.ROOT_QUERY[`user({"username":"${user}"})`]);

    const user_id = json_data.ROOT_QUERY[`user({"username":"${user}"})`].__ref;

    console.log(user_id);

    const posts_id =
      json_data[user_id][
        'homepagePostsConnection:{"paging":{"limit":10},"includeDistributedResponses":true}'
      ].posts;

    const posts = [];

    for (let i = 0; i < post_num; i++) {
      const data = {
        id: posts_id[i].__ref,
        title: json_data[posts_id[i].__ref].title,
        subtite:
          json_data[posts_id[i].__ref][
            'extendedPreviewContent({"truncationConfig":{"minimumWordLengthForTruncation":150,"previewParagraphsWordCountThreshold":400,"shortformMinimumWordLengthForTruncation":30,"shortformPreviewParagraphsWordCountThreshold":30,"showFullImageCaptions":true,"truncateAtEndOfSentence":true}})'
          ].subtitle,
        firstPublishedAt: json_data[posts_id[i].__ref].firstPublishedAt,
        latestPublishedAt: json_data[posts_id[i].__ref].latestPublishedAt,
        uniqueSlug: json_data[posts_id[i].__ref].uniqueSlug,
        voterCount: json_data[posts_id[i].__ref].voterCount,
        clapCount: json_data[posts_id[i].__ref].clapCount,
      };
      posts.push(data);
    }

    const return_data = {
      name: json_data[user_id].name,
      id: user_id,
      bio: json_data[user_id].bio,
      followerCount: json_data[user_id].socialStats.followerCount,
      followingCount: json_data[user_id].socialStats.followingCount,
      collectionFollowingCount: json_data[user_id].collectionFollowingCount,
      posts: posts,
    };

    return return_data;
  }
}

const userService = new UserService();
module.exports = {
  userService,
};
