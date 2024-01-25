import { useHistory } from 'react-router-dom';
import './Pagina2.css';

const FormPage = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navega a la siguiente página al hacer clic en el botón
    history.push('/otraPagina');
  };

  return (
    <div className="form-page">
      <input type="text" placeholder="Introduce texto 1" />
      <button onClick={handleButtonClick}>Ir a otra página</button>
      <input type="text" placeholder="Introduce texto 2" />
      <button onClick={handleButtonClick}>Ir a otra página</button>
      <input type="text" placeholder="Introduce texto 3" />
      <button onClick={handleButtonClick}>Ir a otra página</button>
      <input type="text" placeholder="Introduce texto 4" />
      <button onClick={handleButtonClick}>Ir a otra página</button>
    </div>
  );
};

export default Pagina2;
