const { json } = require("express");
const { postsService } = require("./posts.service");

class PostsController {
  constructor(postsService) {
    this.postsService = postsService;
  }

  async getPublication(req, res, next) {
    try {
      const publication = req.params.name;
      const post_num = req.query.post_num;
      const trend_num = req.query.trend_num;
      const writer_num = req.query.writer_num;
      const data = await this.postsService.getPub(
        publication,
        post_num,
        writer_num,
        trend_num
      );
      res.render("index", { reData: JSON.stringify(data, null, 4) });
    } catch (e) {
      next(e);
    }
  }
}

const postsController = new PostsController(postsService);
module.exports = { postsController };
