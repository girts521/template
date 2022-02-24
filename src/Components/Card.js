import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #dbe2ef;
  height: 19rem;
  width: 19rem;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 10rem;
    width: 40rem;
  }

  @media (min-width: 1440px) {
    height: 19rem;
    width: 19rem;
    margin-bottom: 0;


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
