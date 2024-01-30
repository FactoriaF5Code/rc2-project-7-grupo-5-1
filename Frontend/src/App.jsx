import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddButton from "./Buttons/ButtonAñadir.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MyModal from "./Modal/Modal.jsx";
import Header from "./Header/Header.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(""); // Nuevo estado para el título
  const [url, setUrl] = useState(""); // Nuevo estado para la URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/urls');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => { // Nueva función para manejar el envío del formulario
    event.preventDefault();

    if (!title.trim() || !url.trim()) {
      alert("Ambos campos son obligatorios");
      return;
    }

    const handleSubmit = async (event) => {
  event.preventDefault();

  if (!title.trim() || !url.trim()) {
    alert("Ambos campos son obligatorios");
    return;
  }

  try {
    const response = await axios.post('http://localhost:8080/urls', {
      title: title,
      url: url
    });

    if (response.status === 200) {
      alert('Datos enviados con éxito');
      setTitle('');
      setUrl('');
    } else {
      alert('Hubo un error al enviar los datos');
    }
  } catch (error) {
    console.error(error);
    alert('Hubo un error al enviar los datos');
  }
};
  };

  return (
    <>
      <Router>
        <Header />
        <AddButton onOpenModal={handleOpenModal} />
        <MyModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
        {data.map((item, index) => (
          <div className='barButtom' key={index}>
            <p>{item.title}</p>
            <p><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></p>
          </div>
        ))}
      </Router>
    </>
  );
}

export default App;