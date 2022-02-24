import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
/* padding-top: 60px;
padding-bottom: 35px; */

@media (min-width: 768px) {
    /* padding-top: 175px;
    padding-bottom: 210px; */
}



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