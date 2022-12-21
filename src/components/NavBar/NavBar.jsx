import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { CardWidget } from "../CardWidget/CardWidget"

export const NavBar = () => {
  return(
    <nav className="navContainer">
      <div className="LogoContainer">
        <img src="logo.png" className="logo"></img>
      </div>
      <ItemListContainer/>
      <CardWidget/>
    </nav>
  )
}