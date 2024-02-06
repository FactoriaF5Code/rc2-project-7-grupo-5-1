import React, { useState, useEffect } from "react";
import axios from "axios";
import AddButton from "./Buttons/ButtonAñadir.jsx";
import DeleteButton from "./Buttons/DeleteButton.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";

function App() {
 
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/urls");
        setData(response.data);
        setFilteredData(response.data); // Inicialmente, establecer los datos filtrados igual a todos los datos
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    // Función de búsqueda que filtra los datos según el término de búsqueda
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
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
        <Header onSearch={handleSearch} /> {/* Pasar la función de búsqueda como prop */}
        {filteredData.map((item, index) => (
          <div className="barButtom" key={index}>
            <div className="url-container">
              <h2>{item.title}</h2>
              <p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a>
              </p>
            </div>
            <DeleteButton handleDelete={() => handleDelete(item.id)} />
          </div>
        ))}
      </Router>
    </>
  );
}

export default App;
