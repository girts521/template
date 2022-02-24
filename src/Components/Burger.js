import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars }  from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const LogoDiv = styled.div`
font-size: 16px;
height: 16px;
padding: 7px;

@media (min-width: 768px){
    display: none;
}
`

const Burger = () => {


    return (
        <LogoDiv>
     <FontAwesomeIcon icon={faBars} />
        </LogoDiv>
    )
}

export default Burger