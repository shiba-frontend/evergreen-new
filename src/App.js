import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
   
    </div>
  );
}

export default App;
