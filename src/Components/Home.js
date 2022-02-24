import React from "react";
import Card from "./Card";
import styled from "styled-components";

const HomeDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

@media (min-width: 1440px) {
    flex-direction: row;

    & :not(:last-child){
      margin-right: 25px;
    }
}
`

const Home = () => {

    return(
        <HomeDiv>
        <Card />
        <Card />
        <Card />
        </HomeDiv>
    )
}

export default Home