import React from "react";
import styled from "styled-components";
import BackgroundImgTall from "../../assets/textures/Web_BG2_Opt.jpg";
import BackgroundImgWide from "../../assets/textures/Web_BG2_16_9_Opt.jpg";
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageContainerTallBg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImgTall});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
export const PageContainerWideBg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImgWide});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
