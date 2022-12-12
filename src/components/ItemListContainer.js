import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = ({greetingName}) => {
// const [categoria, setCategoria] = useState(useParams())
const categoria = useParams()

const [productos, setProductos] = useState([{
    id: 0,
    name: "Coca",
    description: "Es una coca",
    price: "110,00",
    category: "almacen",
  },
  {
    id: 1,
    name: "Pepsi",
    description: "Es una Pepsi",
    price: "220,00",
    category: "bebidas",
  },
  {
    id: 2,
    name: "Fanta",
    description: "Es una fanta",
    price: "199,00",
    category: "cuidado-personal",
  },
  {
    id: 3,
    name: "Manaos",
    description: "Es una manaos",
    price: "310,00",
    category: "limpieza",
  },
  {
    id: 4,
    name: "Pritty",
    description: "Es una Pritty",
    price: "270,00",
    category: "almacen",
  },
  {
    id: 5,
    name: "Schweppes",
    description: "Es una Schweppes",
    price: "215,00",
    category: "almacen",
  }]);
    
// useEffect(() => {
//     fetch('http://localhost:3000/src/data/data.json')
//     .then((response) => response.json())
//     .then((response) => {
//         console.log("Respuesta:", response)
//     })
//     .catch((error) => {
//         console.error("Error al consultar API:", error)
//     })
// }, [])

fetch('../data/data.json', {
    method: 'get',
    mode: 'no-cors',
    headers: {
       'Content-Type': "application/json",
       'Access-Control-Allow-Origin' : '*',
       'Access-Control-Allow-Credentials' : true,
    },})
.then((response) => response.json())
.then((data) => {
    console.log("Respuesta:", data)
})
    
      
    const renderProductos = () => {

    return productos?.map ((item) => {
        if(categoria.category == undefined) {
            return(
                <ProductCard title={item.name} description={item.description} price= {item.price} link={"/productos/" + item.id} />
            ) 
        } else if (item.category == categoria.category) {
            return(
                <ProductCard title={item.name} description={item.description} price= {item.price} link={"/productos/" + item.id} />
            )                
        }
    })
    }

    return (
        <div className='container'>
            <h3>¡Bienvenido {greetingName}!</h3>
            <div className='row'>
            {renderProductos()}
            </div>
        </div> 
    );
}

export default ItemListContainer;