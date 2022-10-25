import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSimpleSteps from "./homeSimpleSteps";
import HomeAboutUs from "./homeAboutUs";
import HomeWhoWeHelp from "./homeWhoWeHelp";
import HomeContactFooter from "./homeContactFooter";
import {useState} from "react";


export default function Home(){
    const [user, setUser] = useState({})
    return(
        <>
            <HomeHeader user={user} setUser={setUser}/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactFooter/>
        </>
    )
}