import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getFirestore, getDocs } from "@firebase/firestore";
import AddItemButton from './AddItemButton';
import Context from "../context/Context";
import { useContext } from "react";

const ItemDetailContainer = () => {
    const { productId } = useParams();
    const contextData = useContext(Context) 

    // const [productos, setProductos] = useState([{
    //     id: 0,
    //     name: "Coca",
    //     description: "Es una coca",
    //     price: "110,00",
    //     category: "almacen",
    //   },
    //   {
    //     id: 1,
    //     name: "Pepsi",
    //     description: "Es una Pepsi",
    //     price: "220,00",
    //     category: "bebidas",
    //   },
    //   {
    //     id: 2,
    //     name: "Fanta",
    //     description: "Es una fanta",
    //     price: "199,00",
    //     category: "cuidado-personal",
    //   },
    //   {
    //     id: 3,
    //     name: "Manaos",
    //     description: "Es una manaos",
    //     price: "310,00",
    //     category: "limpieza",
    //   },
    //   {
    //     id: 4,
    //     name: "Pritty",
    //     description: "Es una Pritty",
    //     price: "270,00",
    //     category: "almacen",
    //   },
    //   {
    //     id: 5,
    //     name: "Schweppes",
    //     description: "Es una Schweppes",
    //     price: "215,00",
    //     category: "almacen",
    //   }]);

    const [producto, setProducto] = useState([])

    useEffect(() => {
      const db = getFirestore();
      const productRef = doc(db, "productos", productId);
      getDoc(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() })
        }
      })
    }, [])


    return (
         
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-3'>
             
            </div>
            <div className='col'>
              <img src={producto.image} alt="" className='shadow' />
            </div>
            <div className='col mt-3'>
              <h1>{producto.name}</h1>
              <h6>{producto.description}</h6>
              <p>$ {producto.price}</p>
              <AddItemButton productId={ productId } text="Agregar al carrito"/>
              
            </div>
            <div className='col-3'>
             
             </div>
          </div>
        </div>
    );
}

export default ItemDetailContainer;