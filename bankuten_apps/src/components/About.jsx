import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function About() {
  return (
    <Fragment>
      <>
        <div className='py-16 flex items-center justify-center flex-col'>
          <h1 className='text-primary  text-6xl mb-9'>Nejrychlejší online nabídka pojištění online</h1>
          <p className='text-dimLightGrey text-lg'>
            Již více než 10 let šetříme našim klientům peníze tím, vybíráme
            správné pojištění.
          </p>
        </div>
        <div className='bg-dimBlue p-10 rounded-xl'>
          <div>
          <div className="flex items-center justify-between gap-1 mb-10">
            <div className='relative w-2/4 flex flex-col justify-between 	max-w-lg	items-start h-80 bg-dimWhite p-10 rounded-lg'>
              <span className='text-primary text-xl'>Pojištění vozidla</span>
              <button className='text-primary bg-secondary text-base py-3.5 px-2.5 rounded-lg'>Získat pojistku</button>
              <img src={images.First} className='absolute bottom-0 right-0' alt="Car" />
            </div>
            <div className='relative w-2/4 flex flex-col justify-between 	max-w-lg	items-start h-80 bg-dimWhite p-10 rounded-lg'>
              <span className='text-primary text-xl'>Úrazové pojištění</span>
              <button className='text-primary bg-secondary text-base py-3.5 px-2.5 rounded-lg'>Získat pojistku</button>
              <img src={images.Second} className='absolute bottom-0 right-0' alt="Car" />
            </div>
          </div>
          </div>
        <div className='flex justify-between items-center flex-row gap-4   '>
          {data.propose.map((item) => (
            <div className="p-10 rounded-lg bg-dimWhite w-1/3 flex flex-col justify-center items-center">
              <img className="mb-4" key={item.ima} src={item.ima} alt="Image" />
              <span className="text-primary  text-lg" key={item.description}>
                {item.description}
              </span>
            </div>
          ))}
          </div>
        </div>
      </>
    </Fragment>
  )
}

export default About
