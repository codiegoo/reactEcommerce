import { Cart } from '../components/Cart/Cart'
import { NavBar } from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import {Routes, Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Checkout } from '../components/Checkout/Checkout'

export const PrivateRoutes = () => {

  return(
    <>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <Header /> }/>
            <Route path="productos/:categoryId" element={ <ItemListContainer /> }/>
            <Route path='detail/:itemId' element={<ItemDetailContainer/>}/>
            {/* <Route path='/login' element={<LoginScreen/>}/> */}
            <Route path="/miCarrito" element={ <Cart/> }/>
            <Route path="/checkout" element={ <Checkout/> }/>
            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
      </>
  )
}