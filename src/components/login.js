import {Link, useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config';


export default function Login(){
    let navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const {register, handleSubmit, formState: {errors} } = useForm({
        defaultValues:{
            email:'',
            password:'',
        }
    }
    );
    const onSubmit = async (data) =>{
        console.log(loginEmail, loginPassword, data);
        console.log(auth);
        try {
            const user = await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate('/');
            console.log(user)
        } catch(error){
            console.log(error.message);
        }
    }

    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    };

    useEffect(() => {

    })
    return (
        <>

            <header className='homeHeader_log'>
                <section className='homeHeader__info'>
                    <nav className='homeHeader__nav'>
                        <input type='checkbox' className='hamburger'/>
                        <ul className='homeHeader__nav--ul'>
                            <li><HashLink to='/'>Start</HashLink></li>
                            <li><HashLink to='/#homeSimpleSteps'>O co chodzi?</HashLink></li>
                            <li><HashLink to='/#homeAboutUs'>O nas</HashLink></li>
                            <li><HashLink to='/#homeWhoWeHelp'>Fundacja i organizacja</HashLink></li>
                            <li><HashLink to='/#homeContactFooter'>Kontakt</HashLink></li>
                        </ul>
                    </nav>
                </section>
            </header>
            <section className='logIn'>
                <p className='logIn__text'>Zaloguj si??</p>
                <div className='decoration'></div>
            </section>
            <form className='form-logIn' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-table'>
                    <label>
                        <p className='form__logIn--text'>Email</p>
                        <input
                            type='email'
                            className='input-logIn'
                            onChange={(event)=>setLoginEmail(event.target.value)}
                            {...register('email', { required: 'Podany email jest nieprawid??owy!'})} />
                        <p className='error'>{errors.email?.message}</p>
                    </label>
                    <div className='password-eye-div'>
                        <label>
                            <p className='form__logIn--text'>Has??o</p>
                            <input
                                type={passwordEye === false ? "password" : "text"}
                                className='input-logIn'
                                onChange={(event)=>setLoginPassword(event.target.value)}
                                {...register('password', { required: 'To pole jest obowi??zkowe', minLength: {value:6, message:"Podane has??o jest za kr??tkie"}})} />
                            <p className='error'>{errors.password?.message}</p>
                        </label>
                        <div className="password-eye">
                            {passwordEye === false ? (
                                <AiFillEyeInvisible onClick={handlePasswordClick} />
                            ) : (
                                <AiFillEye onClick={handlePasswordClick} />
                            )}
                        </div>
                    </div>
                </div>
                <div className='form-button'>
                    <Link to='/rejestracja' className='button-logIn'>Za?????? konto</Link>
                    <input  className='submit-button' id='submit-button' type='submit' value="Zaloguj si??"/>
                </div>
            </form>

        </>
    )
}