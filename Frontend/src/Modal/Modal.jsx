import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";

import axios from "axios";

function MyModal({ isOpen, onCloseModal }) {
  const [title, settitle] = useState("");
  const [link, setLink] = useState("");

  const handletitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async () => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?" + // port
        "(\\/[-a-z\\d%_.~+]*)*" + // path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator

    if (!urlPattern.test(link)) {
      alert(
        "Por favor, introduce una URL válida que comience con http:// o https://"
      );
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/urls", {
        title: title,
        url: link,
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
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        ariaHideApp={false}
        className="my-modal-class"
      >
        <input
          id="title"
          type="text"
          placeholder="Titulo"
          onChange={handletitleChange}
        />

        <input
          id="link"
          type="text"
          placeholder="Copia tu enlace"
          onChange={handleLinkChange}
        />

        <label className="language" for="language">Elige un lenguaje:</label>

        <select id="language" name="language">
          <option value="javascript">JavaScript</option>
          <option value="html-y-css">HTML Y CSS</option>
          <option value="java">JAVA</option>
          <option value="git-y-github">GIT Y GITHUB</option>
        </select>
        

        <button className="button_modal" onClick={handleSubmit}>
          Subir archivo
        </button>
      </Modal>
    </div>
  );
}
export default MyModal;
