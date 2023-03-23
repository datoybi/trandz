import { ReactElement } from "react";
import styled from "@emotion/styled";

const MusicElement = ({ song, rating }): ReactElement => {
  return (
    <Tr>
      <AlbumTd>
        <img src={song.albumCover} alt={`${song.title}_${song.album}`} />
      </AlbumTd>
      <Td>{rating}</Td>
      <Td>{song.title}</Td>
      <Td>{song.singer}</Td>
      <Td>{song.album}</Td>
    </Tr>
  );
};

export default MusicElement;

const Tr = styled.tr`
  @media (max-width: 550px) {
    height: 4rem;
  }
`;

const Td = styled.td`
  padding: 4px 35px;

  &:nth-of-type(1) > img {
    width: 50px;
    border-radius: 3px;
  }

  @media (max-width: 950px) {
    &:nth-of-type(5n) {
      display: none;
    }
  }

  @media (max-width: 550px) {
    padding: 0px 14px;
  }
`;

const AlbumTd = styled.td`
  overflow: inherit !important;
  padding: 4px 35px;

  @media (max-width: 550px) {
    display: none;
  }
`;
