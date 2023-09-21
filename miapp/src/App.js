import React, { useState } from 'react';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
//import Products from './pages/products'; // Importa el componente Products
import Pokemondata from './pages/pokemons';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const loadProducts = () => {    
    setShowProducts(true);
  };

  return (
    <div className="App">
      {/*<ItemListContainer greetings={"Figuras de Acción Coleccionables"} />*/}
      <Navbar />
      <button onClick={loadProducts}>Cargar Productos</button>
      {showProducts && <Pokemondata />} {/* Mostrar Products cuando showProducts sea true */}

    </div>
  );
}

export default App;
