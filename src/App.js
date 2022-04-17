import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemlistContainer';
import ItemDetailContainer from './components/Card/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<ItemListContainer/>} /> */}
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
