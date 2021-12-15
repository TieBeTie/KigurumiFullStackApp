import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Cart.css';
import { downloadShop } from '../services/BackApi';

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem()
};

class GetKigurumies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogue: []
        }
    }

    componentDidMount() {
        downloadShop()
            .then(json => {
                this.setState({ catalogue: json })

            })
    }


    render() {

        return (

            this.state.catalogue.map(kigurumi => (
                <form className='CartItem' onSubmit={handleSubmit}>
                    <div className='KigurumiName'>
                        {kigurumi.name + ' кигуруми'}
                    </div>
                    <img src={kigurumi.img} className="kigurumiImg" alt="kigurumiImg" />
                    <div className='KigurumiPrice'>
                        {kigurumi.price}
                    </div>
                    <button className='CleanButton'>
                        Добавить
                    </button>
                </form>
            ))
        )
    }
}

function Cart() {
    return (
        <div >
            <Header />
            <div className="Rectangle">
                <div style={{ color: 'rgba(0,0,0, 0.6)', fontSize: '24px' }}>
                    Корзина
                </div>
                <div className='Cart'>
                    <GetKigurumies />
                    <a className='ToOrdering' href='/ordering' style={{ textDecoration: 'none', color: 'black' }} >
                        Перейти к оформлению заказа
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;