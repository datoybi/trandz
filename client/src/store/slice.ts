/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";
import { TrendState } from "../types/types";

const initialState: TrendState = {
  keywords: [],
  keywordCount: LOADING_KEYWORD_COUNT,
  news: [],
  youtubeList: [],
  musicList: [],
  movieList: [],
  moviePage: 1,
  TVList: [],
};

const slice = createSlice({
  name: "trend",
  initialState,
  reducers: {
    getKeyWord(state, action) {
      state.keywords = action.payload;
    },

    increaseKeywordCount(state) {
      const newCount = state.keywordCount + LOADING_KEYWORD_COUNT;
      const totalKeyword = state.keywords.length;
      state.keywordCount = totalKeyword < newCount ? totalKeyword : newCount;
    },

    setKeywordCount(state) {
      state.keywordCount = state.keywords.length;
    },

    getNews(state, action) {
      state.news = action.payload;
    },

    getYoutube(state, action) {
      state.youtubeList = action.payload;
    },

    getMusicList(state, action) {
      state.musicList = action.payload;
    },

    getMovieList(state, action) {
      state.movieList = action.payload;
    },

    getTVList(state, action) {
      state.TVList = action.payload;
    },

    changeMoviePage(state, action) {
      state.moviePage += action.payload;
    },

    getAllData(state, action) {
      state.keywords = action.payload.keywords;
      state.news = action.payload.news;
      state.youtubeList = action.payload.youtube;
      state.musicList = action.payload.music;
      state.movieList = action.payload.movie;
      state.TVList = action.payload.tv;
    },

    getSocial(state, action) {
      state.keywords = action.payload.keywords;
      state.news = action.payload.news;
    },

    getEntertainment(state, action) {
      state.youtubeList = action.payload.youtube;
      state.TVList = action.payload.tv;
    },

    getCulture(state, action) {
      state.musicList = action.payload.music;
      state.movieList = action.payload.movie;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
