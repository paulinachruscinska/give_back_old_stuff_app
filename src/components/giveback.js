import HomeContactFooter from "./homeContactFooter";
import GiveBackHeader from "./giveBackHeader";
import GiveBackSelect from "./giveBackSelect";
import GiveBackImportantInformation from "./giveBackImportantInformation";

export default function GiveBack(){
    return(
        <>
            <GiveBackHeader/>
            <GiveBackImportantInformation/>
            <GiveBackSelect/>
            <HomeContactFooter/>
        </>
    )
}