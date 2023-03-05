import { actions } from "./slice";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const BASE_URL = "http://localhost:5000";

export const fetchKeyword = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/keywords`;

    const result = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/news`;

    const result = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/youtube`;

    const result = await sendRequest(url, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/music`;

    const result = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/movie`;

    const result = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async dispatch => {
    const url = `${BASE_URL}${PROXY}/tv`;

    const result = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    dispatch(actions.getTVList(result));
  };
};

export const fetchAllData = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/all`;
    const url = `${PROXY}/all`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getAllData(result));
  };
};
