import {useState} from "react";
import React from "react";

export default function GiveBackSelectBox2({allQuantity, addQuantity ,nextSlide, prevSlide}){
    const [liSelect, setLiSelect] = useState('-wybierz-');
    const[visibility, setVisibility] = useState('hidden');
    const selectClick=()=> visibility === 'hidden' ? setVisibility('active') : setVisibility('hidden');

    const selectUlClick = (event)=>{
        setLiSelect(event.target.textContent);
        addQuantity([event.target.textContent])
        console.log(allQuantity);
    }
    return(
        <section className='giveBackSelect__box'>
            <section className='giveBackImportantInformation'>
                <p className='giveBackImportantInformation__header'>Ważne!</p>
                <p className='giveBackImportantInformation__additional'>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </section>
            <section className='giveBackSteps'>
                <p className='giveBackSteps__step'>Krok 2/4</p>
                <p className='giveBackSteps__head'>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                <form className='giveBackSteps__form2'>
                    <span className='adres__text'>Liczba 60l worków:</span>
                    <div className='select'>
                        <span onClick={selectClick} className='adres__text--select'>{liSelect}</span>
                        <ul onClick={selectUlClick} className={'giveBackSteps__ul ' + visibility}>
                            <li className='adres__text'>1</li>
                            <li className='adres__text'>2</li>
                            <li className='adres__text'>3</li>
                            <li className='adres__text'>4</li>
                            <li className='adres__text'>5</li>
                        </ul>
                    </div>
                    <button onClick={prevSlide} className='wstecz'>Wstecz</button>
                    <button onClick={nextSlide} className='dalej'>Dalej</button>
                </form>
            </section>
        </section>
    )
}