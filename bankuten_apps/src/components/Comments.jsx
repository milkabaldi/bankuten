import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Comments() {
    return (
      <Fragment>
        <div>
          <div>
            <h2>Komentáře</h2>
          </div>
          <div>
            {data.reviews.map((item) => (
              <div >
                <img className="" key={item.face} src={item.face} alt="Reviewer" />
                <span key={item.name}>{item.name}</span>
                <br />
                <span key={item.date}>{item.date}</span>
                <br />
                <span key={item.stars}>{item.stars}</span>
                <p    key={item.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

export default Comments