import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function HomeHeader(){
    return (
        <header className='homeHeader'>
            <section className='homeHeader__background'></section>
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
                        <li>O nas</li>
                        <li>Fundacja i organizacja</li>
                        <li>Kontakt</li>
                    </ul>
                </nav>
                <section className='homeHeader__main-section'>
                    <h2>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className='decoration'></div>
                    <div className='homeHeader__main-section--buttons'>
                        <Link to='/logowanie' className='button'><span>ODDAJ RZECZY</span></Link>
                        <Link to='/logowanie' className='button'><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                    </div>
                </section>
            </section>
        </header>
    )
}