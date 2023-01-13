import React from "react";
import { Global, css } from "@emotion/react";

const defaultStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    color: #000;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // !:
  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    min-width: 320px;
    overflow-x: hidden;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  main {
    width: 100%;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(-45deg, #f06844, #ee4c54, #d45e95, #9c6ca6, #6583c1);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
  }

  .App {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 2s;
  }

  .blur {
    filter: blur(8px);
  }

  .blind {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  .section__title {
    margin-bottom: 48px;
    margin-top: 48px;
    font-size: 40px;
    letter-spacing: 0.009em;
    line-height: 50px;
    font-family: "Pretendard Variable";
    font-variation-settings: "wght" 1000, "wdth" 500, "GRAD" 200;
    background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: pre-wrap;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */

  @keyframes fadeIn {
    from {
      filter: blur(8px);
    }
    to {
      filter: blur(0);
    }
  }
`;

const GlobalStyle = () => <Global styles={defaultStyle} />;

export default GlobalStyle;
