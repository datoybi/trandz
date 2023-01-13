import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const MusicElement = ({ song, rating }) => {
  return (
    <tr>
      <Td>
        <img src={song.albumCover} alt={`${song.title}_${song.album}`} />
      </Td>
      <Td>{rating}</Td>
      <Td>{song.title}</Td>
      <Td>{song.singer}</Td>
      <Td>{song.album}</Td>
    </tr>
  );
};

MusicElement.propTypes = {
  song: PropTypes.exact({
    title: PropTypes.string,
    album: PropTypes.string,
    singer: PropTypes.string,
    albumCover: PropTypes.string,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default MusicElement;

const Td = styled.td`
  padding: 4px 35px;

  &:nth-of-type(1) > img {
    width: 50px;
    border-radius: 3px;
  }
`;
