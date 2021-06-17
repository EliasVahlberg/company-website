import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { AltNavBar } from "../../components/navbar";
import BackgroundImg from "../../assets/textures/Web_BG2_Opt.jpg";
import { Footer } from "../../components/footer";
import { theme } from "../../theme";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const BGContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: relative;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const BottomPart = styled.div`
  width: 100%;
  position: absolute;
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
`;

//<Marginer direction="vertical" margin="100em" />
export function CompInfoPage(props) {
  return (
    <PageContainer>
      <BGContainer>
        <AltNavBar />
        <TopText>Om oss</TopText>
        <BottomPart>
          <Footer />
        </BottomPart>
      </BGContainer>
    </PageContainer>
  );
}
