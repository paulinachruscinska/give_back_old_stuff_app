import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import GiveBack from "./pages/giveback";
import {useState} from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";
function App() {
    const [user, setUser] = useState({})
  return (
      <HashRouter>
        <Routes>
            <Route path='/' element={<Home user={user} setUser={setUser}/>}/>
            <Route path='/logowanie' element={<LoginPage user={user} setUser={setUser}/>}/>
            <Route path='/rejestracja' element={<RegisterPage user={user} setUser={setUser}/>}/>
            <Route path='/oddaj-rzeczy' element={<GiveBack user={user} setUser={setUser}/>}/>
            <Route path='/wylogowano' element={<LogoutPage user={user} setUser={setUser}/>}/>
        </Routes>
      </HashRouter>

  );
}

export default App;
