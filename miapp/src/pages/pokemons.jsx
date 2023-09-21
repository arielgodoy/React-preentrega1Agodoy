import React, { useState, useEffect } from 'react';


export default function Pokemondata() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemons(data.results);
      })
  }, [pokemons]);

  return (
    <div>
      <h1>LISTADO DE 10 POKEMON'S</h1>
      {pokemons && pokemons.map((item, index) => (<div key={index}>{item.name}</div>))}
    </div>
  );
}