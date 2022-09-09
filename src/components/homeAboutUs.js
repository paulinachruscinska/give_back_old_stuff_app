export default function HomeAboutUs(){
    return (
        <section className='homeAboutUs' id='homeAboutUs'>
            <div className='homeAboutUs__text'>
                <p className='homeAboutUs__text--primary'>O nas</p>
                <div className='decoration'></div>
                <p className='homeAboutUs__text--additional'>Nori grape silver beet broccoli kombu
                    beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea
                    prairie turnip leek lentil turnip greens parsnip.</p>
                <img className='signature' src={require('../assets/Signature.svg').default} alt='signature'/>
            </div>
            <div className='homeAboutUs__background'></div>
        </section>
    )
}