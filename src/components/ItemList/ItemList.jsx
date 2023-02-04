import { Item } from "../Item/Item"

export const ItemList = ( {productos} ) => {

  return(
    <div>
      <h2 className="prodText">Nuestros Productos</h2>
      <section className="prodContainer">
        { productos.map((prod) => <Item key={prod.id} {...prod}/>)}
      </section>
    </div>
  )
}