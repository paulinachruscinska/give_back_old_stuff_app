import {useState} from "react";
import classNames from "classnames";
import React from "react";

export default function GiveBackSelectBox3({allCity,addCity, addHelp, prevSlide, nextSlide}){
    const[visibility, setVisibility] = useState('hidden');
    const [citySelect, setCitySelect] = useState('-wybierz-')
    const [recipient, setRecipient] = useState('')

    const recipientsList = ['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym']

    const selectClick=()=> visibility === 'hidden' ? setVisibility('active') : setVisibility('hidden');
     const selectCityClick=(event)=>{
        setCitySelect(event.target.textContent);
        addCity(event.target.textContent);
        console.log(allCity);
     }


    return(
    <section className='giveBackSelect__box'>
        <section className='giveBackImportantInformation'>
            <p className='giveBackImportantInformation__header'>Ważne!</p>
            <p className='giveBackImportantInformation__additional'>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
        </section>
        <section className='giveBackSteps'>
            <p className='giveBackSteps__step'>Krok 3/4</p>
            <p className='giveBackSteps__head'>Lokalizacja:</p>
            <form className='giveBackSteps__form'>
                <div className='select--city'>
                    <span onClick={selectClick} className='adres__text--select'>{citySelect}</span>
                    <ul onClick = {selectCityClick} className={'giveBackSteps__ul ' + visibility}>
                        <li className='adres__text'>Poznań</li>
                        <li className='adres__text'>Warszawa</li>
                        <li className='adres__text'>Kraków</li>
                        <li className='adres__text'>Wrocław</li>
                        <li className='adres__text'>Katowice</li>
                    </ul>
                </div>
                <p className='giveBackSteps__form__text'>Komu chcesz pomóc?</p>
                <div className='buttons'>
                    {recipientsList.map(((recipientName, index) => (
                        <button key={index}
                            onClick={(event) => {
                                event.preventDefault()
                                setRecipient(recipientName)
                                addHelp(recipientName)
                            }}
                            className={classNames('giveBackSteps__form__button adres__text', {
                                clicked: recipient === recipientName,
                            })}
                        >
                            {recipientName}
                        </button>
                    )))}
                </div>
                <button onClick={prevSlide} className='wstecz'>Wstecz</button>
                <button onClick={nextSlide} className='dalej'>Dalej</button>
            </form>
        </section>
    </section>
    )
}