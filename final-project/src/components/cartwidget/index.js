import React from 'react';
import './styles.css';
import cart from './media/shopping-cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="Shopping Cart"/>
            <p>0</p>
        </div>
    );
}

export default CartWidget;