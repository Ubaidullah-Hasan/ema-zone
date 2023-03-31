import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/cart';
import Product from '../product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(()=>{
    //     const storedCart = getShoppingCart();
    //     console.log(storedCart);
    //     // step 1: get id
    //     for(const id in storedCart){
    //         // step 2: get the product by using id
    //         const addedProduct = products.find(product => product.id === id);
    //         console.log(addedProduct , "add"); //****/ problem i don't get the object by using . notation
    //         // step 3: get quantity of the product 
    //         const quantity = storedCart[id];
    //         addedProduct.quantity = quantity;
    //     }
    // },[products])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const [cart, setCart] = useState([]);
    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }


    return (
        <div className='shop-container'>
            <div className='porducts-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handelAddToCart={handelAddToCart}
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