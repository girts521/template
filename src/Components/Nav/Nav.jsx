import React from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import styled from "styled-components";


const NavDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between; 
margin-top: 30px;
/* position: fixed; */
width: 100%;
`;

const Nav = () => {
  return (
    <NavDiv>
        <LeftMenu />
        <RightMenu />

    </NavDiv>
  );
};

export default Nav;
