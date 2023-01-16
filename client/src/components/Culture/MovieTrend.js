import React, { useRef, useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import carouselNextIcon from "../../assets/next_icon.png";
import carouselPrevIcon from "../../assets/prev_icon.png";
import MovieElement from "./MovieElement";

const DISPLAY_COUNT = 10;

const MovieTrend = forwardRef((_, movieRef) => {
  const items = useRef();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { movieList = [] } = useSelector(state => state.trend);

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
