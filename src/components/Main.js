import React from "react";

import TrendKeywords from "./KeywordsTrend";
import NewsTrend from "./NewsTrend";
import YouTubeTrend from "./YoutubeTrend";
import SongTrend from "./SongTrend";
import MovieTrend from "./MovieTrend";
import TVTrend from "./TVTrend";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <article>
        <TrendKeywords />
        <NewsTrend />
        <YouTubeTrend />
        <SongTrend />
        <MovieTrend />
        <TVTrend />
      </article>
    </main>
  );
};

export default Main;
