import React from "react";
import styled from "styled-components";

const InfoSegmentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;
`;
const InfoImg = styled.img`
  width: 30em;
  height: 15em;
`;
const SegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`;
const SegmentTitle = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
`;
const InfoContent = styled.p`
  color: #7a7a7a;
  font-size: 20px;
  text-align: center;
  line-height: 23px;
  max-width: 60%;
`;
export function InfoSegment(props) {
  const { title, description, imgURL, isReversed } = props;
  return (
    <InfoSegmentContainer isReversed={isReversed}>
      <SegmentContainer>
        <SegmentTitle>{title}</SegmentTitle>
        <InfoContent>{description}</InfoContent>
      </SegmentContainer>
      <InfoImg src={imgURL} />
    </InfoSegmentContainer>
  );
}
