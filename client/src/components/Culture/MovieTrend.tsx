import { useRef, useState, forwardRef, Ref, ReactElement } from "react";
import styled from "@emotion/styled";
import carouselNextIcon from "../../assets/images/next_icon.png";
import carouselPrevIcon from "../../assets/images/prev_icon.png";
import MovieElement from "./MovieElement";
import MobileMovieTrend from "./MobileMovieTrend";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppSelector } from "../../store/hook";

interface BtnProp {
  prev?: boolean;
  onClick: () => void;
}

const MovieTrend = forwardRef((_: any, movieRef: Ref<HTMLDivElement>): ReactElement => {
  const items = useRef<HTMLDivElement>();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { movieList = [] } = useAppSelector(state => state.trend);
  const { width, height } = useWindowDimensions();
  const DISPLAY_COUNT = 10;
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

  const toggleOnClick = (newIndex: number): void => {
    items.current.style.transform = `translate3d(-${950 * newIndex}px, 0, 0)`;
    setCarouselIndex(newIndex);
  };

  return (
    <Section ref={movieRef}>
      {width > 950 ? (
        <Wrapper>
          <h1 className="section__title">
            요즘 상영하는 영화와 <br />
            예매 순위를 알아보세요.
          </h1>
          <div>
            <CarouselWrapper>{movieHTML}</CarouselWrapper>
            {carouselIndex === 0 && movieList.length > 0 && (
              <CarouselButton type="button" onClick={() => toggleOnClick(1)}>
                <img src={carouselNextIcon} alt="다음영화 순위보기" />
              </CarouselButton>
            )}
            {carouselIndex === 1 && movieList.length > 0 && (
              <CarouselButton prev type="button" onClick={() => toggleOnClick(0)}>
                <img src={carouselPrevIcon} alt="이전영화 순위보기" />
              </CarouselButton>
            )}
          </div>
        </Wrapper>
      ) : (
        <MobileMovieTrend movieList={movieList} />
      )}
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
  width: 950px;
  padding: 0 20px;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const CarouselButton = styled.button<BtnProp>`
  position: relative;
  font-size: 1rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  bottom: 383px;
  left: ${props => (props.prev ? "-45px" : "925px")};

  & > img {
    width: 45px;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const CarouselSections = styled.div`
  display: flex;
  transform: translate3d(0, 0, 0);
  transition: transform 0.3s;

  @media (max-width: 950px) {
    display: flex;
    width: 950px;
    flex-direction: column;
  }
`;

const CarouselSection = styled.div`
  width: 950px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
