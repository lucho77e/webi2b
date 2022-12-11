import ProductCard from '../components/ProductCard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

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