import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React from "react";

export default function Register(){
    return (
        <>
            <header className='homeHeader_log'>
                <section className='homeHeader__info'>
                    <section className='homeHeader__logIn'>
                        <Link to='/logowanie' className='homeHeader__logIn--signIn'>Zaloguj</Link>
                        <Link to='/rejestracja' className='homeHeader__logIn--signUp'>Załóż konto</Link>
                    </section>
                    <nav className='homeHeader__nav'>
                        <input type='checkbox' className='hamburger'/>
                        <ul className='homeHeader__nav--ul'>
                            <li>Start</li>
                            <li><HashLink to='/#homeSimpleSteps'>O co chodzi?</HashLink></li>
                            <li><HashLink to='/#homeAboutUs'>O nas</HashLink></li>
                            <li><HashLink to='/#homeWhoWeHelp'>Fundacja i organizacja</HashLink></li>
                            <li><HashLink to='/#homeContactFooter'>Kontakt</HashLink></li>
                        </ul>
                    </nav>
                </section>
            </header>
            <section className='logIn'>
                <p className='logIn__text'>Zarejestruj się</p>
                <div className='decoration'></div>
            </section>
        </>
    )
}