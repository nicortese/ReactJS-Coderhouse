import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import itemlistContainer from './components/itemlistContainer';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="App">
      <h1>Hola Mundo!</h1>
    </div>
    <itemlistContainer></itemlistContainer>
    </>
  );
}

export default App;
