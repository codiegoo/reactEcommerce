import { Link } from "react-router-dom"
import { BsFillCartFill } from "react-icons/bs"
import { useCartContext } from "../../Context/CartContext"


export const CartWidget = () => {

  const { totalProductAmount } = useCartContext()

  return(

    <Link to="/miCarrito" className="linkCart">
      <BsFillCartFill className="iconCart"/>
      <span>{totalProductAmount()}</span>
    </Link>
  )
}

