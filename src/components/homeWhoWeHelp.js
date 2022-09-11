const carousel = [
    {
        id:1,
        fundacje: 'Fundacjom',
        organizacje: "Organizacjom pozarządowym",
        lokal: "Lokalnym zbiórkom",
        describe: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
        examples: [
            {
                text1: 'Fundacja “Dbam o Zdrowie”',
                text2: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
                text3: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                text1: 'Fundacja “Dla dzieci”',
                text2: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                text3: 'ubrania, meble, zabawki'
            },
            {
                text1: 'Fundacja “Bez domu”',
                text2: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                text3: 'ubrania, jedzenie, ciepłe koce'
            }
        ],
    },
    {
        id:2,
        fundacje: 'Fundacjom',
        organizacje: "Organizacjom pozarządowym",
        lokal: "Lokalnym zbiórkom",
        describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        examples: [
            {
                text1: 'Organizacja “Lorem Ipsum 1”',
                text2: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                text3: 'Egestas, sed, tempus'
            },
            {
                text1: 'Organizacja “Lorem Ipsum 2”',
                text2: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                text3: 'Ut, aliquam, purus, sit, amet'
            },
            {
                text1: 'Organizacja “Lorem Ipsum 3”',
                text2: 'Scelerisque in dictum non consectetur a erat nam.',
                text3: 'Mi, quis, hendrerit, dolor'
            }
        ],
    },
    {
        id:3,
        fundacje: 'Fundacjom',
        organizacje: "Organizacjom pozarządowym",
        lokal: "Lokalnym zbiórkom",
        describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
        examples: [
            {
                text1: 'Zbiórka “Lorem Ipsum 1”',
                text2: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                text3: 'Egestas, sed, tempus'
            },
            {
                text1: 'Zbiórka “Lorem Ipsum 2”',
                text2: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                text3: 'Ut, aliquam, purus, sit, amet'
            },
            {
                text1: 'Zbiórka “Lorem Ipsum 3”',
                text2: 'Scelerisque in dictum non consectetur a erat nam.',
                text3: 'Mi, quis, hendrerit, dolor'
            }
        ],
    }

]

export default function HomeWhoWeHelp(){
    return (
        <section className='homeWhoWeHelp'>
            <p className='homeWhoWeHelp__head'>Komu pomagamy?</p>
            <div className='decoration'/>
            <section className='homeWhoWeHelp__carousel'>
                {carousel.map(item =>{
                    return(
                    <div key={item.id} className='carousel--box'>
                        <section className='carousel--whowehelp'>
                            <p>{item.fundacje}</p>
                            <p>{item.organizacje}</p>
                            <p>{item.lokal}</p>
                        </section>
                        <section className='carousel--describe'>
                            <p>{item.describe}</p>
                        </section>
                        <section className='carousel--table'>
                            {item.examples.map((smallItem, index) =>{
                                return(
                                    <div key={index} className='carousel--table-item'>
                                        <div className='table-firstColumn'>
                                            <p className='text1'>{smallItem.text1}</p>
                                            <p className='text2'>{smallItem.text2}</p>
                                        </div>
                                        <p className='text3'>{smallItem.text3}</p>
                                    </div>
                                )
                            })}
                        </section>
                    </div>
                    )
                })}
            </section>
            <section className='buttons'>
                <button className='carousel--button'>1</button>
                <button className='carousel--button'>2</button>
                <button className='carousel--button'>3</button>
            </section>
        </section>
    )
}