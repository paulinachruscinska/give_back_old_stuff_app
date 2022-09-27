import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import GiveBack from "./components/giveback";
import LogOut from "./components/logut";
function App() {
  return (
      <HashRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logowanie' element={<Login/>}/>
            <Route path='/rejestracja' element={<Register/>}/>
            <Route path='/oddaj-rzeczy' element={<GiveBack/>}/>
            <Route path='/wylogowano' element={<LogOut/>}/>
        </Routes>
      </HashRouter>

  );
}

export default App;
