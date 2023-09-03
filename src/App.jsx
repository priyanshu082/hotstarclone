import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './components/Login/Login'
import Home from "./components/Home/Home";

import './App.css'
import Header from "./components/Header/Header";

function App() {

  return (
    
   <div className="bg-primary text-white">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/home" exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   </div>
    
  )
}

export default App
