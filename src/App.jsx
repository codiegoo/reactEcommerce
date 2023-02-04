import 'bootstrap-icons/font/bootstrap-icons.css'
import { CartProvider } from './Context/CartContext'
import { LoginProvider } from './Context/LoginContext'
import { AppRouter } from './Router/AppRouter'

function App() {


  return (


  <LoginProvider>
    <CartProvider>
      <AppRouter/>
    </CartProvider>
  </LoginProvider>
  )
}

export default App
