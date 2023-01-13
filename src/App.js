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

import { collection, doc, getDoc, getFirestore, getDocs } from "@firebase/firestore";


function App() {




// const [productos, setProductos] = useState([])
// useEffect(() => {
//   const db = getFirestore();
//   const productsCollection = collection(db, "productos");
//   getDocs(productsCollection).then((snapshot) => {
//     setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data })))
//   })
// }, [])

// useEffect(() => {
//   const db = getFirestore();
//   const productsCollection = collection(db, "productos");
//   getDocs(productsCollection).then((snapshot) => {
//     const products = [];
//     snapshot?.docs?.forEach((item) => {
//       products.push({
//         id: item.id,
//         ...item.data()
//       })
//     })
//     setProductos(products)    
//   })
// }, [])

// console.log(productos)


  return (
    <BrowserRouter>
      <div>
        <NavBar />

      </div>
      <Routes>
        <Route exact path="/" element={ <ItemListContainer greetingName="Luciano" category="almacen" /> } />
        <Route exact path="/productos/:productId" element={ <ItemDetailContainer /> } />
        <Route exact path="/:category" element={ <ItemListContainer greetingName="Luciano"/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
