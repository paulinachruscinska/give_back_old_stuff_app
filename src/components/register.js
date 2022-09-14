import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import React from "react";
import {useForm} from "react-hook-form";

export default function Register(){
    const {register, handleSubmit, formState: {errors} } = useForm({
            defaultValues:{
                email:'',
                password:'',
                password1:'',
            }
        }
    );
    const onSubmit = newUser =>{
        console.log(newUser);
    }
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
                    <label>
                        <p className='form__logIn--text'>Hasło</p>
                        <input type='password' className='input-logIn' {...register('password', { required: 'To pole jest obowiązkowe', minLength: {value:6, message:"Podane hasło jest za krótkie"}})} />
                        <p className='error'>{errors.password?.message}</p>
                    </label>
                    <label>
                        <p className='form__logIn--text'>Powtórz hasło</p>
                        <input type='password' className='input-logIn' {...register('password1', { required: 'To pole jest obowiązkowe', minLength: {value:6, message:"Podane hasło jest za krótkie"}})} />
                        <p className='error'>{errors.password?.message}</p>
                    </label>
                </div>
                <div className='form-button'>
                    <Link to='/logowanie' className='button-logIn'>Zaloguj się</Link>
                    <input className='submit-button' id='submit-button' type='submit' value="Załóż konto"/>
                </div>
            </form>
        </section>
    )
}