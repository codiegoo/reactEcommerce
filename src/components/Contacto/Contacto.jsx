import { useState } from "react"


export const Contacto = () => {

  const [values, setValues] = useState({
    nombre: '',
    email: '',
    phone: ''
  })
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })


  }
  const handleSumit = (e) => {
    e.preventDefault()
    console.log('sumit', values)
  }
  return(
    <div>
      <form onSubmit={handleSumit}>
        <input type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name='nombre'></input>
        <input type="email" placeholder="Correo" value={values.email} onChange={handleInputChange} name='email'></input>
        <input type="number" placeholder="Telefono" value={values.phone} onChange={handleInputChange} name='phone'></input>
        <button>Enviar</button>
      </form>


    </div>
  )
}