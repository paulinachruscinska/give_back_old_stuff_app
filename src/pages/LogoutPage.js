import HomeLogIn from "../components/homeLogIn";
import LogOut from "../components/logut";

export default function LogoutPage({user, setUser}){
    return(
        <>
            <HomeLogIn user={user} setUser={setUser}/>
            <LogOut/>
        </>
    )
}