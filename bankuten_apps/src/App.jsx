import React from 'react'
import { Navbar, About, Partners, Missions, Numbers, Comments, Insurance, Modal, Footer } from './components'
import styles from './style.js'

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <nav className={`${styles.boxWidth} flex justify-between items-center py-4`}>
          <Navbar />
        </nav>
      </div>

      <section className={`bg-dimWhiteBg ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
          <About />
        </div>
      </section>
      <section className={`bg-dimGrey ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
        <Partners />
        </div>
      </section>
      <section className={`bg-dimWhiteBg ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
          <Missions />
          <Numbers />
        </div>
      </section>
      <section className={`bg-dimGrey ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
        <Comments />
        </div>
      </section>
      <section className={`bg-dimWhiteBg ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
          <Insurance />
          <Modal />
        </div>
      </section>
      <section className={`bg-dimBlack ${styles.flexStart}`}>
        <div className={`py-14 max-xl:px-14 max-sm:px-7 ${styles.boxWidth}`}>
        <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
