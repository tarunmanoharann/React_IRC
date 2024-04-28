import React from "react";
import { Routes,Route } from "react-router-dom";

import User from './pages/User'
import Adduser from './pages/Adduser'
import Edituser from './pages/Edituser'


function App() {
  return (

    <>
    <Routes>
       <Route path='/' element={<User/>}/>
       <Route path='/' element={<Adduser/>}/>
       <Route path='/' element={<Edituser/>}/>
    </Routes>
    </>
    
  );
}

export default App;
