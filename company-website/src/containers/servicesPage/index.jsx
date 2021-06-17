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
export function ServicesPage(props) {
  return (
    <PageContainer>
      <AltNavBar />
      <TopText>Våra tjänster</TopText>
      <BottomPart>
        <Footer />
      </BottomPart>
    </PageContainer>
  );
}
