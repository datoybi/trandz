import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Loading = () => {
  return (
    <Wrapper>
      <LoadingSentence>
        데이터를 가져오고 있습니다. <br />
        잠시만 기다려주세요.🙄
      </LoadingSentence>
      <LoadingBar>
        <LoadingBarInner></LoadingBarInner>
      </LoadingBar>
    </Wrapper>
  );
};

export default Loading;

const loading = keyframes`
	from {
		width:0;
	}
	to {
		width: 100%;
	}
`;

const fadeOut = keyframes`
from {
	display: 1
}
to {
	display: 0;

}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 2s;
  flex-direction: column;
`;

const LoadingSentence = styled.p`
  line-height: 20px;
`;

const LoadingBar = styled.div`
  width: 16rem;
  padding: 0.2rem;
  border-radius: 360px;
  border: 0.2rem solid #6e6e73;
  margin-top: 20px;

  @media (max-width: 500px) {
    display: flex;
    width: 12rem;
    flex-direction: column;
  }
`;

const LoadingBarInner = styled.span`
  display: block;
  width: 0%;
  height: 0.6rem;
  background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  border-radius: 360px;
  animation: ${loading} 5s linear infinite;
`;
