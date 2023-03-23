import { ReactElement } from "react";
import styled from "@emotion/styled";
import MusicElement from "./MusicElement";
import Table from "../UI/Table";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppSelector } from "../../store/hook";
import { MusicProps } from "../../types/types";

const DEFAULT_SONG_TITLE = ["BTS", "Dynamite"];

const MusicTrend = (): ReactElement => {
  const { musicList = [] } = useAppSelector(state => state.trend);
  const { width, height } = useWindowDimensions();

  const getBestMusic = (): string[] => {
    if (musicList.length === 0) return DEFAULT_SONG_TITLE;
    return [musicList[0].singer, musicList[0].title];
  };

  const [bestSinger, bestSong] = getBestMusic();

  const emptyHtml = (
    <tr>
      <EmptyStyle colSpan={4}>데이터가 없습니다.</EmptyStyle>
    </tr>
  );

  const musicElement = (list: MusicProps[]) =>
    list.map((song, index) => <MusicElement key={`${song.title}_${song.album}`} song={song} rating={index + 1} />);
  const colSpan = width > 550 ? 3 : 2;

  return (
    <Section>
      <Wrapper>
        <h1 className="section__title">
          지금 뜨는 노래는? <br />
          &apos;{bestSinger}&apos;의 &apos;{bestSong}&apos;🎶
        </h1>
        <Table>
          <colgroup>
            <Col />
            <Col />
            <Col />
          </colgroup>
          <thead>
            <tr>
              <Th colSpan={colSpan}>노래</Th>
              <Th>가수</Th>
              <Th>앨범</Th>
            </tr>
          </thead>
          <TBody>{musicList.length === 0 ? emptyHtml : musicElement(musicList)}</TBody>
        </Table>
      </Wrapper>
    </Section>
  );
};

export default MusicTrend;

const Section = styled.section`
  background-color: #fafafa;
  padding-bottom: 120px;
`;

const Wrapper = styled.div`
  width: 980px;
  margin-bottom: 100px;
  padding: 0 20px;
`;
const Col = styled.col`
  &:nth-of-type(1) {
    width: 10%;

    @media (max-width: 950px) {
      width: 10%;
    }

    @media (max-width: 550px) {
      width: 12%;
    }
  }

  &:nth-of-type(2) {
    width: 7%;

    @media (max-width: 950px) {
      width: 15%;
    }

    @media (max-width: 550px) {
      width: 25%;
    }
  }

  &:nth-of-type(3) {
    width: 35%;
  }

  @media (max-width: 950px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

const Th = styled.th`
  padding-top: 23px;
  padding-left: 35px;
  padding-bottom: 23px;
  font-weight: 600;

  width: ${({ children }) => {
    switch (children) {
      case "노래":
        return "40%";
      case "가수":
        return "20%";
      case "앨범":
        return "35%";
      default:
        return "0%";
    }
  }};

  @media (max-width: 950px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

const EmptyStyle = styled.td`
  text-align: center;
  padding-bottom: 1rem;
`;

const TBody = styled.tbody`
  & tr:nth-of-type(2n) {
    background-color: #eaeaea;
  }
`;
