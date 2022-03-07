import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
height: 90vh;
font-family: 'Open Sans';

h1{
    font-size: 96px;
}

h2{
    font-size:32px;
}
`

const NotFound = () => {

    return (
        <Container>
        <h1>404</h1>
        <h2>Page not found</h2>
        </Container>
    )
}

export default NotFound