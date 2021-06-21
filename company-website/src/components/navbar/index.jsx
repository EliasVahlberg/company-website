import React from "react";
import { Button } from "../../components/button";
import styled from "styled-components";
import { Logo } from "../logo";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AltNavBarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #242424;
`;
const SmallLogoContainer = styled.div``;
const NavButtonFilledCont = styled.div``;
const NavButtonHollowCont = styled(Button)`
  background-color: transparent;
  border: none;
  color: #fff;
  text-decoration: none;
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
//as="a" href="/info"
export function NavBar() {
  return (
    <NavBarContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <SmallLogoContainer>
          <Logo inline />
        </SmallLogoContainer>
      </Link>
      <NavButtonFilledCont>
        <Link to="/services">
          <Button size={13} hPadd={5} vPadd={8}>
            Tjänster
          </Button>
        </Link>
        <Link to="/info">
          <NavButtonHollowCont size={13} hPadd={5} vPadd={8}>
            Info
          </NavButtonHollowCont>
        </Link>
        <Link to="/contact">
          <NavButtonHollowCont size={13} hPadd={5} vPadd={8}>
            Kontakta oss
          </NavButtonHollowCont>
        </Link>
      </NavButtonFilledCont>
    </NavBarContainer>
  );
}

export function AltNavBar() {
  return (
    <AltNavBarContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <SmallLogoContainer>
          <Logo inline />
        </SmallLogoContainer>
      </Link>
      <NavButtonFilledCont>
        <Link to="/info">
          <NavButtonHollowCont size={13} hPadd={5} vPadd={8}>
            Info
          </NavButtonHollowCont>
        </Link>
        <Link to="/contact">
          <NavButtonHollowCont size={13} hPadd={5} vPadd={8}>
            Kontakta oss
          </NavButtonHollowCont>
        </Link>
      </NavButtonFilledCont>
    </AltNavBarContainer>
  );
}
