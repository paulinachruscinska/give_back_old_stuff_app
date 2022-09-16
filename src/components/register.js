import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React from "react";
import {useForm} from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {useState} from "react";

export default function Register(){
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
            defaultValues:{
                email:'',
                password:'',
                password1: '',
            },
            mode: 'onTouched'
        }
    );
    const onSubmit = newUser =>{
        console.log(newUser);
    }
    const [passwordEye, setPasswordEye] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    };
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
    };
    const password = watch("password");
    return (
        <section className='register__logIn'>
            <header className='homeHeader_log'>
                <section className='homeHeader__info'>
                    <section className='homeHeader__logIn'>
                        <Link to='/logowanie' className='homeHeader__logIn--signIn'>Zaloguj</Link>
                        <Link to='/rejestracja' className='homeHeader__logIn--signUp'>Załóż konto</Link>
                    </section>
                    <nav className='homeHeader__nav'>
                        <input type='checkbox' className='hamburger'/>
                        <ul className='homeHeader__nav--ul'>
                            <li>Start</li>
                            <li><HashLink to='/#homeSimpleSteps'>O co chodzi?</HashLink></li>
                            <li><HashLink to='/#homeAboutUs'>O nas</HashLink></li>
                            <li><HashLink to='/#homeWhoWeHelp'>Fundacja i organizacja</HashLink></li>
                            <li><HashLink to='/#homeContactFooter'>Kontakt</HashLink></li>
                        </ul>
                    </nav>
                </section>
            </header>
            <section className='logIn'>
                <p className='logIn__text'>Załóż konto</p>
                <div className='decoration'></div>
            </section>
            <form className='form-logIn' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-table'>
                    <label>
                        <p className='form__logIn--text'>Email</p>
                        <input type='email' className='input-logIn' {...register('email', { required: 'Podany email jest nieprawidłowy!'})} />
                        <p className='error'>{errors.email?.message}</p>
                    </label>
                    <div className='password-eye-div'>
                    <label>
                        <p className='form__logIn--text'>Hasło</p>
                        <input type={passwordEye === false ? "password" : "text"}
                               className='input-logIn'
                               {...register('password', { required: 'To pole jest obowiązkowe',
                            minLength:{
                                value:6,
                                message: 'Hasło musi zawierać conajmniej 6 znaków'
                        }})} />
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
                    <div className='password-eye-div'>
                    <label>
                        <p className='form__logIn--text'>Powtórz hasło</p>
                        <input type={confirmPasswordEye === false ? "password" : "text"}
                               className='input-logIn'
                               onPaste={(e)=>{
                                   e.preventDefault()
                                   return false;
                               }}
                               {...register("confirmPassword", { required: 'confirm password is required',
                                   validate: (value) =>
                                       value === password || "Hasła muszą być jednakowe",
                               })}/>
                        <p className='error'>{errors.confirmPassword?.message}</p>
                    </label>
                        <div className='password-eye'>
                            {confirmPasswordEye === false ? (
                                <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                            ) : (
                                <AiFillEye onClick={handleConfirmPasswordClick} />
                            )}
                        </div>
                    </div>
                </div>
                <div className='form-button'>
                    <Link to='/logowanie' className='button-logIn'>Zaloguj się</Link>
                    <input className='submit-button' id='submit-button' type='submit' value="Załóż konto"/>
                </div>
            </form>
        </section>
    )
}