import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './style/Home.css';
import family from './img/Family.png'


function Home() {
    return (
        <body>
            <Header />
            <main className='Main'>
                <div className='TaglineAndOrder'>
                    <div className='Tagline'>
                        Закажи свое уникальное кигурими, <br/> а мы доставим его на дом
                    </div>
                    <a className='Order' href='/order' style={{ textDecoration: 'none', color: 'white' }} >
                        Заказать кигурими
                    </a>
                </div>
                <img src={family} className="family-img" alt="family" />
            </main>
            <Footer />
        </body>
    );
}

export default Home;