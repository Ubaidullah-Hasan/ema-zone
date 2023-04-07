import React from 'react';
import "./cart.css"

const Cart = (props) => {
    const {cart} = props;

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;
    for (let product of cart){

        product.quantity = product.quantity || 1;

        const price = product.price;
        totalPrice = price + totalPrice * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + tax + totalShipping;

    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;