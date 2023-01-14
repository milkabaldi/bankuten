import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function Insurance() {
    return (
      <Fragment>
        <div>
          <div>
            <h2>Naše společnost v číslech:</h2>
          </div>
          <div>
            {data.insurance.map((item) => (
              <div >
                <span key={item.number}>{item.number}</span>
                <span key={item.title}>{item.title}</span>
                <ul>
                    <li key={item.des1}>{item.des1}</li>
                    <li key={item.des2}>{item.des2}</li>
                    <li key={item.des3}>{item.des3}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
        {data.insuranceText.map((item) => (
              <div >
                <span key={item.title}>{item.title}</span>
                <div>
                  <p key={item.text1}>{item.text1}</p>
                  <p key={item.text2}>{item.text2}</p>
                </div>
              </div>
            ))}
        </div>
      </Fragment>
    )
  }

export default Insurance