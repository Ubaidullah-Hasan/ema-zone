import React from 'react';
import "./cart.css"

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    for (let product of cart){
        const price = product.price;
        totalPrice = price + totalPrice;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + tax + totalShipping;

    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;