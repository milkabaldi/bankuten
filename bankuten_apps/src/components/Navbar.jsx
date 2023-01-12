import React from 'react'
import images from '../constants/images'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-cGrey'>
          <div>
            <img src={images.Logo} alt="Logo" />
          </div>
            <ul>
                <li className='text-dimLightGrey'><a href="#List">DOMOV</a></li>
                <li className='text-dimLightGrey'><a href="#List">POJIŠTĚNÍ</a></li>
                <li className='text-dimLightGrey'><a href="#List">HYPOTÉKY A PŮJČKY</a></li>
                <li className='text-dimLightGrey'><a href="#List">ENERGIE</a></li>
                <li className='text-dimLightGrey'><a href="#List">SPOŘICÍ</a></li>
                <li className='text-dimLightGrey'><a href="#List">ÚČTY A KARTY</a></li>
                <li className='text-dimLightGrey'><a href="#List">DALŠÍ</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar