import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Missions() {
    return (
      <Fragment>
        <div>
          <div>
            <h2>Naším posláním je ušetřit vám čas a peníze!</h2>
            <span>Proč zrovna my?</span>
          </div>
          <div>
            {data.mission.map((item) => (
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

export default Missions