/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { LOADING_KEYWORD_COUNT } from "../constants/trendz";

const slice = createSlice({
  name: "trend",
  initialState: {
    keywords: [],
    keywordCount: LOADING_KEYWORD_COUNT,
    news: [],
    youtubeList: [],
    musicList: [],
    movieList: [],
    moviePage: 1,
    TVList: [],
  },

  reducers: {
    getKeyWord(state, action) {
      state.keywords = action.payload;
    },

    increaseKeywordCount(state) {
      const newCount = state.keywordCount + LOADING_KEYWORD_COUNT;
      const totalKeyword = state.keywords.length;
      state.keywordCount = totalKeyword < newCount ? totalKeyword : newCount;
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
  },
});

export const { actions } = slice;
export default slice.reducer;
