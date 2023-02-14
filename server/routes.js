const express = require("express");
const router = express.Router();
const { getTest, getKeywords, getNews, getYoutube, getTV, getMovie, getMusic } = require("./controller");

router.get("/", (req, res) => {
  res.send("<h1>서버 구동 중 ...</h1>");
});
router.get("/keywords", getKeywords);
router.get("/news", getNews);
router.get("/youtube", getYoutube);
router.get("/movie", getMovie);
router.get("/music", getMusic);
router.get("/tv", getTV);
router.get("/test", getTest);

module.exports = router;
