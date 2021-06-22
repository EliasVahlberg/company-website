import React from "react";
import styled from "styled-components";

const InfoSegmentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;
  @media screen and (max-width: 1230px) {
    width: 100%;
    justify-content: center;
  }
`;
const InfoImg = styled.img`
  width: 30em;
  height: 15em;
  @media screen and (max-width: 1230px) {
    width: 22em;
    height: 15em;
    justify-content: center;
  }
`;
const SegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  @media screen and (max-width: 1230px) {
    max-width: 100%;
  }
`;
const SegmentTitle = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
  text-align: center;
  @media screen and (max-width: 1230px) {
    margin-top: 1.5em;
  }
`;
const InfoContent = styled.p`
  color: #6a6a6a;
  font-size: 20px;
  text-align: center;
  line-height: 23px;
  max-width: 60%;
  @media screen and (max-width: 1230px) {
    width: 100%;
  }
`;
export function InfoSegment(props) {
  const { title, description, imgURL, isReversed } = props;
  return (
    <InfoSegmentContainer isReversed={isReversed}>
      <SegmentContainer>
        <SegmentTitle>{title}</SegmentTitle>
        <InfoContent>{description}</InfoContent>
      </SegmentContainer>
      <InfoImg src={imgURL} alt="Ilustration of the prev content" />
    </InfoSegmentContainer>
  );
}
