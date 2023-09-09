import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterList = ({ characters, handlePageChange, currentPage, totalPages }) => {
  const charactersPerPage = 9;

  const renderCharacterCards = () => {
    return characters.map((character) => (
      <div key={character.id} className="col-md-4 mb-4">
        <div className="card">
          <img src={character.image} alt={character.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title fw-bold">{character.name}</h5>
            <h6 className="card-origin fw-light">Origen: {character.origin.name}</h6>
            <h6 className="card-status fw-light">Estado: {character.status}</h6>
            <h6 className="card-species fw-light">Genero: {character.species}</h6>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="row">
        {renderCharacterCards()}
      </div>
      <nav aria-label="Character Pagination">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CharacterList;
