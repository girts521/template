import React from "react";
import styled from "styled-components";

const LogoDiv = styled.div`
background-color:  #DBE2EF;
width: 32px;
height: 32px;
@media (min-width: 768px){
margin-right: 30px;
}

`

const Logo = () => {

    return (

        <LogoDiv />
        
    )
}

export default Logo