import { Item } from "../Item/Item"

export const ItemList = ( {productos} ) => {

  return(
    <div>
      <h2>Nuestros productos</h2>
      <hr/>

      <section className="prodContainer">
        { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
      </section>
    </div>
  )
}