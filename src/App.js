import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
function App() {
  return (
      <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logowanie' element={<Login/>}/>
            <Route path='/rejestracja' element={<Register/>}/>
        </Routes>
      </HashRouter>

  );
}

export default App;
