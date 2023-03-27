import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='porducts-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className='order-summery'>
                <h2>Order summery</h2>
            </div>
        </div>
    );
};

export default Shop;