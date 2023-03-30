import React, { useEffect, useState } from 'react';
import Cart from '../cart/cart';
import Product from '../product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);


    const handelAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='porducts-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        key={product.id}
                        handelAddToCart = {handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-summery'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;