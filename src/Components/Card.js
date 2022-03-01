import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
width: 19rem;
height: 19rem;
background-color: #DBE2EF;  
margin-bottom: 30px;

@media (min-width: 768px){
  width: 40rem;
  height: 10rem;
}

@media (min-width: 1440px){
  width: 19rem;
  height: 19rem;
}


`;

const Card = () => {
  return (
    <CardDiv>
      <h1>This is a card</h1>
    </CardDiv>
  );
};

export default Card;
