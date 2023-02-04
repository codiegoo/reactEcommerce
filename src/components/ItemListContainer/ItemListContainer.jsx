import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"



export const ItemListContainer = () => {


  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  // console.log(categoryId)

  useEffect( () => {
    setLoading(true)
    //1-referencia
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where("category", "==", categoryId))
    //2-peticion asincronica
    getDocs(q)
    .then((resp)=>{
      setProductos(resp.docs.map((doc)=>{
        return{
          ...doc.data(),
          id: doc.id
        }
      }))
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [categoryId])



  return(
    <div>

      {
        loading
          ? <h2>Cargando...</h2>
          :<ItemList productos={productos}/>
      }
    </div>
  )
}
