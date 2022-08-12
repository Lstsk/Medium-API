const express = require("express");
const { handleError } = require("./src/error/error-handler.middleware");
app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello");
});

const postsRouter = require("./src/api/publication/posts.route");
const userRouter = require("./src/api/user/user.route");
const trendRouter = require("./src/api/trend/trend.route");

app.use("/api/posts", postsRouter);
app.use("/api/user", userRouter);
app.use("/api/trend", trendRouter);

const PORT = process.env.PORT || 3000;

app.use(handleError);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
