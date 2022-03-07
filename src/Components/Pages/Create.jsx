import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`

const Inner = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 80vw;
max-width: 480px;

h1{
    font-size: 20px;
    font-family: 'Open Sans';
    color: #112D4E;
    margin-bottom: 15px;
}

input, textarea {
    width: 100%;
    font-family: 'Open Sans';
    font-size: 14px;
    color: #3F72AF;
    border: 1px solid #DBE2EF;
}

input{
    margin-bottom: 15px;
    height: 30px;
}

textarea{
    resize: none;
}

button {
    background-color: #112D4E;
    border: 1px solid #DBE2EF;
    color: #F9F7F7;
    font-family: 'Open Sans';
    font-size: 14px;
    width: 100%;
    max-width: 304px;
    height: 32px;
    margin-top: 16px;
}
`

const Create = () => {

    return (
        <Container>
        <Inner>
        <h1>New post</h1>
        <input placeholder="Title" type="text" />
        <textarea placeholder="Text" name="text" id="text" cols="20" rows="10"></textarea>
        <button>Create</button>
        </Inner>

        </Container>
    )
}

export default Create