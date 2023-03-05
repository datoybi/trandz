import React, { useEffect, useState, useRef, lazy } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import KeywordsTrend from "./components/Social/KeywordsTrend";
import NewsTrend from "./components/Social/NewsTrend";
import YoutubeTrend from "./components/Entertainment/YoutubeTrend";
import Loading from "./components/Layout/Loading";
import { fetchKeyword, fetchMusic, fetchTopNews, fetchYoutube, fetchTV, fetchMovie } from "./store/actions";
const TVTrend = lazy(() => import("./components/Entertainment/TVTrend"));
const MusicTrend = lazy(() => import("./components/Culture/MusicTrend"));
const MovieTrend = lazy(() => import("./components/Culture/MovieTrend"));

const REFRESH_DATA = 1000 * 60 * 60 * 3; // 3h

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const keywordRef = useRef(null);
  const movieRef = useRef(null);
  const youtubeRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      console.log("crawling start...");
      Promise.all([
        await dispatch(fetchKeyword()),
        await dispatch(fetchTopNews()),
        await dispatch(fetchYoutube()),
        await dispatch(fetchMovie()),
        await dispatch(fetchMusic()),
        await dispatch(fetchTV()),
      ]).then(setIsLoading(false));
      setIsLoading(false);
      console.log("crawling finish...");
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, REFRESH_DATA);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="App">
          <header>
            <Home ref={homeRef} />
            <Nav refs={[homeRef, keywordRef, youtubeRef, movieRef]} />
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
      )}
    </>
  );
};

export default App;
