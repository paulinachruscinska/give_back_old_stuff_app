import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config';

export default function Register(){
    let navigate = useNavigate();
    const [registerEmail, setRegisterEmail]= useState('');
    const [registerPassword, setRegisterPassword]= useState('');
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
            defaultValues:{
                email:'',
                password:'',
                confirmPassword: '',
            },
            mode: 'onTouched'
        }
    );
    const onSubmit = async (data) => {
        console.log(registerEmail, registerPassword, data);
        try {
            const user = await createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(user);
            navigate('/');
        } catch(error){
            console.log(error.message);
        }
    };
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
                <p className='logIn__text'>Za?????? konto</p>
                <div className='decoration'></div>
            </section>
            <form className='form-logIn' onSubmit={handleSubmit(onSubmit)}>
                <div className='form-table'>
                    <label>
                        <p className='form__logIn--text'>Email</p>
                        <input
                            type='email'
                            className='input-logIn'
                            name='email'
                            onChange={(event)=>{setRegisterEmail(event.target.value)}}
                            {...register('email', { required: 'Podany email jest nieprawid??owy!'})}
                        />
                        <p className='error'>{errors.email?.message}</p>
                    </label>
                    <div className='password-eye-div'>
                    <label>
                        <p className='form__logIn--text'>Has??o</p>
                        <input
                            type={passwordEye === false ? "password" : "text"}
                               className='input-logIn'
                               name='password'
                               onChange={(event)=>{setRegisterPassword(event.target.value)}}
                               {...register('password', { required: 'To pole jest obowi??zkowe',
                            minLength:{
                                value:6,
                                message: 'Has??o musi zawiera?? conajmniej 6 znak??w'
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
                        <p className='form__logIn--text'>Powt??rz has??o</p>
                        <input type={confirmPasswordEye === false ? "password" : "text"}
                               className='input-logIn'
                               name='confirmPassword'
                               onPaste={(e)=>{
                                   e.preventDefault()
                                   return false;
                               }}
                               {...register("confirmPassword", { required: 'To pole jest obowi??zkowe',
                                   validate: (value) =>
                                       value === password || "Has??a musz?? by?? jednakowe",
                               })}/>
                        <p className='error'>{errors.confirmPassword?.message}</p>
                    </label>
                        <div className='password-eye'>
                            {confirmPasswordEye === false
                                ? (<AiFillEyeInvisible onClick={handleConfirmPasswordClick} />)
                                : (<AiFillEye onClick={handleConfirmPasswordClick} />)
                            }
                        </div>
                    </div>
                </div>
                <div className='form-button'>
                    <Link to='/logowanie' className='button-logIn'>Zaloguj si??</Link>
                    <input
                        className='submit-button'
                        id='submit-button'
                        type='submit'
                        value="Za?????? konto">
                    </input>
                </div>
            </form>
        </section>
    )
}