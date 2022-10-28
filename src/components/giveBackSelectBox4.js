import {useForm} from "react-hook-form";
import React from "react";

export default function GiveBackSelectBox4({ addData, allData, prevSlide, nextSlide }){
    const {register, handleSubmit } = useForm({
            defaultValues:{
                street:'',
                city:'',
                postcode:'',
                phoneNumber:'',
                date:'',
                hour:'',
                textArea:'',
            }
        }
    );

    const onSubmit = (event, newInfo) => {
        event.preventDefault()
        console.log('działa')
        console.log(newInfo);
        if (typeof addData === 'function') {
            addData(prev => [...prev, newInfo]);
            console.log(allData)
        } else{
            throw new Error('to nie jest funkcja')
        }
        allData.push(newInfo);
    }

    return(
        <section className={'giveBackSelect__box'}>
            <section className='giveBackImportantInformation'>
                <p className='giveBackImportantInformation__header'>Ważne!</p>
                <p className='giveBackImportantInformation__additional'>Podaj adres oraz termin odbioru rzeczy.</p>
            </section>
            <section className='giveBackSteps'>
                <p className='giveBackSteps__step'>Krok 4/4</p>
                <p className='giveBackSteps__head'>Podaj adres oraz termin odbioru rzecz przez kuriera</p>
                <form className='giveBackSteps__form--adres' onSubmit={handleSubmit(onSubmit)}>
                    <div className='adres'>
                        <div className='giveBackSteps__form__text'>Adres odbioru:
                            <label>
                                <p className='adres__text'>Ulica</p>
                                <input className='adres__input'  {...register('street')} />
                            </label>
                            <label>
                                <p className='adres__text'>Miasto</p>
                                <input className='adres__input' {...register('city')} />
                            </label>
                            <label>
                                <p className='adres__text'>Kod pocztowy</p>
                                <input className='adres__input' {...register('postcode')} />
                            </label>
                            <label>
                                <p className='adres__text'>Numer telefonu</p>
                                <input className='adres__input' {...register('city')} />
                            </label>
                        </div>
                    </div>
                    <div className='giveBackSteps__form__text'>Termin odbioru:
                        <label>
                            <p className='adres__text'>Data</p>
                            <input className='adres__input' {...register('date')} />
                        </label>
                        <label>
                            <p className='adres__text'>Godzina</p>
                            <input className='adres__input' {...register('hour')} />
                        </label>
                        <label>
                            <p className='adres__text'>Uwagi dla kuriera</p>
                            <textarea name='textarea' {...register('textArea')} />
                        </label>
                    </div>
                    <button onClick={prevSlide} className='wstecz'>Wstecz</button>
                    <button type='submit' onClick={nextSlide} className='dalej'>Dalej</button>
                </form>
            </section>
        </section>
    )
}