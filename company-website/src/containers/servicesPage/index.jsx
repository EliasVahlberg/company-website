import React from "react";
import styled from "styled-components";
import { SmallFooter } from "../../components/footer";
import { theme } from "../../theme";
import { AltNavBar } from "../../components/navbar";
import { PageContainerWideBg } from "../../components/pageContainer";
import { H1Normal, PNormal } from "../../components/styledTextTags";
import {
  BottomContainer,
  MiddleContainer,
} from "../../components/pageSubContainers";
import ServiceCard from "../../components/serviceCard";

//Testas senare: import * as constants from "../../temp/testglobal.js";

export const BlurrFilterContainer = styled.div`
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 0px rgba(17, 15, 90, 0.2);
  width: 75%;
  max-width: 1230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 720px) {
    width: 100%;
    backdrop-filter: none;
    box-shadow: none;
    padding: 5px;
  }
`;

const card1Desc = (
  <>
    <b>Om tjänsten:</b> Inledningsvis gör en vi bedömning på eran lokala
    synlighet och vad de största bristerna är. Om bedömningen inte visar några
    större brister eller förbättringspunkter så kommer vi avsluta arbetet där
    vilket inte kostar något.
    <br />
    <br />
    Annars så blir nästa del att vi tar kontakt med er och går igenom vad vi kan
    åtgärda, vad det kan ge för effekt och en tidsplan. Utifrån det så avgör ni
    om ni vill köpa tjänsten.
    <br />
    <br />
    För att kunna starta åtgärdning av de brister vi har hittat så samlar in
    information som eventuellt saknas om ert företag. Vi kommer även fixa en
    temporära inloggningar åt oss som vi kommer att använda tills tjänsten är
    avslutad.
    <br />
    <br />
    Då vi anser att sökoptimeringen är klar kommer vi att återkomma och
    presentera resultaten. Ni får en möjlighet att komma med synpunkter.
    <br />
    <br />
    Den sista biten är att vi samlar statistik på hur eran synlighet har
    förändrats så ni själva kan se inverkan och så vi kan se så att det var
    lyckat.
  </>
);
const card2Desc = (
  <>
    <b>Om tjänsten: </b>
    Vi erbjuder fotografering som en tilläggstjänst vid lokal sökoptimering. Vi
    tar kontakt innan bestämmer tid och eventuella förberedelser. Efter
    fotograferingen får rättigheterna till alla bilder. Vi använder även dessa
    som omslagsbilder och liknande som en del av sökoptimeringen.
  </>
);
const card3Desc = (
  <>
    <b>Om tjänsten:</b> Inledningsvis gör en vi bedömning av synlighet och hur
    väl hemsidan är sökoptimerad med hjälp av olika verktyg (
    <i>Semrush, BuzzStream,Linkody</i>).<br></br>
    <b>Faktorer som kan påverka detta är:</b>
    <li>struktur</li>
    <li>användning av relevanta sökord</li>
    <li>Prestanda</li>
    <li>Utseende</li>
    Utöver detta undersöker vi hur många citations (citering av företagets
    kontaktinfo) som finns samt hur konsekventa dessa är. Om bedömningen inte
    visar några större brister eller förbättringspunkter så kommer vi avsluta
    arbetet där vilket inte kostar något.
    <br></br>
    <br></br>I vissa fall så är det inte lönt att sökoptimera hemsidan, detta är
    fallet för vissa äldre hemsidor. I dessa fall kan vi erbjuda en kostnadsplan
    för en ny hemsida och sökoptimering av denna.
    <br></br>
    <br></br>
    Annars så blir nästa del att vi tar kontakt med er och går igenom vad vi kan
    åtgärda, vad det kan ge för effekt och en tidsplan. Utifrån det så avgör ni
    om ni vill köpa tjänsten.
    <br></br>
    <br></br>
    För att genomföra arbetet kommer vi behöva åtkomst till hemsidans kod och
    vilken host den har. Själva arbetsprocessen kan se helt olik ut beroende på
    typ av hemsida och företag. Det kommer även ske återkoppling under arbetets
    gång så ni vet hur det ligger till.Vi kommer även fixa en temporära
    inloggningar åt oss som vi kommer att använda tills tjänsten är avslutad. Då
    vi anser att sökoptimeringen är klar kommer vi att återkomma och presentera
    resultaten. Ni får en möjlighet att komma med synpunkter.
    <br></br>
    <br></br>
    Den sista biten är att vi samlar statistik på hur trafik till hemsidan så ni
    själva kan se inverkan och så vi kan se så att det var lyckat.
  </>
);
export function ServicesPage(props) {
  window.scrollTo(0, 0);
  return (
    <PageContainerWideBg>
      <AltNavBar />
      <H1Normal font_size="50px">Tjänster</H1Normal>
      <MiddleContainer>
        <BlurrFilterContainer>
          <ServiceCard
            title="Lokal Sökoptimering"
            description={card1Desc}
            price="2000kr"
            link="/contact"
          ></ServiceCard>
          <ServiceCard
            title="Tillägstjänst: Fotografering"
            description={card2Desc}
            price="500kr"
            link="/contact"
          ></ServiceCard>
          <ServiceCard
            title="Sökoptimering av Hemsida"
            description={card3Desc}
            price="3000kr"
            link="/contact"
          ></ServiceCard>
        </BlurrFilterContainer>
      </MiddleContainer>
      <BottomContainer>
        <SmallFooter />
      </BottomContainer>
    </PageContainerWideBg>
  );
}
