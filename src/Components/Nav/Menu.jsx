import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f9f7f7;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NavBtn = styled.div`
  display: block;
  border: none;
  background-color: inherit;
  font-size: 20px;
  font-family: "Open Sans";
  color: #112d4e;
  margin-bottom: 15px;

  a {
    text-decoration: none;
  }
`;

const BtnsContainer = styled.div`
    width: 50%;
    height: 100%;


    display: flex;
    flex-direction: column;
    justify-content: space-between;

    #top{
        margin-top: 90px;
    }

    #bottom{
        margin-bottom: 30px;
    }

`

const Menu = (props) => {

    const clickHandler = () => {
      props.set(false)
    }

  return (
    <Container>
      <BtnsContainer>
          <div id="top">
          <NavBtn onClick={clickHandler}><Link to="/">Home</Link></NavBtn>
          <NavBtn onClick={clickHandler}><Link to="/all-posts">All posts</Link></NavBtn>
          <NavBtn onClick={clickHandler}><Link to="/my-posts">My posts</Link></NavBtn>
          </div>

          <div id="bottom">
          <NavBtn onClick={clickHandler}><Link to="/create">Create a post</Link></NavBtn>
          <NavBtn onClick={clickHandler}><Link to="/register">Login in / Register</Link></NavBtn>
          <NavBtn onClick={clickHandler}><Link to="/my-posts">My posts</Link></NavBtn>
          </div>
      </BtnsContainer>
    </Container>
  );
};

export default Menu;
