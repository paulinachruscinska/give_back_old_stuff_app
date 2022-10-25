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
    const [data, setData] =useState([]);
    const carousel= [<GiveBackSelectBox1 allCheckbox={checkboxInformation} addCheckBox={setCheckBoxInformation} />, <GiveBackSelectBox2 allQuantity={quantityInformation} addQuantity={setQuantityInformation}/>, <GiveBackSelectBox3 allCity={cityInformation} addCity={setCityInformation} addHelp={setWhoHelp} />, <GiveBackSelectBox4 allData={data} addData={setData} />, <GiveBackSelectBox5 allCheckBox={checkboxInformation} allQuantity={quantityInformation} allCity={cityInformation} allData={data} allHelp={whoHelp}/>];
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide=()=>{
        if(slideIndex!==5){
            setSlideIndex(slideIndex + 1)
        }
    }
    const prevSlide=()=>{
        if(slideIndex!==1){
            setSlideIndex(slideIndex - 1)
        }
    }
    return(
        <section className='giveBackSelect-carousel'>
            {carousel.map((box, index)=>{
                return <div
                    key={index}
                    className={slideIndex === index + 1 ? "slideActive" : "slide" }>
                    {box}
                </div>
            })}
            <button onClick={prevSlide} className='wstecz'>Wstecz</button>
            <button onClick={nextSlide} className='dalej'>Dalej</button>
        </section>
    )
}