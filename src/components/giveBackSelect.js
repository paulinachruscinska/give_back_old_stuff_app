export default function GiveBackSelect(){
    return(
        <section className='giveBackSelect-carousel'>
            <section className='giveBackSelect__box'>
                <section className='giveBackImportantInformation'>
                    <p className='giveBackImportantInformation__header'>Ważne!</p>
                    <p className='giveBackImportantInformation__additional'>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </section>
                <section className='giveBackSteps'>
                    <p className='giveBackSteps__step'>Krok 1/4</p>
                    <p className='giveBackSteps__head'>Zaznacz co chcesz oddać</p>
                    <form className='giveBackSteps__form'>
                        <checkbox>ubrania, które nadają się do ponownego użycia</checkbox>
                        <checkbox>ubrania, do wyrzucenia</checkbox>
                        <checkbox>zabawki</checkbox>
                        <checkbox>książki</checkbox>
                        <checkbox>Inne</checkbox>
                    </form>
                    <button className='dalej'>Dalej</button>
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
                    <form className='giveBackSteps__form'>
                        <p>Liczba 60l worków:</p>
                        <ul className='giveBackSteps__ul'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </form>
                    <button className='dalej'>Dalej</button>
                    <button className='dalej'>Wstecz</button>
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
                        <ul className='giveBackSteps__ul'>
                            <li>Poznań</li>
                            <li>Warszawa</li>
                            <li>Kraków</li>
                            <li>Wrocław</li>
                            <li>Katowice</li>
                        </ul>
                        <p className='giveBackSteps__form__text'>Komu chcesz pomóc?</p>
                        <button className='giveBackSteps__form__button'>dzieciom</button>
                        <button className='giveBackSteps__form__button'>samotnym matkom</button>
                        <button className='giveBackSteps__form__button'>bezdomnym</button>
                        <button className='giveBackSteps__form__button'>niepełnosprawnym</button>
                        <button className='giveBackSteps__form__button'>osobom starszym</button>
                        <p className='giveBackSteps__form__text'>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                        <input type='text'/>
                    </form>
                    <button className='dalej'>Dalej</button>
                    <button className='dalej'>Wstecz</button>
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
                    <form className='giveBackSteps__form'>
                        <div className='adres'>
                            <p className='giveBackSteps__form__text'>Adres odbioru:</p>
                            <label>
                                <p className='adres__text'>Ulica</p>
                                <input type='text'/>
                            </label>
                            <label>
                                <p className='adres__text'>Miasto</p>
                                <input type='text'/>
                            </label>
                            <label>
                                <p className='adres__text'>Kod pocztowy</p>
                                <input type='text'/>
                            </label>
                            <label>
                                <p className='adres__text'>Numer telefonu</p>
                                <input type='text'/>
                            </label>
                        </div>
                        <div className='adres'>
                            <p className='giveBackSteps__form__text'>Termin odbioru:</p>
                            <label>
                                <p className='adres__text'>Data</p>
                                <input type='text'/>
                            </label>
                            <label>
                                <p className='adres__text'>Godzina</p>
                                <input type='text'/>
                            </label>
                            <label>
                                <p className='adres__text'>Uwagi dla kuriera</p>
                                <textarea/>
                            </label>
                        </div>
                    </form>
                    <button className='dalej'>Dalej</button>
                    <button className='dalej'>Wstecz</button>
                </section>
            </section>
            <section className='giveBackSelect__box'>
                <section className='giveBackSteps'>
                    <p className='giveBackSteps__head'>Podsumowanie Twojej darowizny</p>
                    <div className='oddajesz'>
                        <p className='giveBackSteps__form__text'>Oddajesz:</p>
                        <div className='oddajesz__box'>
                            <span/>
                            <p className='oddajesz__box__text'>4 worki, ubrania w dobrym stanie, dzieciom</p>
                        </div>
                        <div className='oddajesz__box'>
                            <span/>
                            <p className='oddajesz__box__text'>dla lokalizacji: Warszawa</p>
                        </div>
                    </div>
                        <div className='adres'>
                            <p className='giveBackSteps__form__text'>Adres odbioru:</p>
                            <div className='adres__box'>
                                <p className='adres__text'>Ulica</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Miasto</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Kod pocztowy</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Numer telefonu</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                        </div>
                        <div className='adres'>
                            <div className='adres__box'>
                                <p className='adres__text'>Data</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Godzina</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                            <div className='adres__box'>
                                <p className='adres__text'>Uwagi dla kuriera</p>
                                <p className='adres__text'>Ulica</p>
                            </div>
                        </div>
                </section>
            </section>
        </section>
    )
}