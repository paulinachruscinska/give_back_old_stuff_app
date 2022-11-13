import HomeHeader from "../components/homeHeader";
import HomeThreeColumns from "../components/homeThreeColumns";
import HomeSimpleSteps from "../components/homeSimpleSteps";
import HomeAboutUs from "../components/homeAboutUs";
import HomeWhoWeHelp from "../components/homeWhoWeHelp";
import HomeContactFooter from "../components/homeContactFooter";
import HomeLogIn from "../components/homeLogIn";



export default function Home({user, setUser}){
    return(
        <>
            <HomeLogIn user={user} setUser={setUser}/>
            <HomeHeader user={user} setUser={setUser}/>
            <HomeThreeColumns/>
            <HomeSimpleSteps user={user} setUser={setUser}/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactFooter/>
        </>
    )
}

