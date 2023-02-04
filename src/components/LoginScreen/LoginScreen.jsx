import { useState } from "react"
import { useLoginContext } from "../../Context/LoginContext"


export const LoginScreen = () => {

  const {login, user, loading} = useLoginContext()

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
  }
  return(
    <div className="loginScreen">
      <div className="login">
        <h2>Login</h2>


        <form onSubmit={handleSubmit}>
          <input type='email' value={values.email} onChange={handleInputChange} name="email" placeholder="loremEjemplo@email.com"></input>
          <input type='password' value={values.password} onChange={handleInputChange} name="password" placeholder="password"></input>
          <button disabled={loading}>{loading ? 'Cargando':'Ingresar'}</button>
          {user.error && <p>{user.error}</p>}
        </form>
      </div>
    </div>
  )
}