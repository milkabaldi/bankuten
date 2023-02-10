import React from 'react'
import { images } from '../constants'

const Footer = () => {
  return (
    <>
      <div className='mb-16'>
        <img src={images.Logo} alt="Logo" />
      </div>
      <div className='grid grid-cols-7 justify-between items-start gap-4 mb-10 max-lg:grid-cols-4 max-ss:grid-cols-2'>
        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Pojištění</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Povinné ručení online</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Havarijní pojištění</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Cestovní pojištění</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Úrazové pojištění</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Pojištění domácnosti</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Pojištění auta</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Spoření</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Penzijní spoření</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Navýšení penzijního spoření</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Spořicí účty</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Úvěry</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Nová hypotéka</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Půjčky</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kreditní karty</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Reklamační řád</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Energie</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Elektřina</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Plyn</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Pojišťovny</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Allianz</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>AXA Assistance</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>ČPP</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>ČSOB pojišťovna</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Direct pojišťovna</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Generali</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kooperativa pojišťovna</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Slavia</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>UNIQA</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Porovnej24.cz</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Úvodní strana</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kdo jsme</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Volné pracovní pozice</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Affiliate Program</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Hlídací pes</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Autoinzerce</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Doporuč a získej</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kurzovní lístek</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Články</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Slovník pojmů</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Důchodová kalkulačka</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Výpočet čísté mzdy</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Obchodní podmínky</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Ochrana osobních údajů</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Závazek klientům</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Reklamační řád</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kontakt</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Poučení o právech na ochranu osobních údajů</a>
            </li>
          </ul>
        </div>

        <div>
          <span className='text-dimWhite mb-6 text-2xl block'>Bankuten</span>
          <ul>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Kdo jsme</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Reklamační řád</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Zásady ochrany osobních údajů</a>
            </li>
            <li className='mb-3'>
              <a href="#1" className='text-dimBlue text-base hover:text-secondary transition-colors ease-in-out duration-300'>Section naUživatelská dohodame</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center gap-4 mb-5'>
          <a className='text-dimGrey underline hover:text-secondary transition-colors ease-in-out duration-300 text-center' href="#23aasasda">Zásady ochrany osobních údajů</a>
          <a className='text-dimGrey underline hover:text-secondary transition-colors ease-in-out duration-300 text-center' href="#43aaadasdaa">Uživatelská dohoda</a>
        </div>
        <div>
          <p className='text-dimBlue text-xs text-center'>
            ©2023, OOO “Bakuten.com”. Při použití hypertextového odkazu na
            materiály sravni.ru povinné. INN 775201496, OHRN 1084793640289.
            106987, Česko, Boulevard nadšenců, dům 2, 26 patro.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
