import { useState } from "react";
import Logo from "@comp/Logo";
import NeonSign from "@comp/NeonSign";
import CutoutText from "@comp/CutoutText";
import Modal from "@comp/Modal";
import "@style/Home.css";

const Home = () => {
  
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="container">
      <section className="header"></section>
      <section className="main">
        <div className="hero">
          <Logo />
          <div className="hero-text">
            <NeonSign />
          </div>
          <CutoutText onClick={openModal} />

          <Modal onClose={closeModal} />
        </div>
      </section>
    </div>
  );
};

export default Home;
