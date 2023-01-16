import { actions } from "./slice";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";

export const fetchKeyword = () => {
  // const tvProxy = window.location.hostname === "localhost" ? "" : "/tv_proxy";

  return async dispatch => {
    const url = "/keywords";
    const result = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async dispatch => {
    const url = "/news";
    const result = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async dispatch => {
    const url = "/youtube";
    const result = await sendRequest(url, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async dispatch => {
    const url = "/music";
    const result = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async dispatch => {
    const url = `/movie`;
    const result = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async dispatch => {
    const url = `/tv`;
    const result = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    dispatch(actions.getTVList(result));
  };
};
