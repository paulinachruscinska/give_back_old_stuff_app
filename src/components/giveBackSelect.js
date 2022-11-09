import {useState} from "react";
import GiveBackSelectBox1 from "./giveBackSelectBox1";
import GiveBackSelectBox2 from "./giveBackSelectBox2";
import GiveBackSelectBox3 from "./giveBackSelectBox3";
import GiveBackSelectBox4 from "./giveBackSelectBox4";
import GiveBackSelectBox5 from "./giveBackSelectBox5";



export default function GiveBackSelect(){
    const [checkboxInformation,setCheckBoxInformation] = useState([]);
    const [quantityInformation, setQuantityInformation] =useState([]);
    const [cityInformation, setCityInformation]=useState([]);
    const [whoHelp, setWhoHelp]=useState([]);
    const [data, setData] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide=(event)=>{
        event.preventDefault()
        if(slideIndex!==5){
            setSlideIndex(slideIndex + 1)
        }
    }
    const prevSlide=(event)=>{
        event.preventDefault()
        if(slideIndex!==1){
            setSlideIndex(slideIndex - 1)
        }
    }
    const carousel= [
        <GiveBackSelectBox1
            nextSlide ={nextSlide}
            prevSlide={prevSlide}
            allCheckbox={checkboxInformation}
            addCheckBox={setCheckBoxInformation}
        />,
        <GiveBackSelectBox2
            nextSlide ={nextSlide}
            prevSlide={prevSlide}
            allQuantity={quantityInformation}
            addQuantity={setQuantityInformation}
        />,
        <GiveBackSelectBox3
            nextSlide ={nextSlide}
            prevSlide={prevSlide}
            allCity={cityInformation}
            addCity={setCityInformation}
            addHelp={setWhoHelp}
        />,
        <GiveBackSelectBox4
            nextSlide ={nextSlide}
            prevSlide={prevSlide}
            allData={data}
            addData={setData}
        />,
        <GiveBackSelectBox5
            allCheckBox={checkboxInformation}
            allQuantity={quantityInformation}
            allCity={cityInformation}
            allData={data}
            allHelp={whoHelp}
        />
    ];

    return(
        <section className='giveBackSelect-carousel'>
            {carousel.map((box, index)=>{
                return <div
                    key={index}
                    className={slideIndex === index + 1 ? "slideActive" : "slide" }>
                    {box}
                </div>
            })}
        </section>
    )
}