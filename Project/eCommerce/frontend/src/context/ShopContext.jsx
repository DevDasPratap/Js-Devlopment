// common variable and state

import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext()

const ShopContextProvider = (props) =>{
    const currency = `$`;
    const delivery_fee = 10;

    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})

    const addToCart = async (itemId, productSize) => {
        // Clone the existing cartItem state
        let cartData = structuredClone(cartItem);
        
        // Check if the item already exists in the cart
        if (cartData[itemId]) {
            // Check if the size already exists in that item
            if (cartData[itemId][productSize]) {
                // If the size already exists, increment the quantity
                cartData[itemId][productSize] += 1;
            } else {
                // If the size doesn't exist, set it to 1
                cartData[itemId][productSize] = 1;
            }
        } else {
            // If the item doesn't exist, create a new entry for it
            cartData[itemId] = { [productSize]: 1 };
        }
    
        // Update the state with the new cartData
        setCartItem(cartData);
    };
    

    useEffect(()=>{
        console.log('cartItem', cartItem)
    },[cartItem])

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItem,
        addToCart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider