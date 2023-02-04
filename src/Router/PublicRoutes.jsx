import { Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen/LoginScreen'
import {Routes, Route} from 'react-router-dom'

export const PublicRoutes = () => {

  return(
    <Routes>
        <Route path="/reactEcommerce/login" element={ <LoginScreen/> }/>
        <Route path='*' element={<Navigate to="/reactEcommerce/login"/>}/>
      </Routes>
  )
}