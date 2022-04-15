import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemlistContainer';
import ItemDetailContainer from './components/Card/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
      
  );
}

export default App;
