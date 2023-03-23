export interface windowObject {
  width: number;
  height: number;
}

export interface KeywordTrendProps {
  getHeight: (height: number) => void;
  keyword: {
    pubDate: Date;
    keyword: string;
    traffic: string;
    news: [{ title: string; url: string; source: string }];
    imgURL: string;
  };
  pastPubDate: Date;
  currentIndex: number;
  maxCount: number;
}

export interface TableProp {
  className?: string;
  children?: React.ReactNode;
}

export interface YoutubeProp {
  videoId: string;
  imgURL: string;
  title: string;
  host: string;
  view: string;
}

export interface KeywordProps {
  pubDate: Date;
  keyword: string;
  traffic: string;
  news: [{ title: string; url: string; source: string }];
  imgURL: string;
}

export interface MusicProps {
  album: string;
  albumCover: string;
  singer: string;
  title: string;
}

export interface MovieProps {
  URL: string;
  posterURL: string;
  ranking: number;
  rate: string;
  title: string;
}

export interface TvProps {
  cast: string;
  rank: number;
  rate: string;
  title: string;
  url: string;
}

export interface TrendState {
  keywords: KeywordProps[];
  keywordCount: number;
  news: string[];
  youtubeList: YoutubeProp[];
  musicList: MusicProps[];
  movieList: MovieProps[];
  moviePage: number;
  TVList: TvProps[];
}
