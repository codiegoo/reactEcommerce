import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemDetailContainer = () => {



  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)
  const { itemId } = useParams()


  useEffect(()=>{
    //referencia
    const docRef = doc(db, "productos", itemId)
    //peticion
    getDoc(docRef)
      .then(doc => {
        setItem( {...doc.data(), id: doc.id} )
      })
  }, [itemId])

  return(
    <div>
      {
        item && <ItemDetail {...item}/>
      }
    </div>
  )
}