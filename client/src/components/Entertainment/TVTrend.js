/* eslint-disable react/no-array-index-key */
import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import TVElement from "./TVElement";

const TABLE_COUNT = 10;
const TVJson = [
  {
    title: "삼남매가 용감하게",
    cast: "KBS2",
    rate: "23.4%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=27049448&qvt=0&query=%EC%82%BC%EB%82%A8%EB%A7%A4%EA%B0%80%20%EC%9A%A9%EA%B0%90%ED%95%98%EA%B2%8C",
    rank: 1,
  },
  {
    title: "내 눈에 콩깍지",
    cast: "KBS1",
    rate: "16.9%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=28747161&qvt=0&query=%EB%82%B4%20%EB%88%88%EC%97%90%20%EC%BD%A9%EA%B9%8D%EC%A7%80",
    rank: 2,
  },
  {
    title: "태풍의 신부",
    cast: "KBS2",
    rate: "14.1%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=28668051&qvt=0&query=%ED%83%9C%ED%92%8D%EC%9D%98%20%EC%8B%A0%EB%B6%80",
    rank: 3,
  },
  {
    title: "미운 우리 새끼",
    cast: "SBS",
    rate: "13.8%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=3612946&qvt=0&query=%EB%AF%B8%EC%9A%B4%20%EC%9A%B0%EB%A6%AC%20%EC%83%88%EB%81%BC",
    rank: 4,
  },
  {
    title: "1박 2일 시즌4",
    cast: "KBS2",
    rate: "10.6%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=10420003&qvt=0&query=1%EB%B0%95%202%EC%9D%BC%20%EC%8B%9C%EC%A6%8C4",
    rank: 5,
  },
  { title: "법쩐", cast: "SBS", rate: "9.1%", url: "?where=nexearch&sm=tab_etc&pkid=57&os=29549460&qvt=0&query=%EB%B2%95%EC%A9%90", rank: 6 },
  {
    title: "KBS 뉴스 9",
    cast: "KBS1",
    rate: "8.7%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=658738&qvt=0&query=KBS%20%EB%89%B4%EC%8A%A4%209",
    rank: 7,
  },
  {
    title: "불후의 명곡",
    cast: "KBS2",
    rate: "8.1%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=670142&qvt=0&query=%EB%B6%88%ED%9B%84%EC%9D%98%20%EB%AA%85%EA%B3%A1",
    rank: 8,
  },
  {
    title: "나 혼자 산다",
    cast: "MBC",
    rate: "8.0%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=673019&qvt=0&query=%EB%82%98%20%ED%98%BC%EC%9E%90%20%EC%82%B0%EB%8B%A4",
    rank: 9,
  },
  {
    title: "전국노래자랑",
    cast: "KBS1",
    rate: "7.8%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659737&qvt=0&query=KBS%20%EC%A0%84%EA%B5%AD%EB%85%B8%EB%9E%98%EC%9E%90%EB%9E%91",
    rank: 10,
  },
  {
    title: "인간극장",
    cast: "KBS1",
    rate: "7.7%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659735&qvt=0&query=%EC%9D%B8%EA%B0%84%EA%B7%B9%EC%9E%A5",
    rank: 11,
  },
  {
    title: "TV 동물농장",
    cast: "SBS",
    rate: "7.7%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659120&qvt=0&query=TV%20%EB%8F%99%EB%AC%BC%EB%86%8D%EC%9E%A5",
    rank: 11,
  },
  {
    title: "아침마당",
    cast: "KBS1",
    rate: "7.5%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659003&qvt=0&query=%EC%95%84%EC%B9%A8%EB%A7%88%EB%8B%B9",
    rank: 13,
  },
  {
    title: "6시 내고향",
    cast: "KBS1",
    rate: "7.1%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659453&qvt=0&query=6%EC%8B%9C%20%EB%82%B4%EA%B3%A0%ED%96%A5",
    rank: 14,
  },
  {
    title: "가요무대",
    cast: "KBS1",
    rate: "6.7%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=659651&qvt=0&query=%EA%B0%80%EC%9A%94%EB%AC%B4%EB%8C%80",
    rank: 15,
  },
  {
    title: "사장님 귀는 당나귀 귀",
    cast: "KBS2",
    rate: "6.7%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=9329702&qvt=0&query=%EC%82%AC%EC%9E%A5%EB%8B%98%20%EA%B7%80%EB%8A%94%20%EB%8B%B9%EB%82%98%EA%B7%80%20%EA%B7%80",
    rank: 15,
  },
  {
    title: "안싸우면 다행이야",
    cast: "MBC",
    rate: "6.6%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=14332549&qvt=0&query=%EC%95%88%EC%8B%B8%EC%9A%B0%EB%A9%B4%20%EB%8B%A4%ED%96%89%EC%9D%B4%EC%95%BC",
    rank: 17,
  },
  {
    title: "놀면 뭐하니?",
    cast: "MBC",
    rate: "6.5%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=9904885&qvt=0&query=%EB%86%80%EB%A9%B4%20%EB%AD%90%ED%95%98%EB%8B%88",
    rank: 18,
  },
  {
    title: "마녀의 게임",
    cast: "MBC",
    rate: "6.3%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=28666556&qvt=0&query=%EB%A7%88%EB%85%80%EC%9D%98%20%EA%B2%8C%EC%9E%84",
    rank: 19,
  },
  {
    title: "일꾼의 탄생",
    cast: "KBS1",
    rate: "6.3%",
    url: "?where=nexearch&sm=tab_etc&pkid=57&os=24637371&qvt=0&query=%EC%9D%BC%EA%BE%BC%EC%9D%98%20%ED%83%84%EC%83%9D",
    rank: 19,
  },
];

const TVTrend = () => {
  // const { TVList = [] } = useSelector(state => state.trend);
  const TVList = TVJson;

  const firstTvList = TVList.filter((_, index) => index < TABLE_COUNT);
  const secondTvList = TVList.filter((_, index) => index >= TABLE_COUNT);
  // console.log(JSON.stringify(TVList));

  // let rank = 1;
  // let rankCount = 1;

  // const addTVRankCount = () => {
  //   rankCount += 1;
  // };

  // const changeTVRank = () => {
  //   rank += rankCount;
  //   rankCount = 1;
  // };

  // const getRank = () => {
  //   return rank;
  // };

  const tableHtml = [firstTvList, secondTvList].map((list, index) => <TVElement key={`${index}`} tvList={list} />);

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
  padding: 0 20px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
