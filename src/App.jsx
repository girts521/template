import logo from './logo.svg';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content';
import Home from './Components/Pages/Home';
import AllPosts from './Components/Pages/AllPosts';
import Create from './Components/Pages/Create';
import NotFound from './Components/Pages/NotFound';
import LoginRegister from './Components/Pages/LoginRegister';
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
