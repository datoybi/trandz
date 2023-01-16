import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const YOUTUBE_PLAY_URL = "https://www.youtube.com/watch?v=";

const youtubeJSON = [
  {
    imgURL: "https://i.ytimg.com/vi/cgdne04i99I/maxresdefault.jpg",
    videoId: "cgdne04i99I",
    title: "[오늘 이 뉴스] \"태어나서 그런 불 처음 봤어요\" 부산 23층 건물 삼킨 '불기둥' (2023.01.09/MBC뉴스)",
    host: "MBCNEWS",
    view: "505.92만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/2zXg8CbymYc/maxresdefault.jpg",
    videoId: "2zXg8CbymYc",
    title: "MONSTA X 몬스타엑스 'Beautiful Liar' MV",
    host: " starshipTV",
    view: " 751.98만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/4LkHkcpx_XU/maxresdefault.jpg",
    videoId: "4LkHkcpx_XU",
    title: "런떴2",
    host: " 런닝맨 - 스브스 공식 채널",
    view: " 58.67만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/g8C7gj8n4Jw/maxresdefault.jpg",
    videoId: "g8C7gj8n4Jw",
    title: "[full] 침체의 서막 1부 - 모두가 가난해진다 | 시사직격 신년특집 KBS 230106 방송",
    host: " KBS시사직격",
    view: " 221.34만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/QOMO6HVmmuQ/maxresdefault.jpg",
    videoId: "QOMO6HVmmuQ",
    title: "한국 찜질방 처음 와본 브라질 처제의 반응 (한국여행 2편)",
    host: " Family Kim 패밀리김",
    view: " 40.12만 누적 조회수",
  },
  {
    imgURL: "https://i.ytimg.com/vi/aUoosbzSKCQ/maxresdefault.jpg",
    videoId: "aUoosbzSKCQ",
    title: "[선공개] 아쉬운 마음에 슬기를 찾아간 진영 | 솔로지옥2 | 넷플릭스",
    host: " Netflix Korea 넷플릭스 코리아",
    view: " 98.18만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/z0JraysWnNw/maxresdefault.jpg",
    videoId: "z0JraysWnNw",
    title: "GOAL | Hwang Hee-chan | Liverpool v Wolverhampton Wanderers | Third Round | Emirates FA Cup 2022-23",
    host: " The Emirates FA Cup",
    view: " 32.44만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/qW8pEIocLkU/maxresdefault.jpg",
    videoId: "qW8pEIocLkU",
    title: "[한글자막] 박재범에게 원소주 원가를 묻다",
    host: " 피식대학Psick Univ",
    view: " 78.43만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/2qrk-B89-90/maxresdefault.jpg",
    videoId: "2qrk-B89-90",
    title: "김은숙 작가 안길호 감독, 배우들의 비하인드 코멘터리 | 더 글로리 | 넷플릭스",
    host: " Netflix Korea 넷플릭스 코리아",
    view: " 254.67만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/Ofag23zAsHM/maxresdefault.jpg",
    videoId: "Ofag23zAsHM",
    title: "[제37회 골든디스크] 임영웅 - '우리들의 블루스 + London Boy' ♪｜JTBC 230107 방송",
    host: " KPOP JAMM",
    view: " 30.78만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/pXV-dJfu8JI/maxresdefault.jpg",
    videoId: "pXV-dJfu8JI",
    title: "[제37회 골든디스크] NewJeans - 'Opening + Attention (Golden Disc ver.) + Hype Boy + OMG' ♪｜JTBC 230107 방송",
    host: " KPOP JAMM",
    view: " 186.74만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/8e4jTe3XO44/maxresdefault.jpg",
    videoId: "8e4jTe3XO44",
    title:
      "[#미스터트롯2-2회 몰아보기] 지금까지 이런 오디션 도전자들은 없었다! 역대 최강의 실력자들 무대 모음집 #TV조선조이 #TVCHOSUNJOY (221229 방송)",
    host: " TVCHOSUN JOY",
    view: " 120.39만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/8gvWlWzry9s/maxresdefault.jpg",
    videoId: "8gvWlWzry9s",
    title: "옆집형팀에 합류한 새로운 멤버를 소개합니다! 반갑습니다!!",
    host: " 옆집형NeighborBro",
    view: " 12.87만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/Bs33zNxTX94/maxresdefault.jpg",
    videoId: "Bs33zNxTX94",
    title: "문상훈씨.. 초면에 죄송합니다..",
    host: " 피지컬갤러리",
    view: " 69.12만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/MgDRnTGPGwY/maxresdefault.jpg",
    videoId: "MgDRnTGPGwY",
    title: "[ENG] 또 신년모임은 핑계고",
    host: " 뜬뜬 DdeunDdeun",
    view: " 102.51만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/ukkAzff8_q0/maxresdefault.jpg",
    videoId: "ukkAzff8_q0",
    title: "[아형✪하이라이트] ＜재벌집 막내아들＞ 순양가가 떴다↗ '촬영 비하인드'부터 '송중기 에피소드'까지🔥 | 아는 형님 | JTBC 230107 방송",
    host: " 아는형님 Knowingbros",
    view: " 71.99만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/yasvDkYWqww/maxresdefault.jpg",
    videoId: "yasvDkYWqww",
    title: "[4K 직캠] 박창근X동생 박창광 - 먼지가 되어 [불후의 명곡2 전설을 노래하다/Immortal Songs 2] | KBS 방송",
    host: " KBS 레전드 케이팝",
    view: " 31.12만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/PGGdneG9g3Y/maxresdefault.jpg",
    videoId: "PGGdneG9g3Y",
    title: "SF9 'Puzzle' MUSIC VIDEO",
    host: " FNCEnt",
    view: " 300.77만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/zrLdC7aYy64/maxresdefault.jpg",
    videoId: "zrLdC7aYy64",
    title: "맛의 고장 전라도에서 환장하고 먹고 왔습니다 | 또간집 EP.19",
    host: " 재밌는 거 올라온다",
    view: " 215.29만 누적 조회수 ",
  },
  {
    imgURL: "https://i.ytimg.com/vi/VXb2boVJlyY/maxresdefault.jpg",
    videoId: "VXb2boVJlyY",
    title: "MONSTA X 몬스타엑스 'REASON' Preview",
    host: " starshipTV",
    view: " 28.97만 누적 조회수 ",
  },
];

const YouTubeTrend = forwardRef((_, youtubeRef) => {
  const { youtubeList } = useSelector(state => state.trend);
  // const youtubeList = youtubeJSON;
  console.log(JSON.stringify(youtubeList));

  // console.log(youtubeList);
  const contentsHtml = youtubeList.map((el, index) => (
    <Item key={el.videoId}>
      <a href={`${YOUTUBE_PLAY_URL}${el.videoId}`} target="_blank" rel="noopener noreferrer">
        <YoutubeThumbnail>
          <img src={el.imgURL} alt={el.imgURL} />
        </YoutubeThumbnail>
        <InfoWrapper>
          <YoutubeRanking>
            <RankingText>
              <span className="blind">랭킹</span>
              {index + 1}
            </RankingText>
          </YoutubeRanking>
          <MainInfo>
            <YoutubeTitle>{el.title}</YoutubeTitle>
            <YoutubeHost>{el.host}</YoutubeHost>
            <YoutubeView>
              <span className="blind">조회수</span>
              {`조회수 ${el.view.replace(" 누적 조회수", "")}`}
            </YoutubeView>
          </MainInfo>
        </InfoWrapper>
      </a>
    </Item>
  ));

  return (
    <Section ref={youtubeRef}>
      <Wrapper>
        <h1 className="section__title">
          24시간 동안 한국에서 <br />
          가장 많이 본 유튜브를 시청하세요.
        </h1>
        <List>{contentsHtml}</List>
      </Wrapper>
    </Section>
  );
});

export default YouTubeTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const Wrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
  width: 980px;
`;

const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin-bottom: 40px;
  width: 14rem;
  height: 14rem;
  white-space: normal;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  border-radius: 18px;
  margin-right: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const YoutubeThumbnail = styled.div`
  position: relative;

  & > img {
    width: 14rem;
  }
`;

const InfoWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  height: 80px;
`;

const YoutubeRanking = styled.div`
  position: absolute;
  padding-left: 5px;
  top: 0;
  bottom: 1px;
  width: 20px;
  text-align: center;
`;

const RankingText = styled.span`
  display: block;
  font-size: 22px;
  line-height: 24px;
`;

const MainInfo = styled.div`
  display: -webkit-box;
  padding-right: 10px;
  margin-left: 35px;
  overflow: hidden;
  max-height: 40px;
  font-size: 15px;
  line-height: 18px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  color: #090909;
`;

const YoutubeTitle = styled.div`
  display: block;
  max-height: 38px;
  white-space: nowrap;
  font-size: 1rem;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
`;
const YoutubeHost = styled.div`
  margin-top: 5px;
  color: gray;
  display: block;
  font-size: 0.9rem;
`;

const YoutubeView = styled.div`
  position: absolute;
  bottom: 10px;
  padding-left: 18px;
  font-size: 14px;
  line-height: 20px;
  right: 15px;
`;
