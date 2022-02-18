import React from 'react';
import './style/Footer.css';

import email from './img/email.png'
import phone from './img/phone.png'
import github from './img/github.png'
import telegram from './img/telegram.png'
import vk from './img/vk.png'


function Footer() {
    return (
        <footer className="Footer">
            <div className="Contacts">
                <div className="Contact">
                    Контакты:
                </div>
                <div className="Contact">
                    <img src={email} width="32px" alt="email"/>
                    kozhagulov.r@phystech.edu
                </div>
                <div className="Contact">
                    <img src={phone} width="32px" alt="phone"/>
                    +7 (999) 983 43 40
                </div>
                <div className="Contact">
                    <img src={github} width="32px" alt="github"/>
                    <a href='https://github.com/tiebetie' style={{ textDecoration: 'none', color: 'white' }}>
                        github.com/TieBeTie
                    </a>
                </div>
                <div className="Contact">
                    <img src={telegram} width="32px" alt="telegram"/>
                    <a href='https://t.me/TieBeTie' style={{ textDecoration: 'none', color: 'white' }}>
                        @TieBeTie
                    </a>
                </div>
                <div className="Contact">
                    <img src={vk} width="32px" alt="vk"/>
                    <a href='https://vk.com/tiebetie' style={{ textDecoration: 'none', color: 'white' }}>
                        vk.com/TieBeTie
                    </a>
                </div>
            </div>
            <div className="Partners">
                <div className="Partner">
                    Партнёры:
                </div>
                <div className="Partner">
                    <a href='https://VHDev.ru' style={{ textDecoration: 'none', color: 'white' }}>
                        Vladislav Hacker
                    </a>
                </div>
            </div>
            <div className="Teeble">
                <div className="TeebleStr"> Разработчик: Кожагулов Рамазан </div>
                <div className="TeebleStr"> Copyright © Teeble 2021 </div>
                <div className="TeebleStr"> Все права защищены. </div>
            </div>

        </footer>
    );
}

export default Footer;