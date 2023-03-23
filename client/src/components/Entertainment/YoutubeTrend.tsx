import { forwardRef, Ref, ReactElement } from "react";
import styled from "@emotion/styled";
import { YOUTUBE_PLAY_URL } from "../../constants/url";
import { useAppSelector } from "../../store/hook";

const YouTubeTrend = forwardRef((_: any, youtubeRef: Ref<HTMLElement>): ReactElement => {
  const { youtubeList = [] } = useAppSelector(state => state.trend);

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
    <Section ref={youtubeRef} data-cy="entertainment-wrapper">
      <Wrapper>
        <SectionTitle className="section__title">
          24시간 동안 한국에서 <br />
          가장 많이 본 유튜브를 시청하세요.
        </SectionTitle>
        <List>
          {contentsHtml}
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
        </List>
      </Wrapper>
    </Section>
  );
});

export default YouTubeTrend;

const Section = styled.section`
  background-color: #fafafa;
`;

const SectionTitle = styled.h1`
  padding-left: 20px;
`;

const Wrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
  width: 980px;
`;

const List = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fill, 295px);
  grid-gap: 1rem;
  justify-content: center;

  @media (max-width: 1011px) {
    grid-template-columns: repeat(auto-fill, 360px);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(auto-fill, 295px);
  }
`;

const Item = styled.li`
  width: 285px;
  height: 255px;
  white-space: normal;
  margin: 0.4rem;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
  border-radius: 18px;
  margin-bottom: 40px;
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:hover {
    box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
    transform: scale3d(1.01, 1.01, 1.01);
  }

  @media (max-width: 1011px) {
    width: 350px;
    height: 300px;
  }

  @media (max-width: 420px) {
    width: 285px;
    height: 255px;
  }
`;

const ItemContainer = styled.div`
  margin: 0.45rem;
  width: 230px;
  height: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;

  @media (max-width: 1011px) {
    width: 300px;
    height: 270px;
  }
`;

const YoutubeThumbnail = styled.div`
  position: relative;

  & > img {
    width: 100%;
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
