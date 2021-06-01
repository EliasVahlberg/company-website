import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
const DownArrowContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(222, 220, 220, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 150ms ease-in;
  border: 2px solid transparent;
  &:hover {
    background: transparent;
    border: 2px solid ${theme.primary_darker};
  }
`;
const DownArrowIcon = styled.div`
  color: #fff;
  font-size: 30px;
  margin-top: 3px;
`;
export function DownArrow() {
  return (
    <DownArrowContainer>
      <DownArrowIcon>
        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
      </DownArrowIcon>
    </DownArrowContainer>
  );
}
