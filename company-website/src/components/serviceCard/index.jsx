import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { Button } from "../button";
import { NavButtonHollowCont } from "../navbar";

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 30%;
  justify-content: center;
  //align-items: center;
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;
  @media screen and (max-width: 1230px) {
    width: 95%;
    justify-content: center;
  }
`;
const ServiceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  //min-width: 70%;
  //align-items: center;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1230px) {
    max-width: 100%;
  }
`;
const CardTitle = styled.h2`
  color: ${theme.kinda_dark};
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
  text-align: center;
  @media screen and (max-width: 1230px) {
    margin-top: 1.5em;
  }
`;
const CardContent = styled.div`
  color: ${theme.kinda_dark};
  font-size: 20px;
  //text-align: center;
  line-height: 23px;
  padding: 10px;
  max-width: 100%;
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;
const PriceStyle = styled.p`
  color: ${theme.kinda_dark};
  font-size: 30px;
  font-weight: 800;
  padding: 10px;
  max-width: 100%;
`;
const CardBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InlineButton = styled(Button)`
  background-color: transparent;
  border: 2px solid;
  font-size: 30px;
  font-weight: 800;
  margin: 30px;
  color: #000000;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    transition: all 200ms ease-in-out;
    border: 5px solid;
    margin: 27px;
    color: ${theme.primary_darker}; // rgb(177, 176, 176);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  }
  &:active {
    //border: none;
    transition: all 100ms ease-in-out;
    color: ${theme.logo_lighter}; // rgb(177, 176, 176);
  }
`;

function ServiceCard(props) {
  const { title, description, price, link } = props;

  return (
    <ServiceCardWrapper>
      <ServiceCardContainer>
        <CardTitle>{title}</CardTitle>
        <CardContent>{description}</CardContent>
        <CardBottomWrapper>
          <PriceStyle>Pris: &emsp; {price}</PriceStyle>
          <Link to={link}>
            <InlineButton>Sök tjänst</InlineButton>
          </Link>
        </CardBottomWrapper>
      </ServiceCardContainer>
    </ServiceCardWrapper>
  );
}

export default ServiceCard;
