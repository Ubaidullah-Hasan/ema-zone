import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-content'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacturer : {seller}</p>
                <p className='product-reating'>Rating : {ratings} star</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;