const { trendService } = require("./trend.service");
const fs = require("fs");

class TrendController {
  constructor(trendService) {
    this.trendService = trendService;
  }

  async getTrend(req, res, next) {
    try {
      const tag = req.params.tag;
      const post_num = req.query.post_num;
      const response = await this.trendService.getTrend(tag, post_num);
      res.send(await response);
    } catch (e) {
      next(e);
    }
  }
}

const trendController = new TrendController(trendService);
module.exports = {
  trendController,
};
