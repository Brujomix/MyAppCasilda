import React from 'react'
import Circle from "../../data/imgs/marco1.png"
import { Link } from 'react-router-dom'

//Image Border Circle Component
const Img = () => {
    return (
        <img
            src={Circle}
            alt='Item del Menu'
        />
    )
}

export const ItemNavBar = ({label, B_Color, ruta}) => {
    return (
        <Link to={ruta}
            className='ItemsNavBar'
            style={{backgroundColor: `${B_Color}`}}       
            > 
                <span>{label}</span>
                <Img/>
        </Link>
    )
}