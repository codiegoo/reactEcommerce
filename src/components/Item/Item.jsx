

export const Item = ( {name, image, description,price, id} ) => {

  return(
    <div className="prodCard">
      <img src={image} className="prodImg"/>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>${price}</p>
      <button>Ver mas</button>
    </div>
  )
}