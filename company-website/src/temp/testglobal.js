import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { H1Normal, PNormal } from "../components/styledTextTags";
import BackgroundImgTopContainer from "../assets/textures/topSecBg_Opt.jpg";
import BackgroundImgPageContainer from "../assets/textures/Web_BG2_Opt.jpg";


//#region compInfoPage
export const TopText = styled.h1`
  font-size: 33px;
  font-weight: bold;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  margin: 0;
  text-align: center;
`;

export const S3 = styled.div`
  width: 100%;
  //max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  //height: 80%;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const S2 = styled.div`
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

export const Outer = styled.div`
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

export const PNormalResponsive = styled(PNormal)`
  @media screen and (max-width: 920px) {
    font-size: 18px;
  }
`;
//endregion compInfoPage

//region contactPage
export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImgPageContainer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const BottomPart = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const MiddlePart = styled.div`
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  bottom: 0;
  display: flex;
`;
export const InnerMiddlePart = styled.div`
  width: 80%;
  bottom: 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export const SmallText = styled.p`
  font-size: inherit;
  line-height: 1.4;
  color: ${theme.kinda_dark};
  text-align: center;
  margin: 0;
`;
//endregion contactPage

//region gdprPage
export const SectionContainer = styled.div`
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

export const BlurrFilterSectionContainer = styled.div`
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

export const AnimatedText = styled.p`
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
//endregion gdprPage

//region homepage
export const InfoContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10em, 0;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImgTopContainer});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//Absolute position ref
export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
//endregion homepage

//region seoInfoPage
//endregion seoInfoPage

//region servicesPage
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
//endregion servicesPage



//-----------------------------------------------------------
//Reoccuring: TopText, BottomPart, PageContainer, SmallText
//-----------------------------------------------------------