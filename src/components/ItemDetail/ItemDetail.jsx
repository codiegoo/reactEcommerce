import { ItemCount } from "../ItemCount/ItemCount"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
export const ItemDetail = ( {name, image, description, price, id, stock} ) => {

    const { addToCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
      navigate(-1)
    }


    const handleAgeregar = () => {
      const item = {name, image, description, price, id, cantidad}
      addToCarrito(item)
    }
    return(
      <div className="itemDetailContain">
        <h2>{name}</h2>
        <img src={image}></img>
        <p>{description}</p>
        <p>Precio: ${price}</p>
        { stock <= 18 && <h5>Ultimas unidades disponibles!</h5>}


        {
          !isInCart(id)
            ? <ItemCount max={stock}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  onAdd={handleAgeregar}
                />
            : <Link to="/miCarrito" className="volverBtn">Finalizar Compra</Link>
        }

        {/* <ItemCount max={stock}/> */}
        <button onClick={handleVolver} className="volverBtn">Volver</button>
      </div>
    )
  }