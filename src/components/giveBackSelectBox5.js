export default function giveBackSelectBox5({ allQuantity, allCity, allData, allCheckBox, allHelp }){
    const numbers= () =>{
      if(allQuantity[0]==='1'){
          return `${allQuantity[0]} worek`
      } else if(allQuantity[0]==='5') {
          return `${allQuantity[0]} worków`
      } else {
          return `${allQuantity[0]} worki`
      }
    }

    return(
        <section className='giveBackSelect__box'>
            <section className='giveBackSteps'>
                <p className='giveBackSteps__head'>Podsumowanie Twojej darowizny</p>
                <div className='oddajesz'>
                    <p className='giveBackSteps__form__text'>Pomagasz: {allHelp}</p>
                    <p className='giveBackSteps__form__text'>Oddajesz: {allCheckBox}</p>
                    <p className='giveBackSteps__form__text'> {numbers()} </p>
                    <p className='giveBackSteps__form__text'>dla lokalizacji: {allCity} </p>
                </div>
                <div className='adres'>
                    <div className='giveBackSteps__form__text'>Adres odbioru
                        <div className='adres__box'>
                            <p className='adres__text'>Ulica</p>
                            <p className='adres__text'>{allData[0]}</p>
                        </div>
                        <div className='adres__box'>
                            <p className='adres__text'>Miasto</p>
                            <p className='adres__text'>{allData[1]}</p>
                        </div>
                        <div className='adres__box'>
                            <p className='adres__text'>Kod pocztowy</p>
                            <p className='adres__text'>{allData[2]}</p>
                        </div>
                        <div className='adres__box'>
                            <p className='adres__text'>Numer telefonu</p>
                            <p className='adres__text'>{allData[3]}</p>
                        </div>
                    </div>
                    <div className='giveBackSteps__form__text'>Termin odbioru
                        <div className='adres__box'>
                            <p className='adres__text'>Data</p>
                            <p className='adres__text'>{allData[4]}</p>
                        </div>
                        <div className='adres__box'>
                            <p className='adres__text'>Godzina</p>
                            <p className='adres__text'>{allData[5]}</p>
                        </div>
                        <div className='adres__box'>
                            <p className='adres__text'>Uwagi dla kuriera</p>
                            <p className='adres__text'>{allData[6]}</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}