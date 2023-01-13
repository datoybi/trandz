/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Nav = ({ refs }) => {
  const [keywordRef, youtubeRef, movieRef] = refs;
  const { _, height } = useWindowDimensions();
  const [fixedClass, setFixedClass] = useState(false);

  const handleScroll = () => {
    if (window === undefined) return;
    const currentHeight = window.scrollY;
    currentHeight > height - 0.5 ? setFixedClass(true) : setFixedClass(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSocialClick = () => {
    keywordRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleEntertainClick = () => {
    youtubeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleCultureClick = () => {
    movieRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Tabs fixed={fixedClass}>
      <Logo>Trendz</Logo>
      <Tab onClick={handleSocialClick}>사회</Tab>
      <Tab onClick={handleEntertainClick}>엔터테이먼트</Tab>
      <Tab onClick={handleCultureClick}>문화</Tab>
    </Tabs>
  );
};

Nav.propTypes = {
  refs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Nav;

const fadeIn = keyframes`
  from {
    height: 0;
  }
  to {
    height: 50px;
  }
`;

const fixedStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
  animation-delay: 1.5s;
  animation: ${fadeIn} 0.3s;
  border-bottom: 1px solid #d2d2d7;

  & > li:nth-of-type(1) {
    opacity: 1;
  }

  & > li:nth-of-type(n + 1) {
    color: #000;
    font-weight: 600;
    border-top: 0;
  }
`;

const Tabs = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;

  ${({ fixed }) => fixed && fixedStyle};
`;

const Tab = styled.li`
  font-size: 1rem;
  font-weight: 400;
  padding: 15px 2.5rem;
  color: #fff;
  border-top: 1.7px solid #fff;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.li`
  opacity: 0;
  padding: 15px 2.5rem;
  user-select: none;
  font-variation-settings: "wght" 900;
  color: #000;
  position: absolute;
  left: 0;
  font-family: "Pretendard Variable", Pretendard;
  font-size: 1.5rem;
  letter-spacing: -1px;

  &:hover {
    cursor: pointer;
  }
`;
