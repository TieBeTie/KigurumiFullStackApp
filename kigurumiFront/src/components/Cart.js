import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './style/Cart.css';
import trash from './img/trash.png'
import BackApi from '../services/BackApi';

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem()
};


function findTitle(array, value) {
    for (let i = 0; i < array.length; ++i) {
        if (JSON.stringify(array[i]) === JSON.stringify(value)) {
            return i;
        }
    }
    return false;
}

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
        var ind = findTitle(cart.items, kigurumi)
        cart.items = cart.items.slice(0, ind).concat(cart.items.slice(ind + 1, cart.items.lenght))
        this.setState({ catalogue: cart.items })
        localStorage.setItem('cart', JSON.stringify(cart))
        if (Object.keys(JSON.parse(localStorage.getItem('cart')).items).length === 0) {
            window.location.reload()
        }
    }


    render() {
        if (JSON.parse(localStorage.getItem('cart')) && Object.keys(JSON.parse(localStorage.getItem('cart')).items).length !== 0) {
            return (
                this.state.catalogue.map(kigurumi => (
                    <form className='CartItem' onSubmit={() => handleSubmit()}>
                        <img src={BackApi.URL + 'img/' + kigurumi.img} width="100px" className="CartItemImage" alt="kigurumiImg" />
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
                    </form>
                ))
            )
        } else {
            return (
                <a className='ToOrdering' href='/order' style={{ textDecoration: 'none', color: 'black' }} >
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
                        {JSON.parse(localStorage.getItem('cart')) && Object.keys(JSON.parse(localStorage.getItem('cart')).items).length !== 0 &&
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