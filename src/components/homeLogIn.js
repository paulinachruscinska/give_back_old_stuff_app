import {Link} from "react-router-dom";
import React, {useState} from "react";
import {onAuthStateChanged,signOut} from 'firebase/auth';
import { auth } from '../firebase-config';

export default function HomeLogIn(){
    const [user, setUser] = useState({});
    console.log(user);
    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    const logout = async () => {
        await signOut(auth)
    }
    const logIn =()=>{
        if (user === null ){
            return(
                <section className='homeHeader__logIn'>
                    <Link to='/logowanie' className='homeHeader__logIn--signIn'>Zaloguj</Link>
                    <Link to='/rejestracja' className='homeHeader__logIn--signUp'>Załóż konto</Link>
                </section>
            )
        } else {
            return(
                <section className='homeHeader__logIn'>
                    <p className='homeHeader__logIn--signIn'> {`Cześć ${user?.email}!`} </p>
                    <Link to='oddaj-rzeczy' className='homeHeader__logIn--signUp'>Oddaj rzeczy</Link>
                    <Link to='wylogowano' className='homeHeader__logIn--signIn' onClick={logout}>Wyloguj</Link>
                </section>
            )
        }
    }
return logIn()

}