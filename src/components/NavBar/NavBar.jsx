import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { useLoginContext } from "../../Context/LoginContext"
import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {

  const {user, logout} = useLoginContext()
  const {cart} = useCartContext()

  return(
    <nav className="navContainer">
      <div className="LogoContainer">
        <Link to="/reactEcommerce/"><img src="/logo.png" className="logo"></img></Link>
      </div>
      <ul className="listContainer">
        <Link className="listItem" to="/reactEcommerce/" >Inicio</Link>
        <Link className="listItem" to="/productos/celulares">Celulares</Link>
        <Link className="listItem" to="/productos/tablets">Tablets</Link>
        <Link className="listItem" to="/productos/Laptops">LapTops</Link>
        <Link className="listItem" to="/productos/desktop">Desktop</Link>
        <Link className="listItem" to="/productos/accesorios">Accesorios</Link>
        <Link className="listItem" to="/nosotros">Contacto</Link>
      </ul>
      <div className="iconMyCar">
        <CartWidget />
        {/* <Link to="/miCarrito"><i className="bi bi-cart3 iconCar"></i></Link> */}
      </div>
      <div>
        <p>Bienvenido: {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}