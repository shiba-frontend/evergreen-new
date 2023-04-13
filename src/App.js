import React,{useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Footer from "./footer/Footer";
import { ProgressBar } from  'react-loader-spinner'

function App() {

  const [Loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
    },2000)

    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
     
    });
    AOS.refresh();



  }, []);

  return (
    <div className="App">
      {Loading ?
      <div className="windowLoader">
        <div className="loader-box">
  
<img src="assets/image/_static_images_banner-img.png"
                className="main-img"
              />
        </div>
      
    </div>
    :
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
      </>
}
    </div>
  );
}

export default App;
