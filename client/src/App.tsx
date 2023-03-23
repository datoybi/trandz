import React, { useEffect, useState, useRef, lazy } from "react";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";
import Home from "./components/Layout/Home";
import KeywordsTrend from "./components/Social/KeywordsTrend";
import NewsTrend from "./components/Social/NewsTrend";
import YoutubeTrend from "./components/Entertainment/YoutubeTrend";
import Loading from "./components/Layout/Loading";
import { fetchAllData } from "./store/actions";
import { useAppDispatch } from "store/hook";

const TVTrend = lazy(() => import("./components/Entertainment/TVTrend"));
const MusicTrend = lazy(() => import("./components/Culture/MusicTrend"));
const MovieTrend = lazy(() => import("./components/Culture/MovieTrend"));

const REFRESH_DATA = 1000 * 60 * 60 * 3; // 3h

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const keywordRef = useRef<HTMLDivElement>(null);
  const movieRef = useRef<HTMLDivElement>(null);
  const youtubeRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      console.log("crawling start...");
      dispatch(fetchAllData());
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
