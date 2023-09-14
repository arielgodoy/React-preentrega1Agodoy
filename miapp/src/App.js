import Navbar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <ItemListContainer greetings={"Figuras de Acción Coleccionables"} />
      <Navbar />       
    </div>
  );
}

export default App;
