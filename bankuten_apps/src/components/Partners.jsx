import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Partners() {
    return (
      <Fragment>
        <div>
          <div>
            <h2>Naši partneři</h2>
          </div>
          <div>
            {data.partners.map((item) => (
              <div >
                <img className="" key={item.logo} src={item.logo} alt="Partner" />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Partners