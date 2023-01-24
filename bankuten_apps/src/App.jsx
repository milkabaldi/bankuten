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
        <div className={`${styles.boxWidth}`}>
          <About />
          <Partners />
          <Missions />
          <Numbers />
          <Comments />
          <Insurance />
          <Modal />
          
        </div>
      </section>
      <section className={`bg-dimBlack ${styles.flexStart}`}>
        <div className={`py-14 max-lg:px-14 ${styles.boxWidth}`}>
        <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
