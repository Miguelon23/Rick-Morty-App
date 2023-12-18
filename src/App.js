import React, { useState } from 'react';
import imageRickMorty from './imagenes/rick-morty.png';
import './App.css';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    try {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results);
    } catch (error) {
      console.error('Error fetching data from the API', error);
      // Puedes agregar lógica adicional para manejar el error, como mostrar un mensaje al usuario.
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;