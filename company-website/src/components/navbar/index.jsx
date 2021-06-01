import React from "react";
import { Button } from "../../components/button";
import styled from "styled-components";
import { Logo } from "../logo";
import { theme } from "../../theme";

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SmallLogoContainer = styled.div``;
const NavButtonFilledCont = styled.div``;
const NavButtonHollowCont = styled(Button)`
  background-color: transparent;
  border: none;
  //display: flex;
  //flex-direction: row;
  &:hover {
    background-color: transparent;
    transition: all 100ms ease-in-out;
    border: none;
    color: ${theme.primary_darker}; // rgb(177, 176, 176);
  }
  &:active {
    border: none;
    transition: all 100ms ease-in-out;
    color: ${theme.primary}; // rgb(177, 176, 176);
  }
`;
export function NavBar() {
  return (
    <NavBarContainer>
      <SmallLogoContainer>
        <Logo inline />
      </SmallLogoContainer>
      <NavButtonFilledCont>
        <Button size={13} hPadd={5} vPadd={8}>
          Börja här
        </Button>
        <NavButtonHollowCont size={13} hPadd={5} vPadd={8}>
          Info
        </NavButtonHollowCont>
      </NavButtonFilledCont>
    </NavBarContainer>
  );
}
