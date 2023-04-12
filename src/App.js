import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Footer from "./footer/Footer";

function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 3000,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
