import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'



function Modal() {
  return (
    <Fragment>
      <div className='py-20 max-ss:py-0'>
      <div className='mb-20'>
        <h2 className='text-primary  text-5xl text-center'>Časté otázky - Často kladené dotazy ohledně pojištění</h2>
      </div>
      <div>
      {data.modal.map((item) => (
            <div>
              <div className='bg-dimGrey py-6 px-10 mb-10 rounded'>
                <button className='text-primary font-medium	' key={item.title}>{item.title}</button>
                <span>
                  <img src="" alt="" />
                </span>
              </div>
              <div className='mb-10 hidden'>
                <p className='text-primary ' key={item.text}>{item.text}</p>
              </div>
            </div>
          ))}
      </div>
      </div>
      
    </Fragment>
  )
}

export default Modal




