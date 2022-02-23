import React from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import styled from "styled-components";


const NavDiv = styled.div`
background-color: transparent;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
padding: 0 5px 0 5px;
margin-top: 32px;
height: 32px;

div{
    margin-left: 32px;
    margin-right: 32px;
    border: 2px solid black;
}

`

const Nav = () => {

    return (
    <NavDiv>
    <Logo />
    <Burger />
    </NavDiv>
    
    )
}

export default Nav