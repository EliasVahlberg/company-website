import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
export const PNormal = styled.p`
  font-size: ${(props) => (props.font_size ? props.font_size : "17px")};
  line-height: ${(props) => (props.line_height ? props.line_height : "1.4")};
  color: ${(props) => (props.color ? props.color : theme.kinda_dark)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "normal")};
`;
export const H1Normal = styled.h1`
  text-align: center;
  font-size: ${(props) => (props.font_size ? props.font_size : "33px")};
  line-height: ${(props) => (props.line_height ? props.line_height : "1.4")};
  color: ${(props) => (props.color ? props.color : theme.kinda_dark)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "bold")};
`;
