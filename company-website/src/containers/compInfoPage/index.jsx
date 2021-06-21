import React from "react";
import styled from "styled-components";
import { AltNavBar } from "../../components/navbar";
import { SmallFooter } from "../../components/footer";
import { theme } from "../../theme";
import { PageContainerWideBg } from "../../components/pageContainer";
import { H1Normal, PNormal } from "../../components/styledTextTags";
import {
  BottomContainer,
  MiddleContainer,
} from "../../components/pageSubContainers";
import ContactInfoPanel from "../../components/contactInfoPanel";

const TopText = styled.h1`
  font-size: 33px;
  font-weight: bold;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
  text-align: center;
`;
const aboutUsText =
  "Vi är ett mindre företag startat av två studenter med en bred erfarenhet innom digitalisering, sökoptimering (SEO), web och applikationsutveckling. Vi hjälper ditt företag att att synas och nu ut till potentiella kunder. Vi erbjuder både traditionell och lokal sökoptimering. Efteråt uppföljer vi och ser till att alla våra kunder är nöjda med det arbete vi genomfört. Vi erbjuder inget vi inte kan leverera på men vi kan ge rimliga uppskattning på vad ni kan förvänta för resultat. Vi jobbar mer fasta priser på alla våra tjänster så att ni att ni kan avgöra om vi är rätt för er. Vi är fullständigt transparenta i allt arbete vi genomför, dokumentation finns alltid tillgängligt till dig som kund.";
//<Marginer direction="vertical" margin="100em" />

const S3 = styled.div`
  width: 100%;
  //max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  //height: 80%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const S2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 50%;
  //height: 100vh;
  padding: 0 0 0 0;
  resize: none;
  flex-flow: column nowrap;
  @media screen and (max-width: 1920px) {
    width: 100%;
  }
`;
const Outer = styled.div`
  max-width: 1920px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 100px 0;
  @media screen and (max-width: 920px) {
    flex-direction: column;
    width: 95%;
  }
`;
const PNormalResponsive = styled(PNormal)`
  @media screen and (max-width: 920px) {
    font-size: 18px;
  }
`;
export function CompInfoPage(props) {
  return (
    <PageContainerWideBg>
      <AltNavBar />
      <H1Normal font_size="50px">Om oss</H1Normal>
      <MiddleContainer>
        <Outer>
          <ContactInfoPanel width={"30%"}></ContactInfoPanel>
          <S2>
            <S3>
              <PNormalResponsive font_size="30px" margin="10">
                {aboutUsText}
              </PNormalResponsive>
            </S3>
          </S2>
        </Outer>
      </MiddleContainer>
      <BottomContainer>
        <SmallFooter />
      </BottomContainer>
    </PageContainerWideBg>
  );
}
