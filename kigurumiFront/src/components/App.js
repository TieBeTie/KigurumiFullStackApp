import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';

import About from './About'
import NotFound from './NotFound';
import Order from './Order';
import './style/App.css';
import Registration from './Registration';
import Cart from './Cart';
import Ordering from './Ordering';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={< Home />} />
                    <Route path='/order' element={< Order />} />
                    <Route path='/about' element={< About />} />
                    <Route path='/registration' element={< Registration />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/ordering' element={< Ordering />} />
                    <Route path='/*' exact={true} element={< NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;