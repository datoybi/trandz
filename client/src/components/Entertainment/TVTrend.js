/* eslint-disable react/no-array-index-key */
import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import TVElement from "./TVElement";

const TABLE_COUNT = 10;

const TVTrend = () => {
  const { TVList = [] } = useSelector(state => state.trend);
  const firstTvList = TVList.filter((_, index) => index < TABLE_COUNT);
  const secondTvList = TVList.filter((_, index) => index >= TABLE_COUNT);

  let rank = 1;
  let rankCount = 1;

  const addTVRankCount = () => {
    rankCount += 1;
  };

  const changeTVRank = () => {
    rank += rankCount;
    rankCount = 1;
  };

  const getRank = () => {
    return rank;
  };

  const tableHtml = [firstTvList, secondTvList].map((list, index) => (
    <TVElement key={`${index}`} tvList={list} addTVRankCount={addTVRankCount} changeTVRank={changeTVRank} getRank={getRank} />
  ));

  return (
    <Section>
      <Wrapper>
        <h1 className="section__title">
          한 주간 높은 시청률을 기록한
          <br /> TV 프로그램을 알아보세요.
        </h1>
        <TableWrapper>{tableHtml}</TableWrapper>
      </Wrapper>
    </Section>
  );
};

export default TVTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-bottom: 100px;
`;

const TableWrapper = styled.div`
  display: flex;
`;
