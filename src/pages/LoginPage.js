import HomeLogIn from "../components/homeLogIn";
import Login from "../components/login";

export default function LoginPage({user, setUser}){
    return(
        <>
            <HomeLogIn user={user} setUser={setUser}/>
            <Login/>
        </>
    )
}