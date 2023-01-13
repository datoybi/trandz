const express = require("express");
const router = express.Router();
const { getKeywords, getNews, getYoutube, getTV, getMovie, getMusic } = require("./controller");

router.get("/", (req, res) => {});
router.get("/api/keywords", getKeywords);
router.get("/api/news", getNews);
router.get("/api/youtube", getYoutube);
router.get("/api/movie", getMovie);
router.get("/api/music", getMusic);
router.get("/api/tv", getTV);

module.exports = router;
