import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
background-color: red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`

const Content = (props) => {

    const {children} = props;

    return (
        <ContentDiv>
        {children}
        </ContentDiv>
    )
}

export default Content