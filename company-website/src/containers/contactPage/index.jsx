import React from "react";
import styled from "styled-components";
import { SmallFooter } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";
import ContactFormStyled from "../../components/contactFormStyled";
import ContactInfoPanel from "../../components/contactInfoPanel";
import BackgroundImg from "../../assets/textures/Web_BG2_Opt.jpg";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const BottomPart = styled.div`
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
`;

const MiddlePart = styled.div`
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 0;
  display: flex;
`;
const InnerMiddlePart = styled.div`
  width: 80%;
  bottom: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
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
        <ContactFormStyled id="ContactFormStyled1" />
      </MiddlePart>

      <BottomPart>
        <SmallFooter />
      </BottomPart>
    </PageContainer>
  );
}
