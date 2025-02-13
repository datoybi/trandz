/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, ReactElement } from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface tabsProp {
  fixed?: boolean;
}

const Nav = ({ refs }): ReactElement => {
  const [homeRef, keywordRef, youtubeRef, movieRef] = refs;
  const { width, height } = useWindowDimensions();
  const [fixedClass, setFixedClass] = useState(false);

  const handleScroll = (): void => {
    if (window === undefined) return;
    const currentHeight = window.scrollY;
    currentHeight > height - 0.5 ? setFixedClass(true) : setFixedClass(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (): void => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSocialClick = (): void => {
    keywordRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleEntertainClick = (): void => {
    youtubeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleCultureClick = (): void => {
    movieRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Tabs fixed={fixedClass}>
      <Logo onClick={handleLogoClick}>Trendz</Logo>
      <Tab data-cy="social-nav" onClick={handleSocialClick}>
        사회
      </Tab>
      <Tab data-cy="entertainment-nav" onClick={handleEntertainClick}>
        엔터테이먼트
      </Tab>
      <Tab data-cy="culture-nav" onClick={handleCultureClick}>
        문화
      </Tab>
    </Tabs>
  );
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

const Tabs = styled.ul<tabsProp>`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;

  ${({ fixed }) => fixed && fixedStyle};

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    padding-left: 10px;
    padding-right: 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    padding: 10px 0.7rem;
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

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
`;
