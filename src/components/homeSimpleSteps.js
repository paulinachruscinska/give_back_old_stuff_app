import {Link} from "react-router-dom";
import React from "react";

const instruction = [
    {
        id:1,
        image: require('../assets/Icon-1.svg').default,
        text: 'Wybierz rzeczy',
        text2: 'ubrania, zabawki, sprzęt i inne'
    },
    {
        id:2,
        image: require('../assets/Icon-2.svg').default,
        text:'Spakuj je',
        text2: 'skorzystaj z worków na śmieci'
    },
    {
        id:3,
        image: require('../assets/Icon-3.svg').default,
        text: 'Zdecyduj komu chcesz pomóc',
        text2: 'wybierz zaufane miejsce'
    },
    {
        id:4,
        image: require('../assets/Icon-4.svg').default,
        text: 'Zamów kuriera',
        text2: 'kurier przyjedzie w dogodnym terminie'
    }
]

export default function HomeSimpleSteps({user}){
    const goToLink =()=>{
        if(user==null){
            return <Link to='/logowanie' className='button'><span>ODDAJ RZECZY</span></Link>
        } else {
            return <Link to='/oddaj-rzeczy' className='button'><span>ODDAJ RZECZY</span></Link>
        }
    }
    return (
        <section className='homeSimpleSteps' id='homeSimpleSteps'>
            <div className='homeSimpleSteps__text'>
                <p className='homeSimpleSteps__text--head'>Wystarczą 4 proste kroki</p>
                <div className='decoration'></div>
            </div>
            <div className='homeSimpleSteps__instruction'>
                {instruction.map(item=>{
                    return(
                        <div key={item.id} className='homeSimpleSteps__instruction--box'>
                           <img className='instruction-image' src={item.image} alt='instruction'/>
                            <p className='instruction-text'>{item.text}</p>
                            <span className='line'/>
                            <p className='instruction-text2'>{item.text2}</p>
                        </div>
                )})}
            </div>
            <div className='homeSimpleSteps__button'>
                {goToLink()}
            </div>
        </section>
    )
}