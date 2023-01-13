import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import "./App.css";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import KeywordsTrend from "./components/Social/KeywordsTrend";
import NewsTrend from "./components/Social/NewsTrend";
import MovieTrend from "./components/Culture/MovieTrend";
import MusicTrend from "./components/Culture/MusicTrend";
import TVTrend from "./components/Entertainment/TVTrend";
import YoutubeTrend from "./components/Entertainment/YoutubeTrend";

import { fetchKeyword, fetchMusic, fetchTopNews, fetchYoutube, fetchTV, fetchMovie } from "./store/actions";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const keywordRef = useRef(null);
  const movieRef = useRef(null);
  const youtubeRef = useRef(null);

  useEffect(() => {
    const initData = async () => {
      Promise.all([
        // fetch("/api")
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log(data);
        //   }),
        await dispatch(fetchKeyword()),
        await dispatch(fetchTopNews()),
        // await dispatch(fetchYoutube()),
        await dispatch(fetchMovie()),
        await dispatch(fetchMusic()),
        await dispatch(fetchTV()),
      ]).then(setIsLoading(false));
    };
    initData();
  }, []);

  return (
    <div className={`App ${isLoading ? "blur" : ""}`}>
      <header>
        <Home />
        <Nav refs={[keywordRef, youtubeRef, movieRef]} />
      </header>
      <main>
        <article>
          <KeywordsTrend ref={keywordRef} />
          <NewsTrend />
          <YoutubeTrend ref={youtubeRef} />
          <TVTrend />
          <MovieTrend ref={movieRef} />
          <MusicTrend />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default App;
