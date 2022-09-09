export default function HomeContactFooter(){
    return (
        <section className='homeContactFooter'>
            <div className='Contact'>
                <p className='homeContactFooter__text'>Skontaktuj się z nami</p>
                <div className='decoration'></div>
                <form className='homeContactFooter__form'>
                    <label>
                        <p className='form__text'>Wpisz swoje imię</p>
                        <input type='text'/>
                    </label>
                    <label>
                        <p className='form__text'>Wpisz swój email</p>
                        <input type='email'/>
                    </label>
                    <label>
                        <p className='form__text'>Wpisz swoją wiadomość</p>
                        <textarea/>
                    </label>
                    <input type='submit'/>
                </form>
            </div>
            <div className='footer'>
                <span className='footer__text'>Copyright by Paulina Chruścińska</span>
                <img src={require('../assets/Instagram.svg').default} alt='logo-instagram'/>
                <img src={require('../assets/Facebook.svg').default} alt='logo-facebook'/>
            </div>
        </section>
    )
}