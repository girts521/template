import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Burger from './Burger'
import styled from "styled-components";

const RightMenuDiv = styled.div`

margin-right: 35px;

& :nth-child(2) {
    margin-right: 32px;
  }

svg {
    font-size: 32px;
  }

  @media (min-width: 768px){
    margin-right: 60px;
  }

  @media (min-width: 1440px) {
    margin-right: 240px;
  }
`

const RightMenu = () => {
    return (
        <RightMenuDiv>
        <Burger />
        <FontAwesomeIcon icon={faCirclePlus} />
        <FontAwesomeIcon icon={faUser} />
      </RightMenuDiv>
    )
}

export default RightMenu