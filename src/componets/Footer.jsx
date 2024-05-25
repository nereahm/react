import React from 'react'

function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='footer__texto'>
            <p className='footer__textoPie'>FAQ</p>
            <p className='footer__textoPie'>Privacy</p>
            <p className='footer__textoPie'>Terms</p>
            <p className='footer__textoPie'>Security</p>
            </div>
            <div className='footer__imagenes'>
            <img src='correo.png' className='footer__img'/>
            <img src='twitter.png' className='footer__img' />
            </div>
        </div>
    </>
  )
}

export default Footer