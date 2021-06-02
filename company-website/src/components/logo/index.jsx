import React from "react";
import styled, { css } from "styled-components";
import CompLogo from "../../assets/textures/croppedLogo.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  align-self: center;
  ${({ inline }) =>
    inline &&
    css`
      width: 35px;
      height: 35px;
      margin-right: 5px;
    `};
  ${({ medium }) =>
    medium &&
    css`
      width: 5em;
      height: 5em;
      margin-right: 5px;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, medium }) =>
    medium ? "23px" : inline ? "19px" : "40px"};
  color: ${({ inline }) => (inline ? "#FFF" : theme.primary)};
  font-weight: 700;
`;

export function Logo(props) {
  const { inline, medium } = props;
  return (
    <LogoContainer inline={inline}>
      <LogoImg src={CompLogo} inline={inline} medium={medium} />
      <LogoText inline={inline} medium={medium}>
        Dioptima
      </LogoText>
    </LogoContainer>
  );
}
