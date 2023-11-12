import { actions } from "./slice";
import { sendRequest } from "../utils/http";
import ERROR_MESSAGES from "../constants/errorMessage";
import { BASE_URL } from "../constants/url";
import data from "../data.json";
const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

export const fetchKeyword = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getKeyWord" }) => void) => {
    const url = `${PROXY}/keywords`;

    const result = await sendRequest(url, ERROR_MESSAGES.KEYWORD_FETCH_ERROR);
    dispatch(actions.getKeyWord(result));
  };
};

export const fetchTopNews = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getNews" }) => void) => {
    const url = `${PROXY}/news`;

    const result = await sendRequest(url, ERROR_MESSAGES.NEWS_FETCH_ERROR);
    dispatch(actions.getNews(result));
  };
};

export const fetchYoutube = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getYoutube" }) => void) => {
    const url = `${PROXY}/youtube`;

    const result = await sendRequest(url, ERROR_MESSAGES.YOUTUBE_FETCH_ERROR);
    dispatch(actions.getYoutube(result));
  };
};

export const fetchMusic = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getMusicList" }) => void) => {
    const url = `${PROXY}/music`;

    const result = await sendRequest(url, ERROR_MESSAGES.MUSIC_FETCH_ERROR);
    dispatch(actions.getMusicList(result));
  };
};

export const fetchMovie = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getMovieList" }) => void) => {
    const url = `${PROXY}/movie`;

    const result = await sendRequest(url, ERROR_MESSAGES.MOVIE_FETCH_ERROR);
    dispatch(actions.getMovieList(result));
  };
};

export const fetchTV = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getTVList" }) => void) => {
    const url = `${BASE_URL}${PROXY}/tv`;

    const result = await sendRequest(url, ERROR_MESSAGES.TV_FETCH_ERROR);
    dispatch(actions.getTVList(result));
  };
};

export const fetchAllData = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getAllData" }) => void) => {
    const url = `${PROXY}/all`;

    // const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getAllData(data));
  };
};

export const fetchSocial = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getSocial" }) => void) => {
    const url = `${PROXY}/social`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getSocial(result));
  };
};

export const fetchEntertainment = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getEntertainment" }) => void) => {
    const url = `${PROXY}/entertainment`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getEntertainment(result));
  };
};

export const fetchCulture = () => {
  return async (dispatch: (arg0: { payload: any; type: "trend/getCulture" }) => void) => {
    const url = `${PROXY}/culture`;

    const result = await sendRequest(url, ERROR_MESSAGES.All_FETCH_ERROR);
    dispatch(actions.getCulture(result));
  };
};
