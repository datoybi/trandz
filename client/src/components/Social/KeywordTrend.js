import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as DOMPurify from "dompurify";
import styled from "@emotion/styled";

const KeywordTrend = ({ getHeight, keyword, pastPubDate }) => {
  const liRef = useRef(null);
  const currentDate = new Date(keyword.pubDate).toLocaleDateString();
  const pastDate = pastPubDate && new Date(pastPubDate).toLocaleDateString();
  const showDate = pastDate !== currentDate;

  useEffect(() => {
    getHeight(liRef.current.offsetHeight);
  }, []);

  const keywordNewsHtml = keyword.news.map(newsElement => (
    <NewsLink href={newsElement.url} key={newsElement.url} target="_blank" rel="noopener noreferrer">
      <ul>
        <NewsTitle dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(newsElement.title) }} />
        <NewsSource>{newsElement.source}</NewsSource>
      </ul>
    </NewsLink>
  ));

  return (
    <li ref={liRef}>
      {showDate && <KeywordDate>{currentDate}</KeywordDate>}
      <Wrapper>
        <KeywordTitle>{keyword.keyword}</KeywordTitle>
        <KeywordTraffic>{keyword.traffic}회 이상 검색</KeywordTraffic>
        <KeywordNewsWrapper>
          <KeywordNews>{keywordNewsHtml}</KeywordNews>
          <Thumbnail>
            <img src={keyword.imgURL} alt={`${keyword.keyword} 대표사진`} />
          </Thumbnail>
        </KeywordNewsWrapper>
      </Wrapper>
    </li>
  );
};

KeywordTrend.propTypes = {
  getHeight: PropTypes.func.isRequired,
  keyword: PropTypes.exact({
    pubDate: PropTypes.string,
    keyword: PropTypes.string,
    traffic: PropTypes.string,
    news: PropTypes.array,
    imgURL: PropTypes.string,
  }).isRequired,
  pastPubDate: PropTypes.node.isRequired,
};

const KeywordDate = styled.span`
  display: block;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.009em;
`;

const Wrapper = styled.div`
  padding: 0.5rem 0;
  border-top: 1px solid #d2d2d7;
  padding: 32px 0 12px 0;
`;

const KeywordTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-block;
  margin-bottom: 10px;
  font-family: "Pretendard Variable", Pretendard;
  font-variation-settings: "wght" 800, "wdth" 500;
`;

const KeywordTraffic = styled.span`
  color: #6e6e73;
  float: right;
  font-weight: 500;
`;

const KeywordNewsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & :hover ~ span > img {
    transform: scale(1.3);
  }
`;

const KeywordNews = styled.div`
  width: 87%;
`;

const NewsLink = styled.a`
  display: block;
  margin: 21px 0;
`;

const NewsTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
`;

const NewsSource = styled.span`
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  margin-right: 10px;
  float: right;
`;

const Thumbnail = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;

  & > img {
    transition: all 0.2s linear;
  }
`;

export default KeywordTrend;
