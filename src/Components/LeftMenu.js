import React from "react";
import Logo from "./Logo";
import NavBtns from "./NavBtns";
import styled from "styled-components";

const LeftMenuDiv = styled.div`
display:flex;
margin-left: 30px;

@media (min-width: 768px) {
    margin-left: 64px;
}

@media (min-width: 1440px) {
    margin-left: 240px;
}

`

const LeftMenu = () => {

    return (
        <LeftMenuDiv>
        <Logo />
        <NavBtns />
        </LeftMenuDiv>
    )
}

export default LeftMenu