const express = require("express");
const router = express.Router();
const {userController} = require("./user.controller");

router.get("/:user", userController.getUser.bind(userController));

module.exports = router;
