import { actions } from "./slice";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const fetchKeyword = () => {
  return async dispatch => {
    // const url = `${PROXY}/keywords`;
    const url = `http://localhost:5000/keywords`;

    const result = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    // const url = `${PROXY}/news`;
    const url = `http://localhost:5000/news`;

    const result = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    // const url = `${PROXY}/youtube`;
    const url = `http://localhost:5000/youtube`;

    const result = await sendRequest(url, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async dispatch => {
    // const url = `${PROXY}/music`;
    const url = `http://localhost:5000/music`;

    const result = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    // const url = `${PROXY}/movie`;
    const url = `http://localhost:5000/movie`;
    const result = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    console.log(result);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async dispatch => {
    // const url = `${PROXY}/tv`;
    const url = `http://localhost:5000/tv`;
    const result = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    dispatch(actions.getTVList(result));
  };
};

export const fetchTest = () => {
  return async dispatch => {
    // const url = `${PROXY}/tv`;
    const url = `http://localhost:5000/test`;
    const result = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    console.log(result);
    // dispatch(actions.getTVList(result));
  };
};
