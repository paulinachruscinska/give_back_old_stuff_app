import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function HomeHeader({user}){
    const goToLink =()=>{
        if(user===null){
            return (
                <>
                    <Link to='/logowanie' className='button'><span>ODDAJ RZECZY</span></Link>
                    <Link to='/logowanie' className='button'><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to='/oddaj-rzeczy' className='button'><span>ODDAJ RZECZY</span></Link>
                    <Link to='/oddaj-rzeczy' className='button'><span>ZORGANIZUJ ZBIÓRKĘ</span></Link>
                </>
            )
        }
    }
    return (
        <header className='homeHeader' id='homeHeader'>
            <section className='homeHeader__background'></section>
            <section className='homeHeader__info'>
                <nav className='homeHeader__nav'>
                    <input type='checkbox' className='hamburger'/>
                    <ul className='homeHeader__nav--ul'>
                        <li><HashLink to='/#homeHeader'>Start</HashLink></li>
                        <li><HashLink to='/#homeSimpleSteps'>O co chodzi?</HashLink></li>
                        <li><HashLink to='/#homeAboutUs'>O nas</HashLink></li>
                        <li><HashLink to='/#homeWhoWeHelp'>Fundacja i organizacja</HashLink></li>
                        <li><HashLink to='/#homeContactFooter'>Kontakt</HashLink></li>
                    </ul>
                </nav>
                <section className='homeHeader__main-section'>
                    <h2>Zacznij pomagać! <br/>
                    Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className='decoration'></div>
                    <div className='homeHeader__main-section--buttons'>
                        {goToLink()}
                    </div>
                </section>
            </section>
        </header>
    )
}