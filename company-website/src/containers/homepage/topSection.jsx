import React from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import BackgroundImg from "../../assets/textures/topSecBg.jpg";
import { Logo } from "../../components/logo";
import { Button } from "../../components/button";
import { DownArrow } from "../../components/downArrow";
import { NavBar } from "../../components/navbar";
import { Element, scroller } from "react-scroll";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopText = styled.h1`
  font-size: 33px;
  font-weight: bold;
  line-height: 1.4;
  color: white;
  margin: 0;
`;
//Absolute position ref
const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSec = () => {
    scroller.scrollTo("infoSection", { smooth: true, duration: 1500 });
  };
  return (
    <Element name="topSection">
      <TopContainer>
        <BackgroundFilter>
          <NavBar />
          <Marginer direction="vertical" margin="7em" />
          <Logo />
          <Marginer direction="vertical" margin="2em" />
          <TopText>Lokal sökoptimering</TopText>

          <TopText>Teknisk rådgivning och service</TopText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Hitta tjänster</Button>
          <ArrowContainer onClick={scrollToNextSec}>
            <DownArrow></DownArrow>
          </ArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
