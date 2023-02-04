import { Link } from "react-router-dom"

export const Item = ( {name, image, price, category, id} ) => {

  return(
    <div className="prodCard">
      <img src={image} className="prodImg"/>
      <h4>{name}</h4>
      {/* <p>{description}</p> */}
      <p>${price}</p>
      <small>Categoria: {category}</small>
      <Link to={`/detail/${id}`} className="verMasBtn">Ver mas</Link>
    </div>
  )
}