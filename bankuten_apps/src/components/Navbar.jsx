import React from 'react'
import images from '../constants/images'

const Navbar = () => {
  return (
    <>
          <div>
            <img src={images.Logo} alt="Logo" />
          </div>
            <ul className='flex justify-between gap-2 max-ss:hidden'>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">DOMOV</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">POJIŠTĚNÍ</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">HYPOTÉKY A PŮJČKY</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">ENERGIE</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">SPOŘICÍ</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">ÚČTY A KARTY</a></li>
                <li className='text-dimLightGrey'><a className='text-dimLightGrey hover:text-secondary transition-colors ease-in-out duration-300 active:border-b-2 border-secondary' href="#List">DALŠÍ</a></li>
            </ul>
    </>
  )
}

export default Navbar