import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";
import { InfoSegment } from "../../components/infoSegment";
import { Marginer } from "../../components/marginer";

//Images import
import GDPRIMG1 from "../../assets/textures/DataArrangingFlatline.svg";
import GDPRIMG2 from "../../assets/textures/SecurityTwoColor.svg";

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
  font-size: inherit;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  text-align: center;
  margin: 0;
  //#movingDiv {
  //animation: move 3s infinite;
  //}
  //@keyframes move {
  //50% {margin-bottom: 50px;}
  //}
`;

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
  50% {margin-bottom: 80px;}
  }
`;

/* 
    <SmallText>
      <div id="movingDiv">
        <p>
        <b>GDPR</b>, eller <i>General Data Protection Regulation</i> är EU:s nya dataskyddsförordning som har ändamålet att öka förtroendet som en kund eller anställd har på en organisation eller bransch. Denna förordning trädde i kraft den 25 maj 2018.
        </p>
      </div>
      <p>Vi har lite kort sammanfattat vad som gäller kring dataskyddsförordningen och hur vi arbetar för att upprätta denna.</p>
    </SmallText>

*/


export function GDPRPage(props) {
  return (
    <PageContainer>
      <AltNavBar />
      <TopText>GDPR</TopText>

      <MiddlePart>
      <SmallText>
      <div id="movingDiv">
        <p>
        <b>GDPR</b>, eller <i>General Data Protection Regulation</i> är EU:s nya dataskyddsförordning som har ändamålet att öka förtroendet som en kund eller anställd har på en organisation eller bransch. Denna förordning trädde i kraft den 25 maj 2018.
        </p>
      </div>
      <b>Vi har lite kort sammanfattat vad som gäller kring dataskyddsförordningen och hur vi arbetar för att upprätta denna.</b>
      </SmallText>
      <Marginer direction="vertical" margin="2em" />
      <SmallText>
      För att underlätta vårt arbete för Er skull, för att vi ska kunna fullgöra våra avtal och personifiera våra kundmöten så sparar och hanterar vi information som kunden eller våra anställda väljer att dela med oss.
      Denna informations hanteras på ett säkert sätt och delas inte med tredjeparter, Er integritet är av högsta prioritet i vårt arbete.
      </SmallText>

      <AnimatedText>
      <div align="center" id="movingDiv">
      <ul>
        <b>Ni som kund eller anställd förbehåller er rätten att</b>
        <li>begära utdrag av informationen vi har på Er.</li>
        <li>veta hur vi behandlar er information.</li>
        <li>be oss korrigera felaktiga uppgifter.</li>
        <li>begära att vi raderar informationen vi lagrat om dig.</li>
        <li>begära en begränsning av vår behandling av era uppgifter.</li>
        <li>invända mot hur vi behandlar era uppgifter.</li>
        <li>klaga.</li>
      </ul>
      <AnimatedText>
        <div align="center">
      <Marginer direction="vertical" margin= "2em" />
      <b align="center">Informationen vi har lagrat om Er</b>
      </div>
      </AnimatedText>
      </div>
      </AnimatedText>

      <AnimatedText>
      <div align="center">
      <ul>
        <li>Kontaktuppgifter</li>
        <li>Platsdata</li>
        <li>Profildata</li>
        <li>Beställningsinformation</li>
        <li>Kommunikationsuppgifter</li>
        <li>Betalningsinformation</li>
        <li>Leveransinformation</li>
      </ul>
      </div>
      </AnimatedText>
    
      </MiddlePart>

    <div>
    {/* 

    <BottomPart>
      <Marginer direction="vertical" margin= "15em" />
      <Footer />
    </BottomPart> 

    */
    }
    </div>
    </PageContainer>
  );
}
