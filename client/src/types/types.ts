export interface windowObject {
  width: number;
  height: number;
}

export interface Keywords {
  keywords: [
    {
      pubDate: Date;
      keyword: string;
      traffic: string;
      news: [{ title: string; url: string; source: string }];
      imgURL: string;
    },
  ];
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

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
  // props: Props & React.ComponentPropsWithoutRef<"butt on">; // to impersonate all the props of a button element and explicitly not forwarding its ref
  // props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}

export interface YoutubeItemProp {
  el: { videoId: string; imgURL: string; title: string; host: string; view: string };
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
