import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Cart.css';
import trash from './img/enter.png'
import { downloadShop } from '../services/BackApi';

const baseUrl = 'http://localhost:8000/'

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem()
};

class GetKigurumies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogue: [],
        }
    }

    componentDidMount() {
        var json = JSON.parse(localStorage.getItem('cart'))
        if (json) {
            this.setState({ catalogue: json.items })
        }
    }


    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick(kigurumi) {
        var cart = JSON.parse(localStorage.getItem('cart'))
        var ind = cart.items.findIndex(kigurumi)
        cart.items = cart.items.slice(0, ind - 1).concat(cart.items.slice(ind + 1, cart.items.lenght))
        this.setState({ catalogue: cart.items })
        localStorage.setItem('cart', JSON.stringify(cart))
    }


    render() {
        if (JSON.parse(localStorage.getItem('cart'))) {
            return (
                this.state.catalogue.map(kigurumi => (
                    <form className='CartItem' onSubmit={() => handleSubmit()}>
                        <img src={baseUrl + 'img/' + kigurumi.img} width="100px" className="CartItemImage" alt="kigurumiImg" />
                        <div className='CartItemName'>
                            {kigurumi.name + ' кигуруми'}
                        </div>
                        <div className='CartItemRight'>
                            <button className='CleanButton' onClick={() => this.handleClick(kigurumi)}>
                                <img src={trash} className="TrashIcon" alt="trash" width="30px" />
                            </button>
                            <div className='CartItemPrice'>
                                {kigurumi.price + ' руб.'}
                            </div>
                        </div>
                        {/* <div className='CartItemNameAndPrice'>
                            <div className='CartItemName'>
                                {kigurumi.name + ' кигуруми'}
                            </div>
                            <div className='CartItemPrice'>
                                {kigurumi.price + ' руб.'}
                            </div>
                        </div> */}
                    </form>
                ))
            )
        } else {
            return (
                <a className='ToOrdering' href='/order0' style={{ textDecoration: 'none', color: 'black' }} >
                    Вы ещё не добавили кигуруми в корзину
                </a>

            )
        }
    }
}

function Cart() {
    return (
        <div >
            <Header />
            <div className="Rectangle">
                <div className='CartPage'>
                    <div className='CartSign'>
                        Корзина
                    </div>
                    <div className='Cart'>
                        <GetKigurumies />
                        {JSON.parse(localStorage.getItem('cart')) &&
                            <a className='ToOrdering' href='/ordering' style={{ textDecoration: 'none', color: 'black' }} >
                                Перейти к оформлению заказа
                            </a>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;