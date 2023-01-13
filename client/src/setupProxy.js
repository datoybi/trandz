/* eslint-disable import/no-extraneous-dependencies */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/trends/trendingsearches", {
      target: "https://trends.google.co.kr",
      secure: false,
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/mostread.json", {
      target: "https://www.bbc.com/korean",
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/youtube-video-rank/*", {
      target: "https://kr.noxinfluencer.com",
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware("/chart/track/week/total", {
      target: "https://music.bugs.co.kr",
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/ranking/*", {
      target: "https://movie.daum.net",
      changeOrigin: true,
    }),
  );

  const proxyTable = {
    "m.search.naver": "http://localhost:3000",
    "m.search.naver/search.naver": "http://localhost:3000",
  };

  app.use(
    createProxyMiddleware("/search.naver", {
      target: "https://search.naver.com",
      changeOrigin: true,
      hostRewrite: "https://search.naver.com",
    }),
  );

  // const rewriteFn = function (path, req) {
  //   return path.replace("/m.search.naver", "/search.naver");
  // };

  // const options = {
  //   // 프록시 대상 호스트
  //   target: "https://m.search.naver.com",
  //   pathRewrite: "/search.naver",
  //   logger: console,
  //   changeOrigin: true,
  // };

  // app.use(createProxyMiddleware("/m.search.naver", options));
};
