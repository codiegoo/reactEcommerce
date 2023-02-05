import { Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import {Routes, Route} from 'react-router-dom'
import { RegisterScreen } from '../components/RegisterScreen/RegisterScreen.jsx'

export const PublicRoutes = () => {

  return(
    <Routes>
        <Route path="/login" element={ <LoginScreen/> }/>
        <Route path="/Register" element={<RegisterScreen/>}/>
        <Route path='*' element={<Navigate to="/login"/>}/>
      </Routes>
  )
}