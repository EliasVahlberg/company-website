import React from "react";
import styled from "styled-components";
import { SmallFooter } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";
import { Marginer } from "../../components/marginer";
import { PageContainerWideBg } from "../../components/pageContainer";
import {
  BottomContainer,
  MiddleContainer,
} from "../../components/pageSubContainers";

//Images import
//import GDPRIMG1 from "../../assets/textures/DataArrangingFlatline.svg";
//import GDPRIMG2 from "../../assets/textures/SecurityTwoColor.svg";

const SectionContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) =>
    props.NoBg ? "rgba(0,0,0,0)" : props.BgColor || "rgba(49, 49, 49, 0.1)"};
  @media screen and (max-width: 720px) {
    width: 90%;
  }
`;

const BlurrFilterSectionContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) =>
    props.NoBg
      ? "rgba(231, 218, 218, 0.1)"
      : props.BgColor || "rgba(49, 49, 49, 0.1)"};
  @media screen and (max-width: 720px) {
    width: 90%;
  }
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 0px rgba(17, 15, 90, 0.2);
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
  font-weight: bold;
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
    <PageContainerWideBg>
      <AltNavBar />
      <TopText>GDPR</TopText>
      <MiddleContainer>
        <BlurrFilterSectionContainer>
          <SmallText style={{ fontSize: "20px" }}>
            <b>GDPR</b>, eller <i>General Data Protection Regulation</i> är EU:s
            nya dataskyddsförordning som har ändamålet att öka förtroendet som
            en kund eller anställd har på en organisation eller bransch. Denna
            förordning trädde i kraft den 25 maj 2018.
          </SmallText>
          <br></br>
          <SmallText style={{ fontSize: "20px" }}>
            <b>
              Vi har lite kort sammanfattat vad som gäller kring
              dataskyddsförordningen och hur vi arbetar för att upprätta denna.
            </b>
          </SmallText>
        </BlurrFilterSectionContainer>
        <Marginer direction="vertical" margin="2em" />
        <BlurrFilterSectionContainer BgColor="#676e7a40">
          <SmallText style={{ fontSize: "20px" }}>
            För att underlätta vårt arbete för Er skull, för att vi ska kunna
            fullgöra våra avtal och personifiera våra kundmöten så sparar och
            hanterar vi information som kunden eller våra anställda väljer att
            dela med oss. Denna informations hanteras på ett säkert sätt och
            delas inte med tredjeparter, Er integritet är av högsta prioritet i
            vårt arbete.
          </SmallText>
        </BlurrFilterSectionContainer>
        <Marginer direction="vertical" margin="2em" />
        <BlurrFilterSectionContainer NoBg>
          <SmallText>
            <ul>
              <div align="center" style={{ fontSize: "25px" }}>
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
        </BlurrFilterSectionContainer>
        <Marginer direction="vertical" margin="2em" />
        <BlurrFilterSectionContainer NoBg>
          <SmallText>
            <div align="center">
              <Marginer direction="vertical" margin="2em" />
              <b align="center" style={{ fontSize: "25px" }}>
                Informationen vi lagrar om Er
              </b>
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
        </BlurrFilterSectionContainer>
      </MiddleContainer>

      <BottomContainer>
        <Marginer direction="vertical" margin="15em" />
        <SmallFooter />
      </BottomContainer>
    </PageContainerWideBg>
  );
}
