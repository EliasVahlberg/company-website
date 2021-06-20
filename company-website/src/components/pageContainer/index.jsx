import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/textures/Web_BG2_Opt.jpg";
export const PageContainer = styled.div`
  width: 100%;
  height: 200vh; // 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
