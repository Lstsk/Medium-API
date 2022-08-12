const fetch = require("node-fetch");
const fs = require("fs");

const axios = require("axios");
const cheerio = require("cheerio");

async function getData() {
  const response = await axios.get("https://medium.com/the-mission/latest", {
    headers: {
      Host: "medium.com",
    },
  });
  

  fs.writeFile("test.txt")
}

getData();
