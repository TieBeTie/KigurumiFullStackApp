import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Registration.css';
import enter from './img/enter.png'
import { authUser, create, createUser } from '../services/BackApi';
import Home from './Home';

function RegistrationForm() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    // const [passwordRepeat, setPasswordRepeat] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        createUser(Object.fromEntries(formData))
    };

    return (
        <form onSubmit={handleSubmit} className="RegistrationForm">
            <div className="RegName">
                Регистрация:
            </div>
            <div className="Text">
                <div>Электронная почта:</div>
                <input type="email" name='email' placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="Text">
                <div>Логин:</div>
                <input type='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="Text">
                <div>Пароль:</div>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <div className="Text">
                <div>Повторите пароль:</div>
                <input type='password' id='password' value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />
            </div> */}
            <div className="Enter">
                <button className='CleanButton'>
                    <img src={enter} className="Enter" alt="enter" />
                </button>

            </div>
        </form>
    );
}


function Registration() {
    return (
        <div >
            <Header />
            <div className="Rectangle">
                <RegistrationForm />
            </div>
            <Footer />
        </div>
    );
}

export default Registration;