import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`


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