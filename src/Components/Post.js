import React from "react";
import styled from "styled-components";

const CardPost = styled.div`
  height: 22.5rem;
  width: 19rem;
  max-width: 960px;
  margin-bottom: 30px;
  border: 2px solid black;

  @media(min-width: 768px){
      display: flex;
      flex-direction: row;
      width: auto;

      height: 15rem;
      margin-left: 65px;
      margin-right: 65px;

  }
`;

const Img = styled.div`
  height: 9.5rem;
  background-color: #dbe2ef;

  @media(min-width: 768px){
    width: 50%;
    height: 100%;
  }
`;

const Text = styled.div`
  margin-top: 15px;

  h3{
      margin-bottom: 5px;
      font-size: 16px;
  }

  @media(min-width: 768px){
      margin-top: 30px;
  } 
`;
const Signiture = styled.div`
  border-top: 2px solid #dbe2ef;
  margin-top: 30px;
  padding-top: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Container = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  font-family: Open Sans;
  font-size: 12px;
  color: #112D4E;

  @media(min-width: 768px){
      width: 50%;
  }
`;
const Logo = styled.div`
  background-color: #dbe2ef;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
display: flex;
flex-direction: column;
margin-left: 5px;
`

const Post = (props) => {
    
  return (
    <>
      <CardPost>
        <Img />
        <Container>
          <Text>
            <h3>{props.heading}</h3>
            {props.text}
          </Text>
          <Signiture>
            <Logo>{props.initials}</Logo>
            <Name>
          <div>{props.author}</div>
           <div>{props.date}</div>
            </Name>
            
          </Signiture>
        </Container>
      </CardPost>
    </>
  );
};

export default Post;
