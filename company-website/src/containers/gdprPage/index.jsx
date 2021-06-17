import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomPart = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const MiddlePart = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const TopText = styled.h1`
  font-size: 33px;
  font-weight: bold;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
  text-align: center;
  margin-bottom: 50px;
`;

const SmallText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
  text-align: center;
  #movingDiv {
  animation: move 5s infinite;
  }
  @keyframes move {
  50% {margin-bottom: 50px;}
  }
`;

export function GDPRPage(props) {
  return (
    <PageContainer>
      <AltNavBar />
      <TopText>GDPR</TopText>
      <MiddlePart>
      <SmallText>
      <div id="movingDiv">
        <p>
        Can you move away from me?
        </p>
        </div>
        <p>I'm confused</p>
        </SmallText>
      </MiddlePart>
      <BottomPart>
        <Footer />
      </BottomPart>
    </PageContainer>
  );
}
