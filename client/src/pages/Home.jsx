import { useState } from 'react'
import Logo from '@comp/Logo'
import NeonSign from '@comp/NeonSign'
import CutoutText from '@comp/CutoutText'
import Modal from '@comp/Modal'
import Footer from '@comp/Footer'
import '@style/Home.css'

const Home = () => {

  const [showModal, setShowModal] = useState(false)
  
  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className='container'>
        <section className="header"></section>
        <section className="main">
          <div className="hero">
            <Logo />
            <div className="hero-text">
               <NeonSign />
            </div>
            <CutoutText onClick={handleModalOpen} />

            {showModal && (
              <Modal onClose={handleModalClose} />
            )}

      </div>
      </section>
      <section className="footer">
        <div className="footer">
          <Footer />
        </div>
      </section>
      
      </div>
    </>
   );
}

export default Home