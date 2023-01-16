import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'



function Modal() {
  return (
    <Fragment>
      <div>
      {data.modal.map((item) => (
            <div>
              <span key={item.title}>{item.title}</span>
              <div>
                <p key={item.text}>{item.text}</p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  )
}

export default Modal




