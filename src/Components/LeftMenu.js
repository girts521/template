import React from "react";
import Logo from "./Logo";
import NavBtn from "./NavBtn";
import styled from "styled-components";

const LeftMenuDiv = styled.div`
display: flex;
flex-direction: row;
margin-left: 45px;


@media (min-width: 768px){
    margin-left: 65px;
}

@media (min-width: 1440px){
    margin-left: 240px;
}

`

const LeftMenu = () => {

    return (
        <LeftMenuDiv>
        <Logo />
        <NavBtn link='/' text="Home" />
        <NavBtn link='/all-posts' text="All Posts" />
        </LeftMenuDiv>
    )
}

export default LeftMenu