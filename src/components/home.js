import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSimpleSteps from "./homeSimpleSteps";
import HomeAboutUs from "./homeAboutUs";
import HomeWhoWeHelp from "./homeWhoWeHelp";
import HomeContactFooter from "./homeContactFooter";


export default function Home(){
    return(
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactFooter/>
        </>
    )
}