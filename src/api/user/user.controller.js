const { userService } = require("./user.service");
const fs = require("fs");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res, next) {
    try {
      const user = req.params.user;
      const post_num = req.query.post_num
      console.log(user);
      const response = await this.userService.getUser(user, post_num);
      res.send(await response);
    } catch (e) {
      next(e);
    }
  }
}

const userController = new UserController(userService);
module.exports = {
  userController,
};
