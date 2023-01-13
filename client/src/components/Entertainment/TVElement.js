import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Table from "../UI/Table";
import { TV_BASE_URL } from "../../constants/url";

const TVElement = ({ tvList = [], addTVRankCount, changeTVRank, getRank }) => {
  const emptyHtml = (
    <tr>
      <td colSpan="4">데이터가 없습니다.</td>
    </tr>
  );

  const handleOnClick = url => {
    window.open(`${TV_BASE_URL}${url}`);
  };

  const calculateRanking = (index, list) => {
    if (index === 0) return;
    if (list[index - 1].rate === list[index].rate) {
      addTVRankCount();
      return;
    }
    changeTVRank();
  };

  const tableContentHtml = list =>
    list.map((tv, index) => {
      calculateRanking(index, list);
      return (
        <Tr key={`${getRank()}_${tv.title}`} onClick={() => handleOnClick(tv.url)}>
          <td>{getRank()}</td>
          <td>
            <a href={`${TV_BASE_URL}${tv.url}`} target="_blank" rel="noopener noreferrer">
              {tv.title}
            </a>
          </td>
          <td>{tv.cast}</td>
          <td>{tv.rate}</td>
        </Tr>
      );
    });

  return (
    <TableWrapper>
      <Table>
        <colgroup>
          <Col />
          <Col />
          <Col />
        </colgroup>
        <thead>
          <tr>
            <Th colSpan="3">프로그램</Th>
            <Th>시청률</Th>
          </tr>
        </thead>
        <TBody>{tvList.length === 0 ? emptyHtml : tableContentHtml(tvList)}</TBody>
      </Table>
    </TableWrapper>
  );
};

TVElement.propTypes = {
  tvList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTVRankCount: PropTypes.func.isRequired,
  changeTVRank: PropTypes.func.isRequired,
  getRank: PropTypes.func.isRequired,
};

export default TVElement;

const TableWrapper = styled.div`
  width: 50%;
  max-width: 600px;
  margin-right: 20px;
`;

const Th = styled.th`
  padding-top: 23px;
  padding-left: 35px;
  padding-bottom: 23px;
  font-weight: 600;

  width: ${({ children }) => {
    let neWidth = "0%";
    if (children === "프로그램") {
      neWidth = "70%";
    } else if (children === "시청률") {
      neWidth = "40%";
    }
    return neWidth;
  }};
`;

const Col = styled.col`
  &:nth-of-type(1) {
    width: 32%;
  }

  &:nth-of-type(2) {
    width: 55%;
  }

  &:nth-of-type(3) {
    width: 30%;
  }
`;

const TBody = styled.tbody`
  & tr:nth-of-type(2n) {
    background-color: #eaeaea;
  }
`;

const Tr = styled.tr`
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }

  & > td {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  & > td:nth-of-type(1),
  & > td:nth-of-type(4) {
    padding-left: 35px;
    padding-right: 35px;
  }

  & > td :nth-of-type(2) {
    padding-left: 10px;
    padding-right: 10px;
  }

  & > td :nth-of-type(3) {
    padding-left: 0;
    padding-right: 0;
  }
`;
