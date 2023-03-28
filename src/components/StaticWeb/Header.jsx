import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../Cards/CardWidget'
import { LogoEmpresa } from '../LogoEmpresa/LogoEmpresa'

export const Header = () => {
  return (
    <div className='containerHeader'>
      <Link to={"/"}>
        <LogoEmpresa/>
      </Link>
      <h1>E-Commers Casilda</h1>
      <Link to={"/Checkout"}>
        <CartWidget/>
      </Link>
    </div>
  )
}
