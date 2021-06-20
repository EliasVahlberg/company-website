import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theme";
const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
  border-radius: 10px;
  //height: 100%;
`;
//${({ panelHeight }) =>
//panelHeight ? `${panelHeight}px` : "80%"};
const ContactInfoWrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 0px rgba(17, 15, 90, 0.2);
`;
const TextArea = styled.div`
  padding: 7px;
`;
const BiggerText = styled.h2`
  color: ${theme.kinda_dark};
  font-size: 30px;
  font-weight: bold;
`;
const SmallText = styled.p`
  color: ${theme.kinda_dark};
  font-size: 25px;
  font-weight: bold;
`;

export default function ContactInfoPanel(props) {
  const { panelHeight } = props;
  return (
    <ContactInfoWrapper>
      <ContactInfoWrapperInner height={panelHeight}>
        <TextArea>
          <BiggerText>Kontakt Information</BiggerText>
          <SmallText>
            <FontAwesomeIcon icon={faPhoneAlt} />
            &emsp;+4670 123 456 789
          </SmallText>
          <SmallText>
            <FontAwesomeIcon icon={faEnvelope} />
            &emsp;info@dioptima.se <br />
            &emsp; &ensp;support@dioptima.se
          </SmallText>
        </TextArea>
      </ContactInfoWrapperInner>
    </ContactInfoWrapper>
  );
}
