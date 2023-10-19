import NavBar from './components/navBar/navBar';
import itemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <itemListContainer greeting="Bienvenido"/>
    </div>
  );
}

export default App;
