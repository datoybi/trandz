/* eslint-disable func-names */
import * as cheerio from "cheerio";
import { NEWS_BASE_URL } from "../constants/url";

const MAX_KEYWORD_NEWS = 2;
const MAX_TOP_NEWS = 10;
const MAX_SONG = 20;

export const keywordCrawling = htmlString => {
  const $ = cheerio.load(htmlString);
  const result = [];

  $("item").each(function (_, el) {
    const pubDate = $(el).children("pubDate").text();
    const keyword = $(el).children("title").text();
    const traffic = $(el).children("ht\\:approx_traffic").text();
    const imgURL = $(el).children("ht\\:picture").text();
    const news = [];

    $(el)
      .children("ht\\:news_item")
      .each(function (index) {
        if (index >= MAX_KEYWORD_NEWS) return;
        const title = $(this).children("ht\\:news_item_title").text();
        const url = $(this).children("ht\\:news_item_url").text();
        const source = $(this).children("ht\\:news_item_source").text();
        news.push({ title, url, source });
      });
    result.push({ pubDate, keyword, traffic, news, imgURL });
  });

  return result;
};

export const newsCrawling = records => {
  return Object.entries(records).reduce((acc, [_, value], index) => {
    if (index >= MAX_TOP_NEWS) return acc;
    const { promo } = value;
    const headlines = !promo.headlines.shortHeadline ? promo.headlines.seoHeadline : promo.headlines.shortHeadline;
    let url = !promo.locators.assetUri ? promo.locators.canonicalUrl : promo.locators.assetUri;

    if (url.includes(NEWS_BASE_URL)) [, url] = url.split(NEWS_BASE_URL);
    return [...acc, [headlines, url]];
  }, []);
};

const youtubeLoop = (selector, $) => {
  let newResult = [];
  selector.each(function (_, el) {
    const videoId = $(el).find(".youtube-video-wrapper").attr("data-video-id");
    const imgURL = $(el).find("img").attr("src");
    const title = $(el).find(".video-title").last().attr("title");
    const host = $(el).find(".video-data > .name").text();
    const view = $(el).find(".detail-data.view").text();

    newResult = [
      ...newResult,
      {
        imgURL,
        videoId,
        title,
        host,
        view,
      },
    ];
  });
  return newResult;
};

export const youtubeFirstCrawling = htmlString => {
  const $ = cheerio.load(htmlString);

  const firstVideo = $("#number-one-video");
  const firstImgURL = firstVideo.find("img").attr("src");
  const firstVideoId = firstVideo.find(".youtube-video-wrapper").attr("data-video-id");
  const firstTitle = firstVideo.find(".video-title").attr("title");
  const firstHost = firstVideo.find(".detail-data.name").attr("title");
  const firstView = firstVideo.find(".detail-data.view").text();

  const result = [
    {
      imgURL: firstImgURL,
      videoId: firstVideoId,
      title: firstTitle,
      host: firstHost,
      view: firstView,
    },
  ];

  const newResult = youtubeLoop($("#ranking-videos > li"), $);
  return [...result, ...newResult];
};

export const youtubeSecondCrawling = htmlString => {
  const $ = cheerio.load(htmlString);
  const newSecondResult = youtubeLoop($("#ranking-videos > li"), $);
  return newSecondResult;
};

export const musicCrawling = htmlString => {
  const result = [];
  const $ = cheerio.load(htmlString);

  $(".list.trackList.byChart > tbody > tr").each(function (index, el) {
    if (index >= MAX_SONG) return;
    const albumCover = $(el).find("img").attr("src");
    const title = $(el).find(".title > a").text().trim();
    const singer = $(el).find(".artist > a:eq(0)").text();
    const album = $(el).find(".album").text();
    result.push({ album, title, singer, albumCover });
  });

  return result;
};

export const movieCrawling = htmlString => {
  const $ = cheerio.load(htmlString);
  const result = [];

  $(".list_movieranking > li").each(function (index, el) {
    const posterURL = $(el).find(".poster_movie > img").attr("src");
    const URL = $(el).find(".poster_info > a").attr("href");
    const title = $(el).find(".tit_item > a").text();
    const rate = $(el).find(".txt_grade").text();
    const ranking = index + 1;

    result.push({ posterURL, URL, title, rate, ranking });
  });

  return result;
};

export const TVCrawling = htmlString => {
  const $ = cheerio.load(htmlString);
  const result = [];

  $(".tb_list > tbody tr").each(function (_, el) {
    const title = $(el).find("a").first().text();
    const cast = $(el).find("a:eq(1)").text();
    const rate = $(el).find(".rate").text();
    const url = $(el).find("a").first().attr("href");

    result.push({ title, cast, rate, url });
  });

  return result;
};
