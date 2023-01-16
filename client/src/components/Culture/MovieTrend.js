import React, { useRef, useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import carouselNextIcon from "../../assets/next_icon.png";
import carouselPrevIcon from "../../assets/prev_icon.png";
import MovieElement from "./MovieElement";

const DISPLAY_COUNT = 10;

const movieJSON = [
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd331d74e425a3c71989ab14d9cbe83241377daa5",
    URL: "/moviedb/main?movieId=130710",
    title: "교섭",
    rate: "6.4",
    ranking: 1,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0cdb0abb3d8da8c6332bf6a945a86f9a32f67abd",
    URL: "/moviedb/main?movieId=62708",
    title: "아바타: 물의 길",
    rate: "7.8",
    ranking: 2,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F04a53a2b94d62ba8a1fabd956545cda3d4d3a500",
    URL: "/moviedb/main?movieId=147261",
    title: "유령",
    rate: "6.6",
    ranking: 3,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd2fef75e56d3ae4e7f360216073cc28373616fb1",
    URL: "/moviedb/main?movieId=166526",
    title: "방탄소년단: 옛 투 컴 인 시네마",
    rate: "9.7",
    ranking: 4,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa0aaca4b87c541b11085139bd941da0996a78ec1",
    URL: "/moviedb/main?movieId=164918",
    title: "더 퍼스트 슬램덩크",
    rate: "8.7",
    ranking: 5,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F762a642d585ecff70e0e5cfc4211d9a0f809bf3b",
    URL: "/moviedb/main?movieId=115401",
    title: "영웅",
    rate: "9.2",
    ranking: 6,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3cea7130cd9af437f24406c9c67768dcd50cf4d9",
    URL: "/moviedb/main?movieId=158407",
    title: "장화신은 고양이: 끝내주는 모험",
    rate: "8.7",
    ranking: 7,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F76abe9bc273f863478184d0e118bc0fe3468a5dc",
    URL: "/moviedb/main?movieId=161463",
    title: "라일 라일 크로커다일",
    rate: "10.0",
    ranking: 8,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F343661a7c1984ae8d0598a5af0c2998117407f52",
    URL: "/moviedb/main?movieId=162710",
    title: "오늘 밤, 세계에서 이 사랑이 사라진다 해도",
    rate: "6.7",
    ranking: 9,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fb33e6ef62b68fb55adbc5053f7286e66a649ce71",
    URL: "/moviedb/main?movieId=165770",
    title: "캐리와 슈퍼콜라",
    rate: "10.0",
    ranking: 10,
  },
  { URL: "/moviedb/main?movieId=166888", title: "위너 2022 콘서트 더 서클 더 무비", rate: "5.0", ranking: 11 },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F8a0f72e7ecacd28e1cb4c59ddb160603ca93d7e1",
    URL: "/moviedb/main?movieId=155637",
    title: "극장판 파워레인저 캡틴포스: 지구를 위한 싸움",
    rate: "10.0",
    ranking: 12,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F267706755c59d8e24c7c01e9a8e5a93a0d92b4d1",
    URL: "/moviedb/main?movieId=166471",
    title: "천룡팔부: 교봉전",
    rate: "8.5",
    ranking: 13,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fb00aca7f6762981e4ba08ebe8196f1e3148f340d",
    URL: "/moviedb/main?movieId=147599",
    title: "스위치",
    rate: "7.4",
    ranking: 14,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fed40e6d5c28f1b63306902f5664a155c7dba5a90",
    URL: "/moviedb/main?movieId=159392",
    title: "유랑의 달",
    rate: "9.0",
    ranking: 15,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fdade6385f0020e242239939c4bf87a2539fc8d01",
    URL: "/moviedb/main?movieId=157160",
    title: "어메이징 모리스",
    rate: "0.0",
    ranking: 16,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4899f10a714f3b1cb5bf9569f84e96df0020d414",
    URL: "/moviedb/main?movieId=149380",
    title: "올빼미",
    rate: "8.9",
    ranking: 17,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F476753059b9a0901244a47cc9459ffaa7457a339",
    URL: "/moviedb/main?movieId=133319",
    title: "프린스 챠밍",
    rate: "8.0",
    ranking: 18,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F70a96f1d9bdd4ffadf1cb39404a6fe8ccfa6c5f9",
    URL: "/moviedb/main?movieId=159254",
    title: "시간을 꿈꾸는 소녀",
    rate: "8.8",
    ranking: 19,
  },
  {
    posterURL: "https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F467a58f91c5c6e961f27e39d97e72026d1abbead",
    URL: "/moviedb/main?movieId=160428",
    title: "해시태그 시그네",
    rate: "9.7",
    ranking: 20,
  },
];

const MovieTrend = forwardRef((_, movieRef) => {
  const items = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  // const { movieList = [] } = useSelector(state => state.trend);
  const movieList = movieJSON;
  // console.log(JSON.stringify(movieList));

  const firstMovieList = movieList.filter((_, index) => index < DISPLAY_COUNT);
  const secondMovieList = movieList.filter((_, index) => index >= DISPLAY_COUNT);

  const movieHTML = (
    <CarouselSections ref={items}>
      <div>
        <CarouselSection>
          {firstMovieList.map(movie => (
            <MovieElement key={movie.title} movie={movie} />
          ))}
        </CarouselSection>
      </div>
      <div>
        <CarouselSection>
          {secondMovieList.map(movie => (
            <MovieElement key={movie.title} movie={movie} />
          ))}
        </CarouselSection>
      </div>
    </CarouselSections>
  );

  const toggleOnClick = newIndex => {
    items.current.style.transform = `translate3d(-${980 * newIndex}px, 0, 0)`;
    setCarouselIndex(newIndex);
  };

  return (
    <Section ref={movieRef}>
      <Wrapper>
        <h1 className="section__title">
          요즘 상영하는 영화와 <br />
          예매 순위를 알아보세요.
        </h1>
        <div>
          <CarouselWrapper>{movieHTML}</CarouselWrapper>
          {carouselIndex === 0 && (
            <CarouselButton type="button" onClick={() => toggleOnClick(1)}>
              <img src={carouselNextIcon} alt="다음영화 순위보기" />
            </CarouselButton>
          )}
          {carouselIndex === 1 && (
            <CarouselButton prev type="button" onClick={() => toggleOnClick(0)}>
              <img src={carouselPrevIcon} alt="이전영화 순위보기" />
            </CarouselButton>
          )}
        </div>
      </Wrapper>
    </Section>
  );
});

export default MovieTrend;

const Section = styled.section`
  background-color: #fff;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 100px;
  width: 980px;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const CarouselButton = styled.button`
  position: relative;
  font-size: 1rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  bottom: 386px;
  left: ${props => (props.prev ? "-35px" : "958px")};

  & > img {
    width: 45px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const CarouselSections = styled.div`
  display: flex;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;
`;

const CarouselSection = styled.div`
  width: 980px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
