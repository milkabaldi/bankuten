import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Comments() {
    return (
      <Fragment>
        <div className='bg-dimGrey py-32'>
          <div className='mb-40'>
            <h2 className='text-primary  text-5xl mb-9 text-center '>Komentáře</h2>
          </div>
          <div className='flex gap-4 '>
            {data.reviews.map((item) => (
              <div className='bg-dimWhite pt-20 px-10 pb-10 relative'>
                <img className="absolute -top-20 left-30 w-36	" key={item.face} src={item.face} alt="Reviewer" />
                <div className='flex justify-between '>  
                  <span className='text-primary text-lg' key={item.name}>{item.name}</span>
                  <span className='text-primary text-lg' key={item.date}>{item.date}</span>
                </div>
                <span className='text-primary text-lg' key={item.stars}>{item.stars}</span>
                <p className='text-primary text-lg'    key={item.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Comments