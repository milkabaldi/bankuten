import React from 'react'
import { Navbar, About, Partners, Missions, Numbers, Comments, Insurance, Modal, Footer } from './components'
import styles from './style.js'

const App = () => {
  return (
    <div className="bg-dimPeach w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <section className={`bg-dimWhite ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Partners />
          <Missions />
          <Numbers />
          <Comments />
          <Insurance />
          <Modal />
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
