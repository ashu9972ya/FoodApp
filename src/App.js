import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Home from "./components/Home";
import Appbar from './components/Appbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (  
    <div>
       <Appbar/>
     <Routes>
    
      <Route path="/" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
     <Route path="/Menu" element={<Menu/>}/>
     <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
