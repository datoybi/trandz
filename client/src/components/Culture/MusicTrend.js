import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import MusicElement from "./MusicElement";
import Table from "../UI/Table";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const DEFAULT_SONG_TITLE = ["BTS", "Dynamite"];
const musicJSON = [
  {
    album: "NewJeans 'OMG'",
    title: "Ditto",
    singer: "NewJeans",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40824/4082425.jpg?version=20230105002539.0",
  },
  {
    album: "NewJeans 'OMG'",
    title: "OMG",
    singer: "NewJeans",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40824/4082425.jpg?version=20230105002539.0",
  },
  {
    album: "NewJeans 1st EP 'New Jeans'",
    title: "Hype Boy",
    singer: "NewJeans",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40780/4078016.jpg?version=20221014011218.0",
  },
  {
    album: "YOUNHA 6th Album Repackage 'END THEORY : Final Edition'",
    title: "사건의 지평선",
    singer: "윤하(Younha/ユンナ)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40734/4073469.jpg?version=20230110005119.0",
  },
  {
    album: "NewJeans 1st EP 'New Jeans'",
    title: "Attention",
    singer: "NewJeans",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40780/4078016.jpg?version=20221014011218.0",
  },
  {
    album: "ANTIFRAGILE",
    title: "ANTIFRAGILE",
    singer: "LE SSERAFIM (르세라핌)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40807/4080706.jpg?version=20221115025821.0",
  },
  {
    album: "Candy - Winter Special Mini Album",
    title: "Candy",
    singer: "NCT DREAM",
    albumCover: "https://image.bugsm.co.kr/album/images/50/205351/20535111.jpg?version=20221227005220.0",
  },
  {
    album: "After LIKE",
    title: "After LIKE",
    singer: "IVE (아이브)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40789/4078936.jpg?version=20220824005434.0",
  },
  {
    album: "쇼미더머니 11 Episode 3",
    title: "NOT SORRY (Feat. pH-1) (Prod. by Slom)",
    singer: "이영지",
    albumCover: "https://image.bugsm.co.kr/album/images/50/205352/20535217.jpg?version=20221217120005.0",
  },
  {
    album: "MOVE AGAIN",
    title: "WHEN I MOVE",
    singer: "카라(Kara)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/205309/20530901.jpg?version=20221203003507.0",
  },
  {
    album: "LOVE DIVE",
    title: "LOVE DIVE",
    singer: "IVE (아이브)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40737/4073710.jpg?version=20220426143556.0",
  },
  {
    album: "I love",
    title: "Nxde",
    singer: "(여자)아이들",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40807/4080705.jpg?version=20221020022905.0",
  },
  {
    album: "VIBE (feat. Jimin of BTS)",
    title: "VIBE (feat. Jimin of BTS)",
    singer: "태양",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40830/4083071.jpg?version=20230114071350.0",
  },
  {
    album: "YOUNHA 6th Album 'END THEORY'",
    title: "오르트구름",
    singer: "윤하(Younha/ユンナ)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40675/4067509.jpg?version=20230110021338.0",
  },
  {
    album: "NewJeans 1st EP 'New Jeans'",
    title: "Cookie",
    singer: "NewJeans",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40780/4078016.jpg?version=20221014011218.0",
  },
  {
    album: "I Don’t Think That I Like Her",
    title: "I Don’t Think That I Like Her",
    singer: "Charlie Puth(찰리 푸스)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40797/4079758.jpg?version=20220920023605.0",
  },
  {
    album: "BORN PINK",
    title: "Shut Down",
    singer: "BLACKPINK",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40788/4078880.jpg?version=20221124004550.0",
  },
  {
    album: "스트릿 맨 파이터(SMF) Original Vol.3 (계급미션)",
    title: "새삥 (Prod. ZICO) (Feat. 호미들)",
    singer: "지코",
    albumCover: "https://image.bugsm.co.kr/album/images/50/204905/20490588.jpg?version=20220927020129.0",
  },
  {
    album: "Takin' It Back",
    title: "Made You Look",
    singer: "Meghan Trainor(메간 트레이너)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/198964/19896475.jpg?version=20221129172110.0",
  },
  {
    album: "FEARLESS",
    title: "FEARLESS",
    singer: "LE SSERAFIM (르세라핌)",
    albumCover: "https://image.bugsm.co.kr/album/images/50/40751/4075173.jpg?version=20221014002609.0",
  },
];

const MusicTrend = () => {
  // const { musicList = [] } = useSelector(state => state.trend);
  const musicList = musicJSON;
  // console.log(JSON.stringify(musicList));
  const { width, height } = useWindowDimensions();

  const getBestMusic = () => {
    if (musicList.length === 0) return DEFAULT_SONG_TITLE;
    return [musicList[0].singer, musicList[0].title];
  };

  const [bestSinger, bestSong] = getBestMusic();

  const emptyHtml = (
    <tr>
      <EmptyStyle colSpan="4">데이터가 없습니다.</EmptyStyle>
    </tr>
  );

  const musicElement = list => list.map((song, index) => <MusicElement key={`${song.title}_${song.album}`} song={song} rating={index + 1} />);
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
      width: 10%;
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

`;
