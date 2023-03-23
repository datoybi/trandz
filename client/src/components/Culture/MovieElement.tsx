import { ReactElement } from "react";
import styled from "@emotion/styled";
import thumbUp from "../../assets/images/thumbs-up.png";
import noImage from "../../assets/images/ico_noimage.png";
import { MOVIE_BASE_URL } from "../../constants/url";

const MovieElement = ({ movie }): ReactElement => {
  return (
    <Movie>
      <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
        <Poster>
          <PosterRanking>{movie.ranking}</PosterRanking>
          {!movie.posterURL ? <EmptyPoster /> : <PosterImage alt={movie.title} src={movie.posterURL} />}
        </Poster>
        <Rating>
          <RatingImage alt="평점" src={thumbUp} />
          <RatingText>{movie.rate}</RatingText>
        </Rating>
        <Title>{movie.title}</Title>
      </a>
    </Movie>
  );
};

export default MovieElement;

const Movie = styled.li`
  margin-bottom: 20px;
  width: 180px;
  list-style: none;

  @media (max-width: 950px) {
  }
`;

const Poster = styled.div`
  position: relative;
  width: 180px;
  height: 258px;

  &:hover {
    opacity: 0.8;
    transition: all 0.1s linear;
  }
`;

const PosterRanking = styled.span`
  font-size: 2rem;
  position: absolute;
  color: #fff;
  top: 7px;
  left: 10px;
  font-style: italic;
  z-index: 1;
`;

const PosterImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;

const Rating = styled.div`
  margin-bottom: 0.4rem;
`;

const RatingImage = styled.img`
  width: 20px;
  position: relative;
  top: 5px;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  margin-left: 0.15rem;
`;

const Title = styled.span`
  display: block;
  font-size: 1rem;
  width: 180px;
  line-height: 20px;
`;

const EmptyPoster = styled.div`
  background: #edeef0 url(${noImage}) no-repeat 50% 50%;
  background-size: 44px 44px;
  height: 100%;
  border-radius: 10px;
  z-index: 2;
`;
