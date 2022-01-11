import React from 'react';
import { createOrder } from '../services/BackApi';
import Footer from './Footer';
import Header from './Header';
import './Ordering.css';
import enter from './img/enter.png'

function OrderForm() {
    const [country, setCountry] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [city, setCity] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [index, setIndex] = React.useState('');
    const [name, setFullName] = React.useState('');
    const [phone, setPhoneNumber] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        var cart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < cart.items.length; ++i) {
            let formData = new FormData(e.target)
            formData.append('kigurumi_id', cart.items[i].id)
            createOrder(Object.fromEntries(formData))
        }
        localStorage.removeItem('cart')
    };

    return (
        <form onSubmit={handleSubmit} className="RegistrationForm">
            <div className="RegName">
                Оформление заказа
            </div>
            <div className="Text">
                <div>Страна:</div>
                <input type="text" name='country' value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div className="Text">
                <div>Область:</div>
                <input type="text" name='region' value={region} onChange={(e) => setRegion(e.target.value)} />
            </div>
            <div className="Text">
                <div>Город:</div>
                <input type="text" name='city' value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="Text">
                <div>Адрес:</div>
                <input type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="Text">
                <div> Индекс:</div>
                <input type="text" name='index' value={index} onChange={(e) => setIndex(e.target.value)} />
            </div>
            <div className="Text">
                <div> ФИО:</div>
                <input type="text" name='name' value={name} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="Text">
                <div>Номер телефона:</div>
                <input type="number" name='phone' value={phone} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>

            <div className="Enter">
                <button className='CleanButton'>
                    <img src={enter} className="Enter" alt="enter" />
                </button>

            </div>
        </form>
    );
}


function Ordering() {
    return (
        <div >
            <Header />
            <div className='Rectangle'>
                <OrderForm />
            </div>
            <Footer />
        </div>
    );
}

export default Ordering;