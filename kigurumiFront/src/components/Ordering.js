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
    const [full_name, setFullName] = React.useState('');
    const [phone_number, setPhoneNumber] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        createOrder(Object.fromEntries(formData))
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
                <input type="text" name='full_name' value={full_name} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="Text">
                <div>Номер телефона:</div>
                <input type="number" name='phone_number' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
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