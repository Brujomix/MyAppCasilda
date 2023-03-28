import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar'

export const NavBar = () => {
  return (
    <div className='containerNavBar'>
      <ItemNavBar label={"Comercios"} B_Color={"#ecabab"} ruta={"/Comercios"}/>
      <ItemNavBar label={"Servicios"} B_Color={"#b9d8b8"} ruta={"/Servicios"}/>
      <ItemNavBar label={"Productos"} B_Color={"#b8d3d8"} ruta={"/Productos"}/>
      <ItemNavBar label={"Ofertas"} B_Color={"#d7b8d8"} ruta={"/Ofertas"}/>
    </div>
  )
}
