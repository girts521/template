import React from "react";
import Card from "./Card";
import styled from "styled-components";

const HomeDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 64px;  

@media (min-width: 768px){
    padding-top: 176px;
    padding-bottom: 240px;
}

@media (min-width: 1440px) {
    flex-direction: row;
    padding-top: 232px;
    padding-bottom: 328px;
    

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