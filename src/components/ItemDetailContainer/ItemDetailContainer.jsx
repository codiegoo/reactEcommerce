import { useEffect, useState } from "react"
import { pedirDatos, pedirItemPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = ({itemId}) => {

  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    pedirItemPorId(itemId)
      .then((data) => {
        setItem(data)
      })
      .catch((err) => {
        setError(err.error)
      })
  }, [itemId])

  return(
    <div>
      {
        error ? error : item && <ItemDetail item={item}/>
      }
    </div>
  )
}