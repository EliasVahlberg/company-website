import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TopFooterRadius = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 50% 50% 100% 0% / 100% 100% 0% 0%;
  background: #161616;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #161616;
  align-items: center;
  position: relative;
`;
const SmallFooterContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: #161616;
  align-items: center;
  position: relative;
`;
const BigFatText = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.4;
  color: white;
  margin: 0;
  max-width: 400px;
  text-align: center;
`;

const SmallBoldText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 11px;
  color: white;
  margin-right: ${(props) =>
    props.isReversed ? 0 : props.margin ? props.margin : "10px"};
  margin-left: ${(props) =>
    props.isReversed ? (props.margin ? props.margin : "10px") : 0};
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const BottomBox = styled.div`
  width: 80%;
  height: 100px;
  margin-top: auto;
  align-items: center;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
`;
const HLine = styled.hr`
  width: 100%;
  height: 1px;
  //color: #ffffff0;
  border: 1px solid #ffffff5e;
`;
const RLC = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
`;
const RightContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      font-size: 9px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
  &:hover {
    color: #adadad;
  }
`;

const LinkText = styled.p`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  margin-top: -0.5em;
  &:not(::last-of-type) {
    margin-right: 11px;
    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
  &:hover {
    color: #adadad;
  }
`;
const RightsRes = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;
export function Footer(props) {
  return (
    <div>
      <TopFooterRadius />
      <FooterContainer>
        <Marginer direction="vertical" margin="4em" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo medium />
        </Link>
        <Marginer direction="vertical" margin="2em" />
        <BigFatText>
          Vi ser till att ni kan fokusera p?? det ni ??r bra p??.
        </BigFatText>
        <Marginer direction="vertical" margin="1em" />
        <BottomBox>
          <HLine />
          <RLC>
            <LeftContainer>
              <SmallBoldText isReversed={false}>
                <Link to="/gdpr" style={{ textDecoration: "none" }}>
                  <LinkText>GDPR</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <LinkText>Kontakta oss</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <LinkText>Tj??nster</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/info" style={{ textDecoration: "none" }}>
                  <LinkText>Om oss</LinkText>
                </Link>
              </SmallBoldText>
            </LeftContainer>
            <RightContainer>
              <SocialIcon>
                <a
                  href="https://www.linkedin.com/company/dioptima"
                  aria-label="LinkedIn"
                  style={{ color: "#FFF" }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </SocialIcon>
            </RightContainer>
          </RLC>
        </BottomBox>
        <Marginer direction="vertical" margin="2em" />
        <RightsRes>
          &copy; 2021 Dioptima handelsbolag All rights reserved.
        </RightsRes>
      </FooterContainer>
    </div>
  );
}
export function SmallFooter(props) {
  return (
    <div>
      <SmallFooterContainer>
        <Marginer direction="vertical" margin="4em" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo medium />
        </Link>
        <Marginer direction="vertical" margin="1em" />
        <BottomBox>
          <HLine />
          <RLC>
            <LeftContainer>
              <SmallBoldText isReversed={false}>
                <Link to="/gdpr" style={{ textDecoration: "none" }}>
                  <LinkText>GDPR</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <LinkText>Kontakta oss</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <LinkText>Tj??nster</LinkText>
                </Link>
              </SmallBoldText>
              <SmallBoldText isReversed={false}>
                <Link to="/info" style={{ textDecoration: "none" }}>
                  <LinkText>Om oss</LinkText>
                </Link>
              </SmallBoldText>
            </LeftContainer>
            <RightContainer>
              <SocialIcon>
                <a
                  href="https://www.linkedin.com/company/dioptima"
                  aria-label="LinkedIn"
                  style={{ color: "#FFF" }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </SocialIcon>
            </RightContainer>
          </RLC>
        </BottomBox>
        <Marginer direction="vertical" margin="2em" />
        <RightsRes>
          &copy; 2021 Dioptima handelsbolag All rights reserved.
        </RightsRes>
      </SmallFooterContainer>
    </div>
  );
}
