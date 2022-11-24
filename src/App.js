import logo from './logo.svg';
import './App.css';
import React from 'react';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer 
          greetingName="Luciano"
        /> 
    </div>
  );
}

export default App;
