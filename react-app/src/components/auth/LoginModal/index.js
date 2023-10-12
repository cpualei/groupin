import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm';
import "../AuthForms.css"

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a id="signin-link" onClick={() => setShowModal(true)}>Log in</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
