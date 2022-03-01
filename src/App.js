import logo from './logo.svg';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Home from './Components/Home';
import AllPosts from './Components/AllPosts';
import Create from './Components/Create';
import NotFound from './Components/NotFound';
import LoginRegister from './Components/LoginRegister';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Nav />
    
    <Content>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/all-posts" element={<AllPosts />} />
    <Route path="/login" element={<LoginRegister login/>} />
    <Route path="/register" element={<LoginRegister register/>} />
    <Route path="/create" element={<Create />} />
    <Route path="/*" element={<NotFound />} />
    </Routes>
   
    </Content>
    </>
  );
}

export default App;
