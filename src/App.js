import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/NavBar/ItemListContainer'

function App() {
  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting= "Probando" />
    </div>
  );
}

export default App;
