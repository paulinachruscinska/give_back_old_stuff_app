import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React from "react";

export default function GiveBackHeader(){
    return(
        <header className='homeHeader'>
            <section className='giveBackHeader__background'></section>
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
                <section className='homeHeader__main-section'>
                    <h2>Oddaj rzeczy, których już nie chcesz <br/>
                        POTRZEBUJĄCYM</h2>
                    <div className='decoration'></div>
                    <div className='giveBackHeader__steps'>
                        <div className='giveBackHeader__step'>
                            <p className='step-number'>1</p>
                            <p className='step-text'>Wybierz rzeczy</p>
                        </div>
                        <div className='giveBackHeader__step'>
                            <p className='step-number'>2</p>
                            <p className='step-text'>Spakuj je w worki</p>
                        </div>
                        <div className='giveBackHeader__step'>
                            <p className='step-number'>3</p>
                            <p className='step-text'>Wybierz fundację</p>
                        </div>
                        <div className='giveBackHeader__step'>
                            <p className='step-number'>4</p>
                            <p className='step-text'>Zamów kuriera</p>
                        </div>
                    </div>
                </section>
            </section>
        </header>
    )
}