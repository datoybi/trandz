import { actions } from "./slice";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const BASE_URL = "http://localhost:5000";

export const fetchKeyword = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/keywords`;
    const url = `${PROXY}/keywords`;

    const result = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/news`;
    const url = `${PROXY}/news`;

    const result = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const url = `${PROXY}/youtube`;

    const result = await sendRequest(url, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async dispatch => {
    const url = `${PROXY}/music`;
    // const url = `${BASE_URL}${PROXY}/music`;

    const result = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/movie`;
    const url = `${PROXY}/movie`;

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
    const url = `${PROXY}/all`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getAllData(result));
  };
};

export const fetchSocial = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/social`;
    const url = `${PROXY}/social`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getSocial(result));
  };
};

export const fetchEntertainment = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/entertainment`;
    const url = `${PROXY}/entertainment`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getEntertainment(result));
  };
};

export const fetchCulture = () => {
  return async dispatch => {
    // const url = `${BASE_URL}${PROXY}/culture`;
    const url = `${PROXY}/culture`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getCulture(result));
  };
};
