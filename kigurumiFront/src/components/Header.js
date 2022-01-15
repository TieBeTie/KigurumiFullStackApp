import React from 'react';
import './Header.css';
import './LoginForm'
import LoginForm from './LoginForm';
import menu from "./img/menu.png"
import cart from "./img/cart.png"
import logout from "./img/logout.png"

function LogOut() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.removeItem("access_token")
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="LogPas">
            <button className='CleanButton'>
                <img src={logout} width="45px" alt="menu" />
            </button>
        </form>
    );
}

function UserMenu(props) {
    return <div className="menu">
        <label htmlFor="sub-open">
            <img className='CleanButton' src={menu} width="45px" alt="menu" />
        </label>
        <input type="checkbox" id="sub-open"></input>
        <div className="submenu">
            <div>
                <a href='/cart'>
                    <img src={cart} width="45px" alt="menu" />
                </a>
            </div>
            <div>
                <LogOut />
            </div>
        </div>
    </div>;
}

function Login(props) {
    return <div className="login">
        <label htmlFor="login-form" class="CleanButton">
            Вход
        </label>
        <LoginForm />
    </div>;
}

function TryLogin(props) {
    if (localStorage.getItem('access_token') !== "undefined" && localStorage.getItem('access_token')) {
        return <UserMenu />;
    }
    return <Login />;
}


function Header() {
    return (
        <div className="Header">
            <div className="logo">
                Teeble
            </div>
            <nav>
                <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
                    Главная
                </a>
                <a href='/order' style={{ textDecoration: 'none', color: 'white' }}>
                    Заказать
                </a>
                <a href='/about' style={{ textDecoration: 'none', color: 'white' }}>
                    О сервисе
                </a>
            </nav>
            <TryLogin />
        </div>
    );
}

export default Header;