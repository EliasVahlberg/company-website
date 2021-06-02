import React from "react";
import styled from "styled-components";
import { Logo } from "../logo";
import { Marginer } from "../marginer";
const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #161616;
  align-items: center;
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
let SmallBoldText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 11px;
  color: white;
  margin-right: ${(props) =>
    props.isReversed ? 0 : props.margin ? props.margin : "5px"};
  margin-left: ${(props) =>
    props.isReversed ? (props.margin ? props.margin : "5px") : 0};
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
export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="4em" />
      <Logo medium />
      <Marginer direction="vertical" margin="2em" />
      <BigFatText>
        Vi ser till att ni kan fokusera på det ni är bra på.
      </BigFatText>
      <Marginer direction="vertical" margin="1em" />
      <BottomBox>
        <HLine />
        <RLC>
          <LeftContainer>
            <SmallBoldText isReversed={false}>Privacy Policy</SmallBoldText>
          </LeftContainer>
          <RightContainer>
            <SmallBoldText isReversed={true}>Privacy Policy</SmallBoldText>
          </RightContainer>
        </RLC>
      </BottomBox>
    </FooterContainer>
  );
}
