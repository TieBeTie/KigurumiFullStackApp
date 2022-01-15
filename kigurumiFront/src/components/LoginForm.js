import React from 'react';
import './LoginForm.css';

import enter from './img/enter.png'
import close from './img/close.png'
import { authUser } from '../services/BackApi';


function Auth() {
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [usernameErr, setUsernameErr] = React.useState('');
    const [passwordErr, setPasswordErr] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        authUser(Object.fromEntries(formData))
            .then(data => {
                if (data.hasOwnProperty('username')) {
                    setUsernameErr(data.username)
                    setPasswordErr(data.password)
                } else if (data.hasOwnProperty('password')) {
                    setUsernameErr(data.username)
                    setPasswordErr(data.password)
                } else if (data.hasOwnProperty('detail')) {
                    setUsernameErr(data.detail)
                    setPasswordErr(data.password)
                } else if (data.hasOwnProperty('access_token') || data.hasOwnProperty('refresh')){
                    localStorage.setItem('access_token', data.access)
                    window.location.href = "/"
                }
            })
    };

    return (
        <form onSubmit={handleSubmit} className="LogPas">
            <div className="Text">
                <div>Логин:</div>
                <input type='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                {usernameErr}
            </div>
            <div className="Text">
                <div>Пароль:</div>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordErr}
            </div>
            <a className='NoAccount' href='/registration' style={{ textDecoration: 'none' }} >
                Нет аккаунта? Завести.
            </a>
            <div className="Enter">
                <button className='CleanButton'>
                    <img src={enter} className="Enter" alt="enter" />
                </button>
            </div>
        </form>
    );
}


function LoginForm() {
    return (
        <div >
            <input id="login-form" type="checkbox" />
            <div className="LoginForm">
                <label htmlFor="login-form" className='close'>
                    <img src={close} className="close" alt="close" width="20px" />
                </label>
                <div className="loginInner">
                    <div className="logo">
                        Teeble
                    </div>
                    <Auth />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;