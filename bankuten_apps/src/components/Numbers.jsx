import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Numbers() {
    return (
      <Fragment>
        <div>
          <div>
            <h2>Naše společnost v číslech:</h2>
          </div>
          <div>
            {data.numbers.map((item) => (
              <div >
                <img className="" key={item.img} src={item.img} alt="Partner" />
                <span key={item.title}>{item.title}</span>
                <p key={item.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Numbers