import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Missions() {
    return (
      <Fragment>
        <div>
          <div className='py-16'>
            <h2 className='text-primary  text-5xl mb-9 text-center'>Naším posláním je ušetřit vám čas a peníze!</h2>
            <p className='text-dimLightBlue text-4xl text-center'>Proč zrovna my?</p>
          </div>
          <div className='flex justify-between  flex-row gap-4   '>
            {data.mission.map((item) => (
              <div className='p-10 rounded-lg bg-dimWhite w-1/3 flex flex-col justify-center items-center shadow-lg'>
                <img className='mb-4'  key={item.img} src={item.img} alt="Partner" />
                <span className='text-primary  text-lg text-center mb-4' key={item.title}>{item.title}</span>
                <p className='text-primary  text-lg text-center' key={item.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Missions