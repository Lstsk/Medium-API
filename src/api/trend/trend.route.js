const express = require("express");
const router = express.Router();
const { trendController } = require("./trend.controller");

router.get("/:tag", trendController.getTrend.bind(trendController));

module.exports = router;
