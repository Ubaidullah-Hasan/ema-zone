import React from 'react';
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handelRemoveCart }) => {
    console.log(product)
    const { name, img, price, quantity, id } = product;
    return (
        <div className='review-item'>
            <img src={img} alt={name} />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Quantity: <span className='orange-text'>{quantity}</span> </p>
            </div>
            <button onClick={() => handelRemoveCart(id)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;