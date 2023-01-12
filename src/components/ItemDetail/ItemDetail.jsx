export const ItemDetail = ( {item} ) => {
  // console.log(item)


    return(
      <div>
        <h2>{item.name}</h2>
        <img src={item.image}></img>
        <p>{item.description}</p>
        <p>${item.price}</p>

        {/* <ItemCount max={stock}/> */}
      </div>
    )
  }