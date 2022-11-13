import GiveBackHeader from "../components/giveBackHeader";
import GiveBackSelect from "../components/giveBackSelect";
import HomeLogIn from "../components/homeLogIn";


export default function GiveBack({user, setUser}){
    return(
        <>
            <HomeLogIn user={user} setUser={setUser}/>
            <GiveBackHeader/>
            <GiveBackSelect/>
        </>
    )
}