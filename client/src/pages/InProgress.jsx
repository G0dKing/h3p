import { useState } from "react";
import Logo from "@comp/Logo";
import NeonSign from "@comp/NeonSign";
import CutoutText from "@comp/CutoutText";
import Modal from "@comp/Modal";
import "@style/InProgress.css";

const InProgress = () => {

  const setShowModal = useState(false);

  const openModal = () => {
    setShowModal(true)
  };

  const closeModal = () => {
    !openModal
  };

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

export default InProgress;
