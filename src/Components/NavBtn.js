import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBtnDiv = styled.button`
    display:none;

    @media (min-width: 768px){
        display: block;
        border: none;
        background-color: inherit;
        font-size: 20px;
        font-family: 'Open Sans';
        color: #112D4E;
        /* font-weight: 100; */

        a{
            text-decoration: none;
        }

    }
`

const NavBtn = (props) => {

    return (
        <>
        <NavBtnDiv><Link to={props.link}>{props.text}</Link></NavBtnDiv>
        </>
    )
}

export default NavBtn