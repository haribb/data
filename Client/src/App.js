import Navbar from "./Component/Navbar";


import React from 'react'
import { Routes ,Route} from "react-router-dom";
import Home from "./Component/Home"
import About from "./Component/About"
import Login from "./Component/Login"
import Product from "./Component/Product"
import Register from "./Component/Register";

 function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route  path="/home" element={<Home/>} />
      <Route  path="/about" element={<About/>}/>
      <Route  path="/product" element={<Product/>}/>
      <Route  path="/sign" element={<Register/>}/>
    </Routes>
  )
}



function App() {
  return (
    <>
  <Navbar/>
  <Routing/>
    </>
  );
}

export default App;
