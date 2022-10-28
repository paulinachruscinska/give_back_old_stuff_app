import React, {useState} from "react";
const options = ['ubrania, które nadają się do ponownego użycia', 'ubrania, do wyrzucenia', 'zabawki', 'książki', 'Inne' ]
export default function GiveBackSelectBox1({ allCheckbox, addCheckBox, nextSlide, prevSlide }) {
    const [check, setCheck] = useState('')
    const checkboxClick=()=> {
        addCheckBox(check);
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
                    {options.map((option, index)=>{
                        return(
                            <div
                                className='giveBackSteps__form__item'
                                key={index}
                                onClick={()=>setCheck(option)}
                            >
                                <input className='checkbox__form' type='radio' name='radio' id={'option' + index }/>
                                <label className='adres__text' htmlFor={'option' + index }>{option}</label>
                            </div>
                            )
                    })}
                    <button onClick={prevSlide} className='wstecz'>Wstecz</button>
                    <button onClick={nextSlide} className='dalej'>Dalej</button>
                </form>
            </section>
        </section>
    )
}