/* eslint-disable react/no-array-index-key */
import { ReactElement } from "react";
import styled from "@emotion/styled";
import TVElement from "./TVElement";
import { useAppSelector } from "../../store/hook";

const TABLE_COUNT = 10;

const TVTrend = (): ReactElement => {
  const { TVList = [] } = useAppSelector(state => state.trend);
  const firstTvList = TVList.filter((_, index) => index < TABLE_COUNT);
  const secondTvList = TVList.filter((_, index) => index >= TABLE_COUNT);
  const tableHtml = [firstTvList, secondTvList].map((list, index) => <TVElement key={`${index}`} tvList={list} />);

  return (
    <Section>
      <Wrapper>
        <SectionTitle className="section__title">
          한 주간 높은 시청률을 기록한
          <br />
          TV 프로그램을 알아보세요.
        </SectionTitle>
        <TableWrapper>{tableHtml}</TableWrapper>
      </Wrapper>
    </Section>
  );
};

export default TVTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const SectionTitle = styled.h1`
  padding-left: 20px;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-bottom: 100px;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  margin: 0 auto;
  @media (max-width: 915px) {
    flex-direction: column;
  }
`;
