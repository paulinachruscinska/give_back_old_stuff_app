import HomeLogIn from "../components/homeLogIn";
import Register from "../components/register";

export default function RegisterPage({user, setUser}){
    return(
        <>
            <HomeLogIn user={user} setUser={setUser}/>
            <Register/>
        </>
    )
}