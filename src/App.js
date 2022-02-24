import logo from './logo.svg';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Home from './Components/Home';
import AllPosts from './Components/AllPosts';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
    
    <Content>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/all-posts" element={<AllPosts />} />
    </Routes>
   
    </Content>
    </>
  );
}

export default App;
