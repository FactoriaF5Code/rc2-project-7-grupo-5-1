import React from 'react';

function AddButton({ onOpenModal }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onOpenModal}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '10%',
        }}
      >
        Añadir
      </button>
    </div>
  );
};

export default AddButton;

