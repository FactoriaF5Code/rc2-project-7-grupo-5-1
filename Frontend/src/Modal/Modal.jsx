import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

import axios from 'axios'; 


function MyModal({ isOpen, onCloseModal }) {
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async () => {
    const urlPattern = new RegExp('^(https?:\\/\\/)'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?'+ // port
    '(\\/[-a-z\\d%_.~+]*)*'+ // path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  if (!urlPattern.test(link)) {
    alert("Por favor, introduce una URL válida que comience con http:// o https://");
    return;
  }
    try {
      const response = await axios.post('http://localhost:8080/urls', {
        title: description,
        url: link
      });
      console.log(response.data);
      onCloseModal();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={onCloseModal} ariaHideApp={false} className="my-modal-class">
        <div>
            <input id="description" type="text" placeholder='Titulo' onChange={handleDescriptionChange} />
        </div>
        <div>
            <input id="link" type="text" placeholder='Enlace' onChange={handleLinkChange} />
        </div>
        <button onClick={handleSubmit}>Subir archivo</button>
      </Modal>
    </div>
  );
}
export default MyModal;