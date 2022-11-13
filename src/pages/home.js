import HomeHeader from "../components/homeHeader";
import HomeThreeColumns from "../components/homeThreeColumns";
import HomeSimpleSteps from "../components/homeSimpleSteps";
import HomeAboutUs from "../components/homeAboutUs";
import HomeWhoWeHelp from "../components/homeWhoWeHelp";
import HomeContactFooter from "../components/homeContactFooter";
import HomeLogIn from "../components/homeLogIn";



export default function Home({user}){
    return(
        <>
            <HomeLogIn user={user} />
            <HomeHeader user={user}/>
            <HomeThreeColumns/>
            <HomeSimpleSteps user={user}/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactFooter/>
        </>
    )
}

