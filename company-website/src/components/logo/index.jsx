import React from "react";
import styled, { css } from "styled-components";
import CompLogo from "../../assets/textures/croppedLogo.png";
import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: ${({ inline }) => inline && "center"};
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
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline }) => (inline ? "19px" : "40px")};
  color: ${({ inline }) => (inline ? "#FFF" : theme.primary)};
  font-weight: 700;
`;

export function Logo(props) {
  const { inline } = props;
  return (
    <LogoContainer inline={inline}>
      <LogoImg src={CompLogo} inline={inline} />
      <LogoText inline={inline}>Dioptima</LogoText>
    </LogoContainer>
  );
}
