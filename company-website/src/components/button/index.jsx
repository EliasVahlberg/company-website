import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWraper = styled.button`
  padding: ${({ hPadd, vPadd }) =>
    hPadd && vPadd ? hPadd + "px " + vPadd + "px" : "7px 15px"};
  border-radius: 3px;
  background-color: ${theme.logo_darkest};
  color: #fff;
  font-weight: bold;
  font-size: ${({ size }) => (size ? size + "px" : "17px")};
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: transparent;
    border: 2px solid ${theme.logo_darkest};
  }
  &:active {
    border: 2px solid ${theme.primary};
    transition: all 100ms ease-in-out;
  }
`;
export function Button(props) {
  return <ButtonWraper {...props}>{props.children}</ButtonWraper>;
}
//... : es6 syntax
