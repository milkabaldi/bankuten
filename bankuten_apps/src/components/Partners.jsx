import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Partners() {
    return (
      <Fragment>
        <div className='py-24'>
          <div>
            <h2 className='text-primary  text-5xl mb-9 text-center'>Naši partneři</h2>
          </div>
          <div className='grid grid-cols-6 gap-4 bg-dimBlue p-10 rounded-xl justify-center items-center max-md:grid-cols-3 max-ss:grid-cols-2'>
            {data.partners.map((item) => (
              <div className='m-auto' >
                <img className="" key={item.logo} src={item.logo} alt="Partner" />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Partners