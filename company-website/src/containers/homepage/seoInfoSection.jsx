import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { InfoSegment } from "../../components/infoSegment";
import { SectionTitle } from "../../components/sectionTitle";
import InfoImg1 from "../../assets/textures/SEOInfoB1.svg";
import InfoImg2 from "../../assets/textures/SEOInfoB2.svg";
import InfoImg3 from "../../assets/textures/SEOInfoB3.svg";
import InfoImg4 from "../../assets/textures/SEOInfoB4.svg";
import InfoImgL from "../../assets/textures/SEOInfoLocal.svg";
import { Marginer } from "../../components/marginer";

const InfoContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10em, 0;
`;
export function SeoInfoSection() {
  window.scrollTo(0, 0);
  return (
    <InfoContainer name="infoSection">
      <SectionTitle>INFO</SectionTitle>
      <InfoSegment
        title="Vad är sökoptimering?"
        description="Sökoptimering är en form av digital marknadsföring som eftersträvar att ge mer synlighet i webbens söktjänster. För företag faller dessa tjänster in i två kategorier, hemsidor och Google My Business (GMB). Det finns många olika sätt att sökoptimera. Den vanligaste metoden är att göra ändringar i företagets hemsida och andra ställen där företaget finns listat (sociala medier, söktjänster som hitta.se och eniro). Huvudsakligen är vår sökoptimering riktad mot Google med dess anknutna tjänster som Maps och GMB (beroende på om företaget har en hemsida eller inte).
        "
        imgURL={InfoImg1}
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Hur funkar sökoptimering?"
        description="Sökoptimering kan variera beroende på typen av företag. Vi delar in den i två bitar, traditionell och lokal sökoptimering. Beroende på hur ditt företag ser ut kan dessa två vara olika viktiga."
        imgURL={InfoImg2}
        isReversed
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Traditionell sökoptimering"
        description="Fokuserar på företagets hemsida och hur enkelt det är att hitta den utifrån en samling relevanta sökord t.ex. frisör, pizzeria, klädbutik, mm. Denna typ av sökoptimering sker genom ändring i titlar, rubriker och text som finns på hemsidan. Målet med dessa ändringar är att göra det tydligt både för en läsare och sökmotorn att avgöra vad för typ av verksamhet det är. Viktigt är också att den framstår som seriös och pålitlig. Utöver de textmässiga ändringarna så läggs mycket arbete på att hemsidan laddar snabbt och på utseendet av den slutgiltiga metadatan som presenteras till sökmotorn."
        imgURL={InfoImg4}
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Lokal sökoptimering"
        description="Den andra biten är lokal sökoptimering. Detta sker främst genom ändringar i företagets GMB-sida. Först är det viktigt att se till att den är registrerad och innehåller alla nödvändiga delar och att informationen är konsekvent med andra källor."
        imgURL={InfoImgL}
        isReversed
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Hur kan sökoptimering gynna ditt företag?"
        description="Sökoptimering fungerar som en typ av marknadsföring riktad mot nya kunder som kanske inte känner till ditt företag. Detta sker genom att ditt företag rekommenderas av Google i vanliga sökningar och på Maps. För ett platsbundet företag så kommer avståndet från sökaren ha en betydande inverkan men även hur väl din hemsida och GMB-kontot är sökoptimerade."
        imgURL={InfoImg3}
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
    </InfoContainer>
  );
}
