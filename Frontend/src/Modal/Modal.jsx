import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

function MyModal({ isOpen, onCloseModal }) {
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onCloseModal} ariaHideApp={false} className="my-modal-class">
        <div>
            <input id="description" type="text" placeholder='Descripción' onChange={handleDescriptionChange} />
        </div>
        <div>
            <input id="link" type="text" placeholder='Enlace' onChange={handleLinkChange} />
        </div>
        <button onClick={onCloseModal}>Subir archivo</button>
      </Modal>
    </div>
  );
}

export default MyModal;