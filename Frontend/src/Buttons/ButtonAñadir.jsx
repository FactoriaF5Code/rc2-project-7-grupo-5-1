import React from 'react';

function AddButton({ onOpenModal }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onOpenModal}
        style={{
          backgroundColor: '#1A8FDD',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '10%',
          fontSize: '1.8rem',
        }}
      >
        Añadir
      </button>
    </div>
  );
};

export default AddButton;

