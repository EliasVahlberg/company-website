import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { InfoSegment } from "../components/infoSegment";
import { SectionTitle } from "../components/sectionTitle";
import InfoImg1 from "../assets/textures/SEOInfoB1.svg";
import InfoImg2 from "../assets/textures/SEOInfoB2.svg";
import InfoImg3 from "../assets/textures/SEOInfoB3.svg";
import InfoImg4 from "../assets/textures/SEOInfoB4.svg";
import { Marginer } from "../components/marginer";

const InfoContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10em, 0;
`;
export function SeoInfoSection() {
  return (
    <InfoContainer name="infoSection">
      <SectionTitle>INFO</SectionTitle>
      <InfoSegment
        title="Segment Title"
        description="Förklaring:Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nunc ante sapien, ornare nec nulla ut, gravida tempus elit.
        Quisque pulvinar at ante maximus faucibus.
        Nam viverra sapien facilisis urna posuere, vitae cursus"
        imgURL={InfoImg1}
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Segment Title2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nunc ante sapien, ornare nec nulla ut, gravida tempus elit.
        Quisque pulvinar at ante maximus faucibus.
        Nam viverra sapien facilisis urna posuere, vitae cursus"
        imgURL={InfoImg2}
        isReversed
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Segment Title3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nunc ante sapien, ornare nec nulla ut, gravida tempus elit.
        Quisque pulvinar at ante maximus faucibus.
        Nam viverra sapien facilisis urna posuere, vitae cursus"
        imgURL={InfoImg3}
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
      <InfoSegment
        title="Segment Title4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Nunc ante sapien, ornare nec nulla ut, gravida tempus elit.
        Quisque pulvinar at ante maximus faucibus.
        Nam viverra sapien facilisis urna posuere, vitae cursus"
        imgURL={InfoImg4}
        isReversed
      ></InfoSegment>
      <Marginer direction="vertical" margin="3em" />
    </InfoContainer>
  );
}
