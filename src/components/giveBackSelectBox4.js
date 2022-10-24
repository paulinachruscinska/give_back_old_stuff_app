import {useState} from "react";

export default function GiveBackSelectBox4({ addData,allData }){
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [textArea, setTextArea] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        console.log('działą')
        console.log(newInfo);
        if (typeof addData === 'function') {
            addData((prev)=>[...prev, {street}]);
            console.log(allData)
        } else{
            throw new Error('to nie jest funkcja')
        }
        event.preventDefault()
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
                <form className='giveBackSteps__form--adres' onSubmit={handleSubmit}>
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
            </section>
        </section>
    )
}