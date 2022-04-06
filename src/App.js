import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemlistContainer';
import MediaCard from './components/Card/CardItem';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <MediaCard/>
    </>
      
  );
}

export default App;
