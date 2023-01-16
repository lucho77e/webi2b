import logo from './logo.svg';
import './App.css';
import React from 'react';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

import { collection, doc, getDoc, getFirestore, getDocs, docs} from "@firebase/firestore";
import Provider from './context/Provider';
import { useContext } from 'react';
import Context from './context/Context';
import Checkout from './components/Checkout';

function App() {





  return (
    
  <Provider>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={ <ItemListContainer greetingName="Luciano" category="almacen" /> } />
          <Route exact path="/productos/:productId" element={ <ItemDetailContainer /> } />
          <Route exact path="/checkout" element={ <Checkout /> } />
          <Route exact path="/:category" element={ <ItemListContainer greetingName="Luciano"/> } />
        </Routes>
      </BrowserRouter>

  </Provider>

  );
}

export default App;
