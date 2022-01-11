import React, { Component, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Order.css';
import { downloadShop, getBaseURL } from '../services/BackApi';
import add from './img/add.png'



const baseUrl = 'http://localhost:8000/'

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}


class GetKigurumies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogue: [],
            value: 'asdfdas',
            showPopup: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
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
        var cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
            cart = {
                items: []
            }
        }
        cart.items.push(value)
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    popAndAddItem(kigurumi) {
        this.handleClick(kigurumi)
        this.togglePopup.bind(this)
    }


    render() {
        return (
            this.state.catalogue.map(kigurumi => (
                <form className='Kigurumi' onSubmit={this.handleSubmit}>
                    <img src={baseUrl + 'img/' + kigurumi.img} className="KigurumiImg" alt="kigurumiImg" width="300px" />
                    <div className='KigurumiName'>
                        {kigurumi.name + ' Кигуруми'}
                    </div>
                    {/* {this.state.showPopup ?
                        <Popup
                            text='Close Me'
                            closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    } */}
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
                <div className="Filters">

                    <input type="text" placeholder="Найти..." />
                    {/*     
                    <div className="FilterButton">
                        <label htmlFor="SizeButton">
                            Размер
                        </label>
                    </div> */}
                </div>

                <div className="ShowCase">
                    <GetKigurumies />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Order;