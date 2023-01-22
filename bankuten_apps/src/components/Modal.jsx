import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'



function Modal() {
  return (
    <Fragment>
      <div>
        <h2 className='text-primary  text-5xl mb-9 text-center'>Časté otázky - Často kladené dotazy ohledně pojištění</h2>
      </div>
      <div>
      {data.modal.map((item) => (
            <div>
              <span className='text-primary' key={item.title}>{item.title}</span>
              <div>
                <p className='text-primary' key={item.text}>{item.text}</p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  )
}

export default Modal




