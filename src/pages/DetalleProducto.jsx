import React from 'react'
import { ItemListContainer, ItemNavBar } from '../components'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Productos } from "../data/bbdd/Productos"

const ViewDetalleProducto = () => {
    const { id } = useParams();

    const [data] = useState(Productos);

    const encontrado = data.find(e => e.id === parseInt(id));

    return (
        <div className='containerDetalle'>
            <h1>{encontrado.nombre}</h1>
            <div className='detalleInfo'>
                <div>
                <img
                    src={encontrado.imagen}
                    alt="Imagen del Producto"
                />
                </div>
                <div className='propsDetalle'>
                    <div className='dataDetalles' >
                        <h2>{encontrado.categoria}</h2>
                        <textarea defaultValue={encontrado.descripcion}/>
                        <b>U$D: {encontrado.precio}</b>
                    </div>
                    <div className='accionesDetalle'>
                        <b>Stock: xxxx</b>
                        <ItemNavBar label={"Add To Cart"} B_Color={"#b8d3d8"}/>
                        <ItemNavBar label={"Check-Out"} B_Color={"#b8d3d8"} ruta={"/Checkout"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export const DetalleProducto = () => {

    return (
        <ItemListContainer>
            <ViewDetalleProducto />
        </ItemListContainer>
    )
}
