import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config";

export const Checkout = () => {
  const { cart, totalProductCart, emptyCart } = useCartContext()
  const [orderId, setOrderId] = useState(null)
  const [values, setValues] = useState({
    nombre: '',
    direccion:'',
    email: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = {
      cliente: values,
      items: cart,
      total: totalProductCart()
    }

    const ordersRef = collection(db, 'oreders')

    addDoc(ordersRef, order)
      .then((doc) => {
        setOrderId(doc.id)
        emptyCart()
      })
  }
  if(orderId) {
    return(
      <div className="checkoutContain">
        <h2>Gracias por tu compra!</h2>

        <p>Tu ID de orden es: {orderId}</p>
        <Link to="reactEcommerce/" className="link">Volver</Link>
      </div>
    )
  }

  if (cart.length === 0){
    return <Navigate to="/"/>
  }
  return ( 
    <div className="checkoutContain">
      <h2>Terminar mi compra</h2>

      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" name="nombre" value={values.nombre} placeholder="nombre"/>
        <input onChange={handleInputChange} type="text" name="direccion" value={values.direccion} placeholder="direccion"/>
        <input onChange={handleInputChange} type="email" name="email" value={values.email} placeholder="email"/>
        <button>Enviar</button>
      </form>
    </div>
   );
}
