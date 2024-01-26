import { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement('#root')

function MyModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [folder, setFolder] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleFolderChange = (event) => {
    setFolder(event.target.value);
  };

  return (
    <div className="modal-container">
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="my-modal-class">
        <div>
            <input id="description" type="text" placeholder='Descripción' onChange={handleDescriptionChange} />
        </div>
        <div>
            <input id="link" type="text" placeholder='Enlace' onChange={handleLinkChange} />
        </div>
        <div>
            <select id="folder" value={folder} onChange={handleFolderChange}>
              <option value="html-y-css">HTML Y CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
                <option value="react">React</option>

            </select>
        </div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default MyModal;