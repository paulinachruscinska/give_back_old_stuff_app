import HomeLogIn from "./homeLogIn";
import {HashLink} from "react-router-hash-link";
import React from "react";
import {Link} from "react-router-dom";

export default function LogOut(){
return(
    <>

        <header className='homeHeader_log'>
            <section className='homeHeader__info'>
                <HomeLogIn/>
                <nav className='homeHeader__nav'>
                    <input type='checkbox' className='hamburger'/>
                    <ul className='homeHeader__nav--ul'>
                        <li><HashLink to='/'>Start</HashLink></li>
                        <li><HashLink to='/#homeSimpleSteps'>O co chodzi?</HashLink></li>
                        <li><HashLink to='/#homeAboutUs'>O nas</HashLink></li>
                        <li><HashLink to='/#homeWhoWeHelp'>Fundacja i organizacja</HashLink></li>
                        <li><HashLink to='/#homeContactFooter'>Kontakt</HashLink></li>
                    </ul>
                </nav>
            </section>
        </header>
        <section className='logOut'>
            <p className='logOut__text'>Wylogowanie nastąpiło <br/> pomyślnie</p>
            <div className='decoration'></div>
            <Link to='/'>Strona główna</Link>
        </section>
    </>
)
}