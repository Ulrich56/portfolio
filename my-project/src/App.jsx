import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Formations from "./components/Formations";
import Contact from "./components/Contact";

function App() {
  return (
    
    <BrowserRouter>
    <div className="bg-gray-950 text-white">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Formations></Formations>
      <Contact></Contact>
    </div>
      
      
      
    </BrowserRouter>
  );
}

export default App;
