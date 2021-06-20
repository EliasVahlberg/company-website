import React from "react";
import styled from "styled-components";
export const BottomContainer = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const MiddleContainer = styled.div`
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
