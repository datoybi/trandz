import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Text>
          © 2023 Trendz Created By&nbsp;
          <UnderlineText href="https://github.com/datoybi" target="_blank" rel="noopener noreferrer">
            Dasom Yun
          </UnderlineText>
          .
        </Text>
        <Text>
          Have some questions? Send an email to&nbsp;
          <UnderlineText>dsy0302@gmail.com</UnderlineText>.
        </Text>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  border-top: 1px solid;
  border-image: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  border-image-slice: 1;
  height: 200px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Text = styled.span`
  background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 8px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const UnderlineText = styled.a`
  background: linear-gradient(to top, #9c6ca6 3%, transparent 0%);
`;
