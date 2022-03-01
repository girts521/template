import React, {useState} from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LogoDiv = styled.div`
  font-size: 16px;
  height: 16px;
  padding: 7px;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;



const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)


    const menuHandler = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

  return (
      <>
    <LogoDiv onClick={menuHandler}>
      <FontAwesomeIcon icon={faBars} />
    </LogoDiv>
    {isOpen && <Menu isOpen set={setIsOpen} /> }
    </>
  );
};

export default Burger;
