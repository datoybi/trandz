import styled from "@emotion/styled";
import MovieElement from "./MovieElement";

const MobileMovieTrend = ({ movieList }) => {
  return (
    <MobileSection>
      <h1 className="section__title">
        요즘 상영하는 영화와 <br />
        예매 순위를 알아보세요.
      </h1>
      <MobileMovieList>
        {movieList.map(movie => (
          <MovieElement key={movie.title} movie={movie} />
        ))}
      </MobileMovieList>
    </MobileSection>
  );
};

const MobileSection = styled.div`
  height: 100%;
  width: 980px;
  margin-bottom: 100px;
  padding: 0 20px;
`;

const MobileMovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 1rem;
  justify-content: center;
`;

export default MobileMovieTrend;
