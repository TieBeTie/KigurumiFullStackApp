import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Order.css';
import { downloadShop } from '../services/BackApi';


const baseUrl = 'http://teeble.sytes.net:8000/'

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('cart', JSON.stringify)
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
                <form className='Kigurumi' onSubmit={handleSubmit}>
                    <img src={baseUrl + 'img/' + kigurumi.img} className="kigurumiImg" alt="kigurumiImg" width="300px"/>
                    <div className='KigurumiPrice'>
                        {kigurumi.price + ' руб.'}
                    </div>
                    <div className='KigurumiName'>
                        {kigurumi.name + ' Кигуруми'}
                    </div>
                    <button className='CleanButton'>
                        Добавить
                    </button>
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