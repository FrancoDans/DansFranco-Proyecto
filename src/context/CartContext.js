import { Children, createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider() {
    const [cart, setCart] = useState([
        {title: "Producto 1"}
    ])

    const addItem = (item) =>{
        setCart([...cart, item])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }
    // const removeItem = (id) => {
    //     let newArray = cart.filter(item => item.id !== id);
    //     setCart(newArray)
    // }
    // const clearCart = () => setCart([]);
    console.log(item);
    return (
        <CartContext.Provider value={{cart, addItem, isInCart}} >
            {Children}
        </CartContext.Provider>

        )

}

export default CartProvider;