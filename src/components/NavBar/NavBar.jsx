import { CardWidget } from "./CardWidget"
import { Link } from "react-router-dom"


export const NavBar = () => {
  return(
    <nav className="navContainer">
      <div className="LogoContainer">
      <Link to="/reactEcommerce/"><img src="logo.png" className="logo"></img></Link>
      </div>
      <ul className="listContainer">
        <Link className="listItem" to="/reactEcommerce/" >Inicio</Link>
        <Link className="listItem" to="/reactEcommerce/productos" >Productos</Link>
        <Link className="listItem" to="/reactEcommerce/nosotros" >Contacto</Link>
      </ul>
      <CardWidget />
    </nav>
  )
}