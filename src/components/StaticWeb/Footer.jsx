import React from 'react'

export const Footer = () => {
  return (
    <div className='containerFooter'>
      <div className='listaInfo'>
        <div >
          <h3>Sobre dWb</h3>
          <ul>
            <li>Contrato y Licencias</li>
            <li>Contacto</li>
            <li>Eventos y proyecciones</li>
          </ul>
        </div>
        <div>
          <h3>Ayuda</h3>
          <ul>
            <li>Contacto de Soporte</li>
            <li>Reclamos y alertas de uso</li>
          </ul>
        </div>
        <div>
          <h3>Soporte</h3>
          <ul>
            <li>Términos y condiciones</li>
            <li>Políticas de Privacidad</li>
          </ul>
        </div>
      </div>
      
      <div className='copyright'>
        <span>© Copyright - Derechos reservados</span>
      </div>

    </div>
  )
}

