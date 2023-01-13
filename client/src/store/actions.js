import { actions } from "./slice";
import { keywordCrawling, newsCrawling, youtubeFirstCrawling, youtubeSecondCrawling, musicCrawling, movieCrawling, TVCrawling } from "./crawling";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

const KEYWORD_ENDPOINT = "/trends/trendingsearches/daily/rss?geo=KR";
const MUSIC_ENDPOINT = "/chart/track/week/total";
const MOVIE_ENDPOINT = "/ranking/reservation";
const TV_ENDPOINT = "/search.naver?where=nexearch&sm=tab_etc&mra=blUw&qvt=0&query=주간%20시청률";
const NEWS_JSON = "/mostread.json";
const YOUTUBE_TOTAL_COUNT = 20;
const YOUTUBE_SECOND_LIST_COUNT = YOUTUBE_TOTAL_COUNT - 5;
const YOUTUBE_SECOND_ENDPOINT = `/youtube-video-rank/_top-videos?country=kr&category=all&offset=5&pageSize=${YOUTUBE_SECOND_LIST_COUNT}`;
const YOUTUBE_FIRST_ENDPOINT = "/youtube-video-rank/top-kr-all-video-day";

export const fetchKeyword = () => {
  return async dispatch => {
    const trendProxy = window.location.hostname === "localhost" ? "" : "/trend_proxy";
    const url = `${trendProxy}${KEYWORD_ENDPOINT}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    const result = keywordCrawling(htmlString);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    const newsProxy = window.location.hostname === "localhost" ? "" : "/news_proxy";
    const url = `${newsProxy}${NEWS_JSON}`;
    const { records } = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    const result = newsCrawling(records);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const youtubeProxy = window.location.hostname === "localhost" ? "" : "/youtube_proxy";

    const firstUrl = `${youtubeProxy}${YOUTUBE_FIRST_ENDPOINT}`;
    const htmlString = await sendRequest(firstUrl, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    let result = youtubeFirstCrawling(htmlString);

    const secondUrl = `${youtubeProxy}${YOUTUBE_SECOND_ENDPOINT}`;
    const secondHtmlString = await sendRequest(secondUrl, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    const newSecondResult = youtubeSecondCrawling(secondHtmlString);
    result = [...result, ...newSecondResult];
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async dispatch => {
    const musicProxy = window.location.hostname === "localhost" ? "" : "/music_proxy";
    const url = `${musicProxy}${MUSIC_ENDPOINT}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    const result = musicCrawling(htmlString);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    const movieProxy = window.location.hostname === "localhost" ? "" : "/movie_proxy";
    const url = `${movieProxy}${MOVIE_ENDPOINT}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    const result = movieCrawling(htmlString);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async dispatch => {
    const tvProxy = window.location.hostname === "localhost" ? "" : "/tv_proxy";
    const url = `${tvProxy}${TV_ENDPOINT}`;
    const htmlString = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    const result = TVCrawling(htmlString);
    dispatch(actions.getTVList(result));
  };
};
