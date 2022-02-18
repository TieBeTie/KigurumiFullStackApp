import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './style/Order.css';
import BackApi, { downloadShop } from '../services/BackApi';
import add from './img/add.png'

class GetKigurumies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogue: [],
            value: '',
            showPopup: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        downloadShop()
            .then(json => {
                this.setState({ catalogue: json })
            })
    }


    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick(value) {
        if (localStorage.getItem('access_token') === "undefined" || !localStorage.getItem('access_token')) {
            window.location.href = '/registration'
        } else {
            var cart = JSON.parse(localStorage.getItem('cart'));
            if (!cart) {
                cart = {
                    items: []
                }
            }
            cart.items.push(value)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }


    render() {
        return (
            this.state.catalogue.map(kigurumi => (
                <form className='Kigurumi' onSubmit={this.handleSubmit}>
                    <img src={BackApi.URL + 'img/' + kigurumi.img} className="KigurumiImg" alt="kigurumiImg" width="300px" />
                    <div className='KigurumiName'>
                        {kigurumi.name + ' Кигуруми'}
                    </div>
                    <div className='PriceAndAdd'>
                        <div className='KigurumiPrice'>
                            {kigurumi.price + ' руб.'}
                        </div>
                        <button className='AddText' onClick={() => this.handleClick(kigurumi)}>
                            <img src={add} className="Add" alt="kigurumiImg" width="25px" />
                        </button>
                    </div>
                </form>
            ))
        )
    }
}



function Order() {
    return (
        <div >
            <Header />
            <div className="Rectangle">
                <div className="ShowCase">
                    <GetKigurumies />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Order;