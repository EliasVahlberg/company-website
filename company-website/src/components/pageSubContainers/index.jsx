import React from "react";
import styled from "styled-components";
const BottomCon = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const MiddlePart = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: ${(props) =>
    (props.flexRow && "row") ||
    (props.flexRowReverse && "row-reverse") ||
    (props.flexColumnReverse && "column-reverse") ||
    "column"};
  align-items: center;
`;
export function BottomContainer(props) {
  return <BottomCon></BottomCon>;
}

export function MiddleContainer(props) {
  const { flexRow, flexRowReverse, flexColumnReverse } = props;
  return (
    <MiddlePart
      flexRow={flexRow}
      flexRowReverse={flexRowReverse}
      flexColumnReverse={flexColumnReverse}
    ></MiddlePart>
  );
}
