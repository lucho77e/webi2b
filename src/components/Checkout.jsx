import Context from "../context/Context";
import { useContext } from "react";
import AddItemButton from "./AddItemButton";

const Checkout = () => {
    const contextData = useContext(Context)
    console.log(contextData.productos)

    const renderCarrito = () => {
        return (
            contextData.carrito.map((el) => {
                if (el.quantity != 0) {
                    return (

                            <div className='row'>
                                <div className='col-3'>
                                
                                </div>
                                <div className='col'>
                                    {/* <img src={producto.image} alt="" className='shadow' /> */}
                                </div>
                                <div className='col mt-3'>
                                    <h6>{el.id}</h6>
                                    {/* <h6>{producto.description}</h6> */}
                                    {/* <p>$ {producto.price}</p> */}
                                    <AddItemButton productId={ el.id } text="Agregar al carrito"/>  
                                </div>
                                <div className='col-3'>
                                </div>
                            </div>

                    )    
                }

                }
            )
        )
    }
 
          


    


    return (
        <div className='container mt-3'>
            <h3>Tu carrito</h3>
            {renderCarrito()}
        </div>
    )
}

export default Checkout;