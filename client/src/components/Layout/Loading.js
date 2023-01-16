import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Loading = () => {
  return (
    <Wrapper>
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
`;

const LoadingBar = styled.div`
  width: 16rem;
  padding: 0.2rem;
  border-radius: 360px;

  border: 0.2rem solid #6e6e73;
`;

const LoadingBarInner = styled.span`
  display: block;
  width: 0%;
  height: 0.6rem;
  background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  border-radius: 360px;
  animation: ${loading} 5s linear infinite;
`;
