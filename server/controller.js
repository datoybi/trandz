const puppeteer = require("puppeteer");
const axios = require("axios");
const { keywordsCrawling, musicCrawling, TVCrawling, newsCrawling, youtubeCrawling, movieCrawling } = require("./crawling");

const KEYWORD_URL = "https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR";
const NEWS_URL = "https://www.bbc.com/korean/mostread.json";
const YOUTUBE_TREND_URL = "https://kr.noxinfluencer.com/youtube-video-rank/top-kr-all-video-day";
const MOVIE_URL = "https://movie.daum.net/ranking/reservation";
const MUSIC_URL = "https://music.bugs.co.kr/chart/track/week/total";
const TV_URL = " https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=blUw&qvt=0&query=주간%20시청률";

let keywordData = [];
let newsData = [];
let youtubeData = [];
let musicData = [];
let movieData = [];
let tvData = [];

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

const crawlData = async URL => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"], headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1800 });
  await page.goto(URL);

  await page.evaluate(() => {
    window.scrollTo(0, window.document.body.scrollHeight);
  });
  return await page.content();
};

const getData = async () => {
  const htmlString = await sendRequest(KEYWORD_URL);
  keywordData = keywordsCrawling(htmlString);

  const { records } = await sendRequest(NEWS_URL);
  newsData = newsCrawling(records);

  (async () => {
    youtubeData = youtubeCrawling(await crawlData(YOUTUBE_TREND_URL));
  })();

  (async () => {
    movieData = movieCrawling(await crawlData(MOVIE_URL));
  })();

  (async () => {
    musicData = musicCrawling(await crawlData(MUSIC_URL));
  })();

  (async () => {
    tvData = TVCrawling(await crawlData(TV_URL));
  })();
};
// 24시간에 1번씩 tv, news, music, movie ,
// 3시간에 한번씩 keyword, youtube
const REFRESH_TIME = 1000 * 60 * 60 * 6; // 3H
// setInterval(async () => {
//   // getData();
//   await setKeyword();
//   await setYoutube();
// });

// 1시간에 1번씩 데이터 없으면 가져오기
setInterval(async () => {
  if (keywordData.length === 0) await setKeyword();
  if (newsData.length === 0) await setNews();
  if (musicData.length === 0) await setMusic();
  if (movieData.length === 0) await setMovie();
  if (tvData.length === 0) await setTV();
}, 1000 * 60 * 60 * 1);

setInterval(async () => {
  await getData();
}, 1000 * 60 * 60 * 24); // 5시간

const setKeyword = async (req, res) => {
  const htmlString = await sendRequest(KEYWORD_URL);
  keywordData = keywordsCrawling(htmlString);
};

const setNews = async (req, res) => {
  const { records } = await sendRequest(NEWS_URL);
  newsData = newsCrawling(records);
};

const setMusic = (req, res) => {
  (async () => {
    musicData = musicCrawling(await crawlData(MUSIC_URL));
  })();
};

const setMovie = (req, res) => {
  (async () => {
    movieData = movieCrawling(await crawlData(MOVIE_URL));
  })();
};

const setTV = async (req, res) => {
  (async () => {
    tvData = TVCrawling(await crawlData(TV_URL));
  })();
};

const setYoutube = async (req, res) => {
  (async () => {
    youtubeData = youtubeCrawling(await crawlData(YOUTUBE_TREND_URL));
  })();
};

// !: get
const getKeywords = (req, res) => res.json(keywordData);

const getNews = async (req, res) => {
  res.json(newsData);
};

const getYoutube = async (req, res) => {
  res.json(youtubeData);
};

const getMovie = async (req, res) => {
  res.json(movieData);
};

const getMusic = async (req, res) => {
  res.json(musicData);
};

const getTV = async (req, res) => {
  res.json(tvData);
};

const getAllData = async (req, res) => {
  const result = { keywords: keywordData, news: newsData, youtube: youtubeData, music: musicData, movie: movieData, tv: tvData };
  res.json(result);
};

const getSocial = async (req, res) => {
  const result = { keywords: keywordData, youtube: youtubeData };
  res.json(result);
};

const getCulture = async (req, res) => {
  const result = { news: newsData, tv: tvData };
  res.json(result);
};

const getEntertainment = async (req, res) => {
  const result = { movie: movieData, music: musicData };
  res.json(result);
};

module.exports = {
  setKeyword,
  setYoutube,
  setMovie,
  setMusic,
  setNews,
  setTV,

  getKeywords,
  getNews,
  getYoutube,
  getMovie,
  getMusic,
  getTV,
  getData,
  getAllData,

  getSocial,
  getCulture,
  getEntertainment,
};
