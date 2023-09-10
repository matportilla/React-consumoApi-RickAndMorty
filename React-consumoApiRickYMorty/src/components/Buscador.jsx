import React from 'react';

const Buscador = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <input
      className='m-4'
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Buscador;
