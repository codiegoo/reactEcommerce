import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect( () => {
    pedirDatos()
      .then((res) => {
        setProductos(res)
      })
      .catch((err) => {
        console.log(err)
      })
  } )

  return(
    <div>
      {
        <ItemList productos={productos}/>
      }
    </div>
  )
}
