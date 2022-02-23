import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
background-color: grey;
height: 100px;
width: 40%;
`

const Card = () => {

    return (
        <CardDiv>
            <h1>This is a card</h1>
        </CardDiv>
    )
}

export default Card