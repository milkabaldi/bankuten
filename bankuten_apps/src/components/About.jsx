import React, { Fragment } from 'react'
import { images } from '../constants'
import data from '../constants/data'

function About() {
  return (
    <Fragment>
      <div>
        <div>
          <h1>Nejrychlejší online nabídka pojištění online</h1>
          <p>
            Již více než 10 let šetříme našim klientům peníze tím, vybíráme
            správné pojištění.
          </p>
        </div>
        <div>
          <div className="2">
            <div>
              <span>Pojištění vozidla</span>
              <button>Získat pojistku</button>
              <img src={images.First} alt="Car" />
            </div>
            <div>
              <span>Úrazové pojištění</span>
              <button>Získat pojistku</button>
              <img src={images.Second} alt="Car" />
            </div>
          </div>
          {data.propose.map((item) => (
            <div className="4">
              <img className="" key={item.ima} src={item.ima} alt="Image" />
              <span className="" key={item.description}>
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default About
