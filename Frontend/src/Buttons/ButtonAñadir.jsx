import React from 'react';
import "./ButtonAñadir.css"

function AddButton({ onOpenModal }) {
  return (
    <div className="button-box" style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="bt"onClick={onOpenModal}
        
      >
        Añadir
      </button>
    </div>
  );
};

export default AddButton;

