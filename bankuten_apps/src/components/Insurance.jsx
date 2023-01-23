import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Insurance() {
    return (
      <Fragment>
        <div className='py-32'>
          <div className='mb-16'>
            <h2 className='text-primary  text-5xl mb-9 text-center'>Naše společnost v číslech:</h2>
          </div>
          <div className='grid grid-cols-3 justify-between items-start gap-4'>
            {data.insurance.map((item) => (
              <div className='flex flex-col items-center bg-white p-10 relative'>
                <span className='text-dimWhite text-lg bg-dimLightBlue absolute top-0 p-2 rounded-full' key={item.number}>{item.number}</span>
                <span className='text-primary text-lg mb-6' key={item.title}>{item.title}</span>
                <ul>
                    <li className='text-primary mb-3' key={item.des1}>{item.des1}</li>
                    <li className='text-primary mb-3' key={item.des2}>{item.des2}</li>
                    <li className='text-primary mb-3' key={item.des3}>{item.des3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col '>
        {data.insuranceText.map((item) => (
              <div className='mb-20'>
                <h3 className='text-primary  text-2xl  text-center mb-10 font-semibold	' key={item.title}>{item.title}</h3>
                <div className='grid grid-cols-2 gap-5'>
                  <p className='text-primary text-lg' key={item.text1}>{item.text1}</p>
                  <p className='text-primary text-lg' key={item.text2}>{item.text2}</p>
                </div>
              </div>
            ))}
        </div>
      </Fragment>
    )
  }

export default Insurance