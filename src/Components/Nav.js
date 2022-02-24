import React from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import styled from "styled-components";


const NavDiv = styled.div`
  background-color: transparent;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  height: 32px;
  width:100%;
  

  /* div {
    margin-left: 32px;
    margin-right: 25px;
    cursor: pointer;

    @media (min-width: 768px) {
      margin-left: 64px;
      margin-right: 64px;
    }
  } */


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
