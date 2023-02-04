import { createContext, useState, useContext } from "react";

const MOCK_USERS = [
  {
    email: 'diegoedvflores@gmail.com',
    password: 'admin'
  },
  {
    email: 'tutoredv@gmail.com',
    password: 'coder'
  },
  {
    email: 'profesor12@gmail.com',
    password: 'coder'
  }
]


export const LoginContext = createContext()

export const useLoginContext = () => {
  return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: 'diegoedvflores@gmail.com',
    logged: true,
    error: null
  })

  console.log(user)

  const login = (values) => {
    setLoading(true)
    setTimeout(()=>{
      const match = MOCK_USERS.find(user => user.email === values.email)

      if (!match) {
        setUser({
          email: null,
          logged: false,
          error: 'Usuario Incorrecto'
        })
        setLoading(false)
        return
      }
      if (match.password === values.password) {
        setUser({
          email: match.email,
          logged: true,
          error: null
        })
      }else {
        setUser({
          email: null,
          logged: false,
          error: 'Contraseña Incorrecta'
        })
      }
      setLoading(false)
    }, 1500)
  }

  const logout = () => {
    setUser({
      email: '',
      logged: false,
      error: null
    })
  }
  return(
    <LoginContext.Provider value={{user, login, logout, loading}}>
      {children}
    </LoginContext.Provider>
  )
}