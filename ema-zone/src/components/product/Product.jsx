import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const handelAddToCart = props.handelAddToCart;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-content'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-reating'>Rating : {ratings} star</p>
            </div>
            <button onClick={() => { handelAddToCart(props.product) }} className='cart-btn'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;