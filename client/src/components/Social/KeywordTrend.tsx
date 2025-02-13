import { ReactElement, useEffect, useRef } from "react";
import * as DOMPurify from "dompurify";
import styled from "@emotion/styled";
import { KeywordTrendProps } from "../../types/types";

const KeywordTrend = ({ getHeight, keyword, pastPubDate }: KeywordTrendProps): ReactElement => {
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
        <KeywordTraffic>
          {keyword.traffic}
          <TrafficContent>회 이상 검색</TrafficContent>
        </KeywordTraffic>
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

const TrafficContent = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsLink = styled.a`
  display: block;
  margin: 21px 0;
`;

const NewsTitle = styled.span`
  font-size: 1em;
  font-weight: 600;
  display: inline-block;
  line-height: 1.3rem;
`;

const NewsSource = styled.span`
  font-size: 1em;
  font-weight: 600;
  display: inline-block;
  margin-right: 10px;
  float: right;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Thumbnail = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;

  & > img {
    transition: all 0.2s linear;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default KeywordTrend;
