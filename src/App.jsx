import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './components/Login/Login'

import './App.css'
import Header from "./components/Header/Header";

function App() {

  return (
    
   <div className="bg-primary text-white">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
      </Routes>
      </BrowserRouter>
   </div>
    
  )
}

export default App
