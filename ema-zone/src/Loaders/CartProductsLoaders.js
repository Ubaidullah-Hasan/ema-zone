import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProduct = await fetch("products.json");
    const products = await loaderProduct.json(); 

    // if cart is in databage we must use async method
    const storedCart = getShoppingCart()
    console.log(storedCart);
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart
}

export default cartProductsLoader;