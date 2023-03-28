import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, NavBar, Footer } from '../components'
import {Checkout, Home, Productos, Comercios, Servicios, Ofertas, DetalleProducto} from "../pages/"

export const MainRoutes = () => {

    return (
        <BrowserRouter>
            <Header/>
            <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/Checkout' element={<Checkout/>}/>
                    <Route exact path='/Comercios' element={<Comercios/>}/>
                    <Route exact path='/Servicios' element={<Servicios/>}/>
                    <Route exact path='/Productos' element={<Productos/>}/>
                    <Route exact path='/Ofertas' element={<Ofertas/>}/>
                    <Route exact path='/Productos/:id' element={<DetalleProducto/>}/>
                    <Route exact path='/Category/:categoryid' element={<DetalleProducto/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}