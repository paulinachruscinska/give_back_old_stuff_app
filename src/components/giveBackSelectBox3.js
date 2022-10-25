import {useState} from "react";

export default function GiveBackSelectBox3({allCity,addCity, addHelp, allHelp}){
    const[visibility, setVisibility] = useState('hidden');
    const [citySelect, setCitySelect] = useState('-wybierz-')
    const [click, setClick] = useState(false)
    const [addClass, setAddClass] = useState('uclicked')

    const selectClick=()=> visibility === 'hidden' ? setVisibility('active') : setVisibility('hidden');
     const selectCityClick=(event)=>{
        setCitySelect(event.target.textContent);
        addCity(event.target.textContent);
        console.log(allCity);
     }

     const selectButton = (event)=>{
         addHelp(event.target.textContent);
         if(click===true){
             setAddClass('clicked')
         } else {
             setAddClass('unclicked')
         }
         event.preventDefault()
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
                <div className='buttons' onClick={selectButton}>
                    <button onClick={()=>setClick(true)} className={'giveBackSteps__form__button adres__text ' + addClass}>dzieciom</button>
                    <button onClick={()=>setClick(true)} className={'giveBackSteps__form__button adres__text '+ addClass}>samotnym matkom</button>
                    <button className='giveBackSteps__form__button adres__text '>bezdomnym</button>
                    <button className='giveBackSteps__form__button adres__text '>niepełnosprawnym</button>
                    <button className='giveBackSteps__form__button adres__text '>osobom starszym</button>
                </div>
                <p className='giveBackSteps__form__text'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input className='organizacja__input' type='text'/>
            </form>
        </section>
    </section>
    )
}