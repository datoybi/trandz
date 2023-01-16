import React, { useRef, useState, useEffect, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";
import KeywordTrend from "./KeywordTrend";
import { LOADING_KEYWORD_COUNT } from "../../constants/trendz";
import { actions } from "../../store/slice";
import loadIcon from "../../assets/plus_icon.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const KeywordsTrend = forwardRef((_, keywordRef) => {
  const keywordContainer = useRef();
  const [keywordHeight, setKeywordHeight] = useState([]);
  const { keywords = [] } = useSelector(state => state.trend);
  const { keywordCount = 0 } = useSelector(state => state.trend);
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();

  const calculateHeight = () => {
    const height = keywordHeight.reduce((acc, element, index) => {
      if (keywordCount > index) return acc + element;
      return acc;
    }, 0);

    if (width > 600 && keywordCount !== keywords.length) keywordContainer.current.style.height = `${height}px`;
    else {
      keywordContainer.current.style.height = "auto";
      dispatch(actions.setKeywordCount());
    }
  };

  useEffect(() => {
    calculateHeight();
  }, [keywordHeight, keywordCount, width]);

  const getHeight = height => {
    setKeywordHeight(prev => [...prev, height]);
  };

  const keywordElement = keywords.map((keyword, index) => (
    <KeywordTrend
      getHeight={getHeight}
      key={`${new Date(keyword.pubDate).getTime()}_${keyword.keyword}`}
      keyword={keyword}
      pastPubDate={index !== 0 && keywords[index - 1].pubDate}
      currentIndex={index}
      maxCount={keywordCount}
    />
  ));

  const loadKeyword = () => {
    calculateHeight();
    dispatch(actions.increaseKeywordCount());
  };

  const isVisibleLoadButton = keywordElement.length >= LOADING_KEYWORD_COUNT && keywordCount !== keywordElement.length;

  return (
    <Section ref={keywordRef}>
      <Wrapper>
        <h1 className="section__title">
          구글에 검색한 <br />
          인기 급상승 키워드를 확인해보세요.
        </h1>
        <Contents ref={keywordContainer}>
          <ul>{keywordElement}</ul>
        </Contents>
        {isVisibleLoadButton && <LoadButton type="image" src={loadIcon} onClick={loadKeyword} alt="더보기" />}
      </Wrapper>
    </Section>
  );
});

export default KeywordsTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-top: 160px;
  padding: 0 20px;

  @media (max-width: 600px) {
    margin-top: 100px;
  }
`;

const Contents = styled.div`
  transition: all 0.4s ease-in-out;
  overflow: hidden;

  @media (max-width: 600px) {
    overflow: visible;
  }
`;

const LoadButton = styled.input`
  background-size: cover;
  width: 40px;
  position: relative;
  display: block;
  margin: 0 auto;
  border: 0;
  cursor: pointer;
  background: transparent;
  top: -21px;
  transition: transform 0.3s;
  margin-bottom: -40px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    transform: rotate(1turn);
  }

  @media (max-width: 600px) {
    display: none;
    margin-bottom: 0;
  }
`;
