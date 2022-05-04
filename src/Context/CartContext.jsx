import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0;
        cart.map(item =>  
        total += item.count * item.price
        )
        setTotalPrice(total);
    }, [cart])

    const addItem = (item) =>{
        console.log("item", item);
        const indexProduct = cart.findIndex((cartItem)=> cartItem.id === item.id);
        if(indexProduct !== -1){
            const newCart = [...cart];
            newCart[indexProduct].count = newCart[indexProduct].count + item.count;
        setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
        console.log(cart);
};

    const removeItem = (id) =>{
        setCart(cart.filter((products) => products.id !== id ));
    }

    const clear = () => setCart([]);

    return(
        <>
            <CartContext.Provider value={{cart, addItem, removeItem, clear, totalPrice}}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;