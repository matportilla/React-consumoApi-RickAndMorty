import React, { useState, useEffect } from 'react';
import CharacterList from './CharacterList';

function MiApi() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedCharacters, setSortedCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

//   Solicitud y captura de información para su almacenamiento 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setSortedCharacters(data.results);
      });
  }, []);
// busqueda de personajes especificos al escribir se actualiza el campo y desencadena useEffect para filtrar los personajes
  useEffect(() => {
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedCharacters(filteredCharacters);
  }, [searchTerm, characters]);

// paginacion 
  useEffect(() => {
    const startIndex = (currentPage - 1) * 9;
    const endIndex = startIndex + 9;
    setDisplayedCharacters(sortedCharacters.slice(startIndex, endIndex));
  }, [currentPage, sortedCharacters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = () => {
    const sorted = [...sortedCharacters].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedCharacters(sorted);
  };

  return (
    <div className="App">
      <input
        className='m-4'
        type="text"
        placeholder="Search characters"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='btn btn-primary' onClick={handleSort}>Ordenar A/Z</button>
      <CharacterList
        characters={displayedCharacters}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={Math.ceil(sortedCharacters.length / 9)}
      />
    </div>
  );
}

export default MiApi;
