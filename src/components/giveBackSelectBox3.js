import {useState} from "react";

export default function GiveBackSelectBox3({allCity,addCity}){
    const[visibility, setVisibility] = useState('hidden');
    const [citySelect, setCitySelect] = useState('-wybierz-')
    const [click1, setClick1] = useState("unclicked");
    const [click2, setClick2] = useState("unclicked");
    const [click3, setClick3] = useState("unclicked");
    const [click4, setClick4] = useState("unclicked");
    const [click5, setClick5] = useState("unclicked");
    const selectClick=()=> visibility === 'hidden' ? setVisibility('active') : setVisibility('hidden');
     const selectCityClick=(event)=>{
        setCitySelect(event.target.textContent)
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
                <div className='buttons' >
                    <button onClick={()=>click1==='unclicked'?setClick1('clicked'):setClick1('unclicked')} className={'giveBackSteps__form__button adres__text ' + click1}>dzieciom</button>
                    <button onClick={()=>click1==='unclicked'?setClick2('clicked'):setClick2('unclicked')} className={'giveBackSteps__form__button adres__text ' + click2}>samotnym matkom</button>
                    <button onClick={()=>click3==='unclicked'?setClick3('clicked'):setClick3('unclicked')} className={'giveBackSteps__form__button adres__text ' + click3}>bezdomnym</button>
                    <button onClick={()=>click4==='unclicked'?setClick4('clicked'):setClick4('unclicked')} className={'giveBackSteps__form__button adres__text ' + click4}>niepełnosprawnym</button>
                    <button onClick={()=>click5==='unclicked'?setClick5('clicked'):setClick5('unclicked')} className={'giveBackSteps__form__button adres__text ' + click5}>osobom starszym</button>
                </div>
                <p className='giveBackSteps__form__text'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input className='organizacja__input' type='text'/>
            </form>
        </section>
    </section>
    )
}