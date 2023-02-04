import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
  return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState(init)
  console.log(cart)

  const addToCarrito = (item) => {
    setCart([...cart, item])
    // const newCart = cart.slice()
    // newCart.push(item)
    // setCart(newCart)
    
  }

  const removeItem = (id) => {
    setCart( cart.filter(item => item.id !== id) )

  }
  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const emptyCart = () => {
    setCart([])

  }

  const totalProductCart = () => {
    return cart.reduce((acc, item)=> acc + item.price * item.cantidad, 0)
  }
  const totalProductAmount = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return(
    <CartContext.Provider value={{
      cart,
      addToCarrito,
      removeItem,
      isInCart,
      emptyCart,
      totalProductCart,
      totalProductAmount
    }}>
      {children}
    </CartContext.Provider>
  )
}