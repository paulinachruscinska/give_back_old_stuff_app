import {useState} from "react";

export default function GiveBackSelect(){
    const[visibility, setVisibility] = useState('hidden');
    const [liSelect, setLiSelect] = useState('-wybierz-');
    const [citySelect, setCitySelect] = useState('-wybierz-')
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [textArea, setTextArea] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [click, setClick] = useState("unclicked")
    const checkboxClick=(event)=>setCheckbox(event.target.value);

    const selectClick=()=> visibility === 'hidden' ? setVisibility('active') : setVisibility('hidden');
    const selectUlClick=(event)=>setLiSelect(event.target.textContent);
    const selectCityClick=(event)=>setCitySelect(event.target.textContent);
    const buttonClick=(event)=>{
        event.preventDefault()
        if(click === 'unclicked'){
        setClick('clicked')
        }else{
            setClick('unclicked')
        }
    }

    return(
        <section className='giveBackSelect-carousel'>
            <section className='giveBackSelect__box'>
                <section className='giveBackImportantInformation'>
                    <p className='giveBackImportantInformation__header'>Ważne!</p>
                    <p className='giveBackImportantInformation__additional'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </section>
                <section className='giveBackSteps'>
                    <p className='giveBackSteps__step'>Krok 1/4</p>
                    <p className='giveBackSteps__head'>Zaznacz co chcesz oddać:</p>
                    <form onClick={checkboxClick} className='giveBackSteps__form'>
                        <div className='giveBackSteps__form__item'>
                            <input className='checkbox__form' type='checkbox' id='checkbox1' value='ubrania, które nadają się do ponownego użycia'/>
                            <label className='adres__text' htmlFor='checkbox1'>ubrania, które nadają się do ponownego użycia</label>
                        </div>
                        <div className='giveBackSteps__form__item'>
                            <input className='checkbox__form' type='checkbox' id='checkbox2' value='ubrania, do wyrzucenia'/>
                            <label className='adres__text' htmlFor='checkbox2'>ubrania, do wyrzucenia</label>
                        </div>
                        <div className='giveBackSteps__form__item'>
                            <input className='checkbox__form' type='checkbox' id='checkbox3' value='zabawki'/>
                            <label className='adres__text' htmlFor='checkbox3'>zabawki </label>
                        </div>
                        <div className='giveBackSteps__form__item'>
                            <input className='checkbox__form' type='checkbox' id='checkbox4' value='książki'/>
                            <label className='adres__text' htmlFor='checkbox4'>książki</label>
                        </div>
                        <div className='giveBackSteps__form__item'>
                            <input className='checkbox__form' type='checkbox' id='checkbox5' value='Inne'/>
                            <label className='adres__text' htmlFor='checkbox5'>Inne</label>
                        </div>
                    </form>
                    <button className='wstecz'>Dalej</button>
                </section>
            </section>
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
                    </form>
                    <button className='wstecz'>Wstecz</button>
                    <button className='dalej'>Dalej</button>
                </section>
            </section>
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
                        <div className='buttons' >
                            <button onClick={buttonClick} className={'giveBackSteps__form__button adres__text ' + click}>dzieciom</button>
                            <button onClick={buttonClick} className={'giveBackSteps__form__button adres__text ' + click}>samotnym matkom</button>
                            <button className='giveBackSteps__form__button adres__text'>bezdomnym</button>
                            <button className='giveBackSteps__form__button adres__text'>niepełnosprawnym</button>
                            <button className='giveBackSteps__form__button adres__text'>osobom starszym</button>
                        </div>
                        <p className='giveBackSteps__form__text'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input className='organizacja__input' type='text'/>
                    </form>
                    <button className='wstecz'>Wstecz</button>
                    <button className='dalej'>Dalej</button>
                </section>
            </section>
            <section className='giveBackSelect__box'>
                <section className='giveBackImportantInformation'>
                    <p className='giveBackImportantInformation__header'>Ważne!</p>
                    <p className='giveBackImportantInformation__additional'>Podaj adres oraz termin odbioru rzeczy.</p>
                </section>
                <section className='giveBackSteps'>
                    <p className='giveBackSteps__step'>Krok 4/4</p>
                    <p className='giveBackSteps__head'>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                    <form className='giveBackSteps__form--adres'>
                        <div className='adres'>
                            <div className='giveBackSteps__form__text'>Adres odbioru:
                                <label>
                                    <p className='adres__text'>Ulica</p>
                                    <input className='adres__input'  value={street} onChange={(e=>setStreet(e.target.value))} type='text'/>
                                </label>
                                <label>
                                    <p className='adres__text'>Miasto</p>
                                    <input className='adres__input' type='text'  value={city} onChange={(e=>setCity(e.target.value))} />
                                </label>
                                <label>
                                    <p className='adres__text'>Kod pocztowy</p>
                                    <input className='adres__input' type='text' value={postcode} onChange={(e=>setPostcode(e.target.value))} />
                                </label>
                                <label>
                                    <p className='adres__text'>Numer telefonu</p>
                                    <input className='adres__input' type='number' value={phoneNumber} onChange={(e=>setPhoneNumber(e.target.value))} />
                                </label>
                            </div>
                        </div>
                            <div className='giveBackSteps__form__text'>Termin odbioru:
                                <label>
                                    <p className='adres__text'>Data</p>
                                    <input className='adres__input' type='date' value={date} onChange={(e=>setDate(e.target.value))} />
                                </label>
                                <label>
                                    <p className='adres__text'>Godzina</p>
                                    <input className='adres__input' type='text' value={hour} onChange={(e=>setHour(e.target.value))} />
                                </label>
                                <label>
                                    <p className='adres__text'>Uwagi dla kuriera</p>
                                    <textarea name='textarea' value={textArea} onChange={(e=>setTextArea(e.target.value))} />
                                </label>
                        </div>
                    </form>
                    <button className='wstecz'>Wstecz</button>
                    <button className='dalej'>Dalej</button>
                </section>
            </section>
            <section className='giveBackSelect__box'>
                <section className='giveBackSteps'>
                    <p className='giveBackSteps__head'>Podsumowanie Twojej darowizny</p>
                    <div className='oddajesz'>
                        <p className='giveBackSteps__form__text'>Oddajesz:</p>
                        <div className='oddajesz__box'>
                            <span/>
                            <p className='giveBackSteps__form__text'>{liSelect} worki, {checkbox} , dzieciom</p>
                        </div>
                        <div className='oddajesz__box'>
                            <span/>
                            <p className='giveBackSteps__form__text'>dla lokalizacji: {citySelect}</p>
                        </div>
                    </div>
                        <div className='adres'>
                            <div className='giveBackSteps__form__text'>Adres odbioru
                            <div className='adres__box'>
                                <p className='adres__text'>Ulica</p>
                                <p className='adres__text'>{street}</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Miasto</p>
                                <p className='adres__text'>{city}</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Kod pocztowy</p>
                                <p className='adres__text'>{postcode}</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Numer telefonu</p>
                                <p className='adres__text'>{phoneNumber}</p>
                            </div>
                        </div>
                        <div className='giveBackSteps__form__text'>Termin odbioru
                            <div className='adres__box'>
                                <p className='adres__text'>Data</p>
                                <p className='adres__text'>{date}</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Godzina</p>
                                <p className='adres__text'>{hour}</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Uwagi dla kuriera</p>
                                <p className='adres__text'>{textArea}</p>
                            </div>
                        </div>
                        </div>
                </section>
            </section>
        </section>
    )
}