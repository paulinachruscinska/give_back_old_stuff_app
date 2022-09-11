export default function HomeContactFooter(){
    return (
        <section className='homeContactFooter' id='homeContactFooter'>
            <section className='homeContact'>
                <div className='contact'>
                    <p className='homeContact__text'>Skontaktuj się z nami</p>
                    <div className='decoration'></div>
                    <form className='homeContact__form'>
                        <div className='homeContact__form--inputText'>
                        <label>
                            <p className='form__text'>Wpisz swoje imię</p>
                            <input type='text' placeholder='Krzysztof'/>
                        </label>
                        <label>
                            <p className='form__text'>Wpisz swój email</p>
                            <input type='email' placeholder='abc@xyz.pl'/>
                        </label>
                        </div>
                        <label>
                            <p className='form__text'>Wpisz swoją wiadomość</p>
                            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </label>
                        <input className='wyslij' type='submit' value='Wyślij'/>
                    </form>
                </div>
            </section>
            <section className='homeFooter'>
                    <span className='homeFooter__text'>Copyright by Paulina Chruścińska</span>
                    <img src={require('../assets/Instagram.svg').default} alt='logo-instagram'/>
                    <img src={require('../assets/Facebook.svg').default} alt='logo-facebook'/>
            </section>
        </section>
    )
}