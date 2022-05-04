import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemlistContainer';
import ItemDetailContainer from './components/Card/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart'
import CartContextProvider from "./Context/CartContext";
import CheckoutForm from "./components/Form/CheckoutForm";




function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
