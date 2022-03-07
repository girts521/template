import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 90vh;
width: 80vw;
max-width: 305px;
margin:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
    font-family: 'Open Sans';
    font-size: 20px;
    margin-bottom: 15px;
}

input {
    width: 100%;
    height: 30px;
    margin-bottom: 15px;
    border: 1px solid #DBE2EF;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #3F72AF;
}

button {
    width: 100%;
    height: 30px;
    background-color: #112D4E;
    color: #F9F7F7;
    font-family: 'Open Sans';
    font-size: 14px;
}
`

const LoginRegister = (props) => {
    console.log(props)
    return (
        <Container>
       <h1> {props.login ? 'Log in' : 'Register'}</h1>
       <input type="username" placeholder="Username" />
       <input type="password" placeholder="Password" />
       <button>{props.login ? 'Log in' : 'Register'}</button>
        </Container>
    )
}

export default LoginRegister