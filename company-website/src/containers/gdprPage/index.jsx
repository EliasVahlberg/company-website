import React from "react";
import styled from "styled-components";
import { SmallFooter } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";

//Images import
import GDPRIMG1 from "../../assets/textures/DataArrangingFlatline.svg";
import GDPRIMG2 from "../../assets/textures/SecurityTwoColor.svg";
import PageContainer from "../../components/pageContainer";
import {
  BottomContainer,
  MiddleContainer,
} from "../../components/pageSubContainers";

const SectionContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;

  background: ${(props) =>
    props.NoBg ? "rgba(0,0,0,0)" : props.BgColor || "rgba(49, 49, 49, 0.1)"};
  @media screen and (max-width: 720px) {
    width: 90%;
  }
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
  font-size: 17px;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
`;

//LOOK AT THIS DUDE
const AnimatedText = styled.p`
  font-size: inherit;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  text-align: center;
  margin: 0;
  #movingDiv {
    animation: move 0.1s infinite;
  }
  @keyframes move {
    50% {
      margin-bottom: 80px;
    }
  }
`;

export function GDPRPage(props) {
  return (
    <PageContainer>
      <AltNavBar />
      <TopText>GDPR</TopText>
      <MiddleContainer>
        <SectionContainer>
          <SmallText>
            <b>GDPR</b>, eller <i>General Data Protection Regulation</i> är EU:s
            nya dataskyddsförordning som har ändamålet att öka förtroendet som
            en kund eller anställd har på en organisation eller bransch. Denna
            förordning trädde i kraft den 25 maj 2018.
          </SmallText>
          <SmallText>
            <b>
              Vi har lite kort sammanfattat vad som gäller kring
              dataskyddsförordningen och hur vi arbetar för att upprätta denna.
            </b>
          </SmallText>
        </SectionContainer>
        <Marginer direction="vertical" margin="2em" />
        <SectionContainer BgColor="#2c406240">
          <SmallText>
            För att underlätta vårt arbete för Er skull, för att vi ska kunna
            fullgöra våra avtal och personifiera våra kundmöten så sparar och
            hanterar vi information som kunden eller våra anställda väljer att
            dela med oss. Denna informations hanteras på ett säkert sätt och
            delas inte med tredjeparter, Er integritet är av högsta prioritet i
            vårt arbete.
          </SmallText>
        </SectionContainer>
        <SectionContainer NoBg>
          <SmallText>
            <ul>
              <div align="center">
                <b>Ni som kund eller anställd förbehåller er rätten att</b>
              </div>
              <li>begära utdrag av informationen vi har på Er.</li>
              <li>veta hur vi behandlar er information.</li>
              <li>be oss korrigera felaktiga uppgifter.</li>
              <li>begära att vi raderar informationen vi lagrat om dig.</li>
              <li>begära en begränsning av vår behandling av era uppgifter.</li>
              <li>invända mot hur vi behandlar era uppgifter.</li>
              <li>klaga.</li>
            </ul>
          </SmallText>
        </SectionContainer>
        <SectionContainer NoBg>
          <SmallText>
            <div align="center">
              <Marginer direction="vertical" margin="2em" />
              <b align="center">Informationen vi lagrar om Er</b>
            </div>

            <ul>
              <li>Kontaktuppgifter</li>
              <li>Platsdata</li>
              <li>Profildata</li>
              <li>Beställningsinformation</li>
              <li>Kommunikationsuppgifter</li>
              <li>Betalningsinformation</li>
              <li>Leveransinformation</li>
            </ul>
          </SmallText>
        </SectionContainer>
      </MiddleContainer>

      <BottomContainer>
        <Marginer direction="vertical" margin="15em" />
        <SmallFooter />
      </BottomContainer>
    </PageContainer>
  );
}
