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
const TopText = styled.h1`
  font-size: 33px;
  font-weight: bold;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
  text-align: center;
`;

const MiddlePart = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.p`
  font-size: inherit;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  text-align: center;
  margin: 0;
`;





//<Marginer direction="vertical" margin="100em" />
export function ContactPage(props) {
  return (
    <PageContainer>
      <AltNavBar />
      <TopText>Kontakta oss</TopText>
      
      <MiddlePart>
        <SmallText>
          
        </SmallText>
      </MiddlePart>

      <BottomPart>
        <Footer />
      </BottomPart>
    </PageContainer>
  );
}
