import React, {useState, useRef, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Burger from "./Burger";
import styled from "styled-components";
import NavBtn from "./NavBtn";
import { Link } from "react-router-dom";

const RightMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 38px;

  #icons {
    display: none;
  }

  @media (min-width: 768px) {
    margin-right: 65px;

    #icons {
      display: flex;
      flex-direction: row;
      width: auto;
      height: 32px;
      font-size: 32px;
    }

    #user {
      margin-left: 32px;
    }
  }

  @media (min-width: 1440px) {
    margin-right: 240px;
  }
`;

const UserMenu = styled.div`
  background-color: red;
  width: 320px;
  height: 100px;
  position: absolute;
  top: 67px;
  right: 63px;
  background-color:#FFFFFF;
  border: 1px solid #DBE2EF;
  font-family: 'Open Sans';
  font-size: 20px;
  z-index: 2;

  & :first-child{
    margin-top: 16px;
    margin-bottom: 13px;
  }

  @media (min-width: 1440px){
    top: 89px;
    right: 232px;
  }

`;

const Backdrop = styled.div`
width: 100vw;
height: 100vh;
background-color: transparent;
z-index: 1;
position: absolute;
top: 0;
right: 0;
`

const RightMenu = () => {

  const [isOpen, setIsOpen] = useState(false)


  const clickHandler = () => { 
       setIsOpen(!isOpen)
  };


  

  return (
    <RightMenuDiv>
      <Burger />
      <div id="icons">
       <Link to='/create' ><FontAwesomeIcon icon={faCirclePlus} /></Link>
        <FontAwesomeIcon onClick={clickHandler} id="user" icon={faUser} />
        {isOpen && <><UserMenu onClick={clickHandler} >
          <NavBtn  link='/my-posts' text='My posts'/>
          <NavBtn  link='/register' text='Log in / Register'/>
        </UserMenu>
        <Backdrop onClick={clickHandler} /></>
        }
      </div>
    </RightMenuDiv>
  );
};

export default RightMenu;
