import React, { useState, useEffect } from "react";
import axios from "axios";
import AddButton from "./Buttons/ButtonAñadir.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MyModal from "./Modal/Modal.jsx";
import Header from "./Header/Header.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/urls");
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

  const handleSubmit = (event) => {
    // Nueva función para manejar el envío del formulario
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
        const response = await axios.post("http://localhost:8080/urls", {
          title: title,
          url: url,
        });

        if (response.status === 200) {
          alert("Datos enviados con éxito");
          setTitle("");
          setUrl("");
        } else {
          alert("Hubo un error al enviar los datos");
        }
      } catch (error) {
        console.error(error);
        alert("Hubo un error al enviar los datos");
      }
    };
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/urls/${id}`);
      if (response.status === 200) {
        setData(data.filter((item) => item.id !== id));
      } else {
        alert("Hubo un error al eliminar los datos");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al eliminar los datos");
    }
  };

  return (
    <>
      <Router>
        <Header />
        <AddButton onOpenModal={handleOpenModal} />
        <MyModal isOpen={isModalOpen} onCloseModal={handleCloseModal} />
        {data.map((item, index) => (
          <div className="barButtom" key={index}>
            <div className="url-container">
              <h2>{item.title}</h2>
              <p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a>
              </p>
            </div>
            <div className="buton-delete">
              <button
                className="noselect"
                onClick={() => handleDelete(item.id)}
              >
                <span className="text">Eliminar</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </Router>
    </>
  );
}

export default App;
