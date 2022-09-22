import React, { useState } from 'react';
import {useForm} from "react-hook-form";

export default function HomeContactFooter(){
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [text, setText]= useState('');
    const {register, handleSubmit, formState: {errors} } = useForm({
            defaultValues:{
                name:'',
                email:'',
                text: '',
            },
            mode: 'onTouched'
        }
    );
    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(name, email, text);
    }

    return (
        <section className='homeContactFooter' id='homeContactFooter'>
            <section className='homeContact'>
                <div className='contact'>
                    <p className='homeContact__text'>Skontaktuj się z nami</p>
                    <div className='decoration'></div>
                    <form
                        className='homeContact__form'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='homeContact__form--inputText'>
                            <label>
                                <p className='form__text'>Wpisz swoje imię</p>
                                <input
                                    type='text'
                                    placeholder='Krzysztof'
                                    onChange={ (event)=> {setName(event.target.value)}}
                                    {...register('name', {
                                        required: 'To pole jest obowiązkowe!',
                                        pattern:{
                                            value: /^\w+$/,
                                            message: "Imię powinno być jednym wyrazem"
                                        }
                                    })}/>
                                <p className='error'>{errors.name?.message}</p>
                            </label>
                            <label>
                                <p className='form__text'>Wpisz swój email</p>
                                <input type='email'
                                       className='input-logIn'
                                       name='email'
                                       onChange={(event)=>{setEmail(event.target.value)}}
                                       {...register('email', {
                                            required: 'Podany email jest nieprawidłowy!',
                                            pattern: {
                                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                               message: "Email jest nieprawidłowy" }})}/>
                                <p className='error'>{errors.email?.message}</p>
                            </label>
                        </div>
                        <label>
                            <p className='form__text'>Wpisz swoją wiadomość</p>
                            <textarea
                                placeholder='Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                 ut aliquip ex ea commodo consequat.'
                                onChange={ event=> setText(event.target.value) }
                                {...register('text', {
                                    required: 'To pole jest obowiązkowe',
                                    minLength:{
                                        value:120,
                                        message: 'Wiadomość musi mieć conajmniej 120 znaków'
                                    }})}
                            />
                            <p className='error'>{errors.text?.message}</p>
                        </label>
                        <input
                            className='wyslij'
                            type='submit'
                            value='Wyślij' />
                    </form>
                </div>
            </section>
            <section className='homeFooter'>
                    <span className='homeFooter__text'>Copyright by Paulina Chruścińska</span>
                    <img src={require('../assets/Instagram.svg').default} alt='logo-instagram'/>
                    <img src={require('../assets/Facebook.svg').default} alt='logo-facebook'/>
            </section>
        </section>
    )
}