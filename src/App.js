import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Home from "./components/Home";
import Appbar from './components/Appbar';
const App = () => {
  return (  
    <div>
       <Appbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="Menu" element={<Menu/>}/>
      </Routes>
    </div>
  )
}

export default App
