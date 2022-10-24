import React, {useState} from "react";

export default function GiveBackSelectBox1({ allCheckbox, addCheckBox }) {

    const checkboxClick=(event)=> {
        addCheckBox(event.target.value);
        console.log(allCheckbox);
    }
    return(
        <section className='giveBackSelect__box'>
            <section className='giveBackImportantInformation'>
                <p className='giveBackImportantInformation__header'>Ważne!</p>
                <p className='giveBackImportantInformation__additional'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki
                    temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </section>
            <section className='giveBackSteps'>
                <p className='giveBackSteps__step'>Krok 1/4</p>
                <p className='giveBackSteps__head'>Zaznacz co chcesz oddać:</p>
                <form
                    onClick={checkboxClick}
                    className='giveBackSteps__form'>
                    <div className='giveBackSteps__form__item'>
                        <input className='checkbox__form' type='radio' id='checkbox1' value='ubrania, które nadają się do ponownego
                            użycia'
                               />
                        <label className='adres__text' htmlFor='checkbox1'>ubrania, które nadają się do ponownego
                            użycia</label>
                    </div>
                    <div className='giveBackSteps__form__item'>
                        <input className='checkbox__form' type='radio' id='checkbox2' value='ubrania, do wyrzucenia'/>
                        <label className='adres__text' htmlFor='checkbox2'>ubrania, do wyrzucenia</label>
                    </div>
                    <div className='giveBackSteps__form__item'>
                        <input className='checkbox__form' type='radio' id='checkbox3' value='zabawki'/>
                        <label className='adres__text' htmlFor='checkbox3'>zabawki</label>
                    </div>
                    <div className='giveBackSteps__form__item'>
                        <input className='checkbox__form' type='radio' id='checkbox4' value='książki'/>
                        <label className='adres__text' htmlFor='checkbox4'>książki</label>
                    </div>
                    <div className='giveBackSteps__form__item'>
                        <input className='checkbox__form' type='radio' id='checkbox5' value='Inne'/>
                        <label className='adres__text' htmlFor='checkbox5'>Inne</label>
                    </div>
                </form>
            </section>
        </section>
    )
}