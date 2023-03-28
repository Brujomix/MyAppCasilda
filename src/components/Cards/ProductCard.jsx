import React from 'react'
import { useState } from 'react';
import { Productos } from '../../data/bbdd/Productos';
import { Link } from 'react-router-dom';

export const ProductCard = () => {

  const [data] = useState(Productos);

  return (
    <div className='containerCardsProductos'>
      {
        data.map(e =>
          <div key={e.id}>
            <h3>{e.nombre}</h3>
            <div className="cardItems">
              <img
                src={e.imagen}
                alt="Imagen del Producto"
              />
              <textarea defaultValue={e.descripcion} />
              <div className='infoCard'>
                <span>{e.categoria}</span>
                <span>U$D {e.precio}</span>
                <Link to={`/Productos/${e.id}`}> 
                  <button>Ver Detalles</button>
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
