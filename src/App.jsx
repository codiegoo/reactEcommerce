import { Component, useState } from 'react'
import { NavBar } from './components/NavBar/NavBar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Header } from './components/Header/Header'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Nosotros } from './components/Nosotros/Nosotros'

function App() {

  return (

    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/reactEcommerce/" element={ <Header /> }/>
        <Route path="/reactEcommerce/productos" element={ <ItemListContainer /> }/>
        <Route path="/reactEcommerce/nosotros" element={ <Nosotros /> }/>
        <Route path="*" element={ <Navigate to={"/reactEcommerce"}/> }/>
      </Routes>
      {/* <ItemDetailContainer itemId={9}/> */}

    </BrowserRouter>
  )
}

export default App
