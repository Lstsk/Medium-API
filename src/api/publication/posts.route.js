const express = require("express")
const router = express.Router();
const {postsController} = require("./posts.controller");

router.get("/:name", postsController.getPublication.bind(postsController));

module.exports = router;
