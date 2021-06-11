import React from "react";
import styled, { css } from "styled-components";
import CompLogo from "../../assets/textures/Logo4.svg";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 10em;
  height: 10em;
  align-self: center;
  ${({ inline }) =>
    inline &&
    css`
      width: 45px;
      height: 45px;
      margin-right: 5px;
    `};
  ${({ medium }) =>
    medium &&
    css`
      width: 7em;
      height: 7em;
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
