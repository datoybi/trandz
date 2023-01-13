const request = require("request");
const puppeteer = require("puppeteer");
const axios = require("axios");
const { keywordsCrawling, musicCrawling, TVCrawling, newsCrawling, youtubeCrawling, movieCrawling } = require("./crawling");

const KEYWORD_URL = "https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR";
const NEWS_URL = "https://www.bbc.com/korean/mostread.json";
const YOUTUBE_TREND_URL = "https://kr.noxinfluencer.com/youtube-video-rank/top-kr-all-video-day";
const MOVIE_URL = "https://movie.daum.net/ranking/reservation";
const MUSIC_URL = "https://music.bugs.co.kr/chart/track/week/total";
const TV_URL = " https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blUw&qvt=0&query=주간%20시청률";

const sendRequest = async (url, errorMessage) => {
  try {
    const response = await axios.get(url);
    if (!response.data) throw new Error("Could not fetch data!");
    return response.data;
  } catch (error) {
    console.log(errorMessage);
    console.log(error);
  }
  return false;
};

const getKeywords = async (req, res) => {
  const htmlString = await sendRequest(KEYWORD_URL);
  const result = keywordsCrawling(htmlString);
  res.json(result);
};

const getNews = async (req, res) => {
  const { records } = await sendRequest(NEWS_URL);
  const result = newsCrawling(records);
  res.json(result);
};

const getYoutube = async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1800 });
    await page.goto(YOUTUBE_TREND_URL);

    await page.evaluate(() => {
      window.scrollTo(0, window.document.body.scrollHeight);
    });

    const content = await page.content();
    const result = [...youtubeCrawling(content)];
    res.json(result);

    await browser.close();
  })();
};

const getMovie = async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });
    await page.goto(MOVIE_URL);

    const content = await page.content();
    const result = movieCrawling(content);
    res.json(result);

    await browser.close();
  })();
};

const getMusic = async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });
    await page.goto(MUSIC_URL);

    const content = await page.content();
    const result = musicCrawling(content);
    res.json(result);

    await browser.close();
  })();
};

const getTV = async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1000 });
    await page.goto(TV_URL);

    const content = await page.content();
    const result = TVCrawling(content);
    res.json(result);

    await browser.close();
  })();
};

module.exports = {
  getKeywords,
  getNews,
  getYoutube,
  getMovie,
  getMusic,
  getTV,
};
