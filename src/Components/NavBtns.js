import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBtn = styled.button`
    display: none;

    @media (min-width: 768px) {
        display: block;
        border: none;
        background-color: #F9F7F7;
        font-family: Open Sans, Light;
        font-size: 20px;
        color: #112D4E;
    }
`

const NavBtns = () => {

    return (
        <>
        <NavBtn><Link to="/">Home</Link></NavBtn>
        <NavBtn><Link to="/all-posts">All Posts</Link></NavBtn>
        </>
    )
}

export default NavBtns