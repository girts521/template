import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
width: 19rem;
height: auto;
background-color: #DBE2EF;  
margin-bottom: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
  height:100%;
  max-width: 16rem;
  margin-top:5px;
}

h1{
  margin-bottom: 5px;
  margin-top: 10px;
}

@media (min-width: 768px){
  width: 40rem;
  /* height: 10rem; */
}

@media (min-width: 1440px){
  width: 19rem;
  height: 19rem;
}


`;

const Card = (props) => {
  return (
    <CardDiv>
     <div> <img src={props.img} /></div>
     <div> <h1>{props.heading}</h1></div>
    </CardDiv>
  );
};

export default Card;
