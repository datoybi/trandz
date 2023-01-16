import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { NEWS_BASE_URL } from "../../constants/url";

const NewsTrend = () => {
  const { news = [] } = useSelector(state => state.trend);

  const newsHTML = news.map(([title, url]) => (
    <a href={`${NEWS_BASE_URL}${url}`} key={`${title}_${url}`} target="_blank" rel="noopener noreferrer">
      <Item>
        <p>{title}</p>
      </Item>
    </a>
  ));

  return (
    <Section>
      <Wrapper>
        <h1 className="section__title">
          BBC Korea가 엄선한 <br />톱 뉴스를 접해보세요.
        </h1>
        <List>{newsHTML}</List>
      </Wrapper>
    </Section>
  );
};

export default NewsTrend;

const Section = styled.section`
  background-color: #fff;
  padding-top: 100px;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  padding: 0 20px;
  width: 980px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.li`
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  border-radius: 14px;
  padding: 20px;
  margin: 0.5rem 0.5rem;
  width: 170px;
  height: 170px;
  font-weight: 500;
  box-sizing: border-box;

  & > p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 25px;
  }

  &:hover {
    box-shadow: 10px 10px 20px 0 rgb(0 0 0 / 4%), -10px 0 20px 0 rgb(0 0 0 / 4%);
  }

  @media (max-width: 768px) {
    padding: 40px;
    width: 35vw;
    height: 200px;
  }

  @media (max-width: 588px) {
    padding: 25px;
    width: 90vw;
    height: 100px;

    & > p {
      font-size: 1rem;
    }
  }
`;
