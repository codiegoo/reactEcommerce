import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";


// const MOCK_USERS = [
//   {
//     email: 'diegoedvflores@gmail.com',
//     password: 'admin'
//   },
//   {
//     email: 'tutoredv@gmail.com',
//     password: 'coder'
//   },
//   {
//     email: 'profesor12@gmail.com',
//     password: 'coder'
//   }
// ]


export const LoginContext = createContext()

export const useLoginContext = () => {
  return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: '',
    logged: false,
    error: null
  })

  // console.log(user)

  const login = (values) => {
    setLoading(true)

    signInWithEmailAndPassword(auth, values.email, values.password)
    .catch((error) => {
      console.log(error)
      setUser({
        email: null,
        logged: false,
        error: error.message
      })
    })
    .finally(()=>setLoading(false))
  }

  const logout = () => {
    setUser({
      email: '',
      logged: false,
      error: null
    })
  }

  const register = (values) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .catch((error) => {
        console.log(error)
        setUser({
          email: null,
          logged: false,
          error: error.message
        })
      })
      .finally(()=>setLoading(false))
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user)=>{
      if (user) {
        setUser({
          email: user.email,
          logged: true,
          error: null
        })
      }else{
        logout()
      }
    })
  }, [])
  return(
    <LoginContext.Provider value={{user, login, logout, loading, register}}>
      {children}
    </LoginContext.Provider>
  )
}