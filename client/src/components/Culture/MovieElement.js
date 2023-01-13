import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import thumbUp from "../../assets/thumbs-up.png";
import { MOVIE_BASE_URL } from "../../constants/url";

const MovieElement = ({ movie }) => {
  return (
    <Movie>
      <a href={`${MOVIE_BASE_URL}${movie.URL}`} target="_blank" rel="noopener noreferrer">
        <Poster>
          <PosterRanking>{movie.ranking}</PosterRanking>
          <PosterImage alt={movie.title} src={movie.posterURL} />
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

MovieElement.propTypes = {
  movie: PropTypes.exact({
    posterURL: PropTypes.string,
    URL: PropTypes.string,
    title: PropTypes.string,
    rate: PropTypes.string,
    ranking: PropTypes.number,
  }).isRequired,
};

export default MovieElement;

const Movie = styled.div`
  margin-bottom: 20px;
`;

const Poster = styled.div`
  position: relative;

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
  width: 180px;
  height: 258px;
  border-radius: 10px;
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
