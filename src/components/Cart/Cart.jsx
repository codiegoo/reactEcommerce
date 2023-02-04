import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs"

export const Cart = () => {
  
  const {cart, emptyCart, totalProductCart, removeItem} = useContext(CartContext)

  return(
    <div className="cartContain">
    {
      cart.length === 0
      ? <>
          <h2>Tu carrito esta bacio 😑</h2>
          <p>Por favor agrega productos a tu carrito para poder comprar!😉</p>
          <Link to="/reactEcommerce/">Volver</Link>
        </>
      : <>
          <h2>Tu pedido esta listo!</h2>
          <div className="miBuy">
            <div className="miProducts">
              {
                cart.map(item => (
                  <div key={item.id} className="itemContent">
                    <img src={item.image}/>
                    <div className="itemText">
                      <h4>{item.name}</h4>
                      <p>Cantidad: {item.cantidad}</p>
                      <p>Precio: ${item.price * item.cantidad}</p>
                    </div>
                    <button onClick={() => removeItem(item.id)}> <BsFillTrashFill className="bashBtn"/> </button>
                  </div>
                ))
              }
            </div>
            <div className="miPay">
              <h4 className="totalText">Total: ${totalProductCart()}</h4>
              <button onClick={emptyCart}>Vaciar Carrito</button>
            </div>
          </div>
        </>
    }
    </div>
  )
}