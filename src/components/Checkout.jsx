import Context from "../context/Context";
import { useContext } from "react";
import AddItemButton from "./AddItemButton";

const Checkout = () => {
    const contextData = useContext(Context)
    console.log(contextData.productos)
    let resultado
    let totalCompra = 0
    console.log(resultado)

    const onSubmit = (evt) => {

        evt.preventDefault();
        contextData.onCreateOrder(contextData.carrito)
        contextData.carrito.map((el) => {
            contextData.onDeleteCartItem(el.id)
        })
      }

    // console.log(contextData.productos.filter(el.id="bltnldh9hJwMx6WclHoz"))

    const renderCarrito = () => {
        return (
            contextData.carrito.map((el) => {
                if (el.quantity != 0) {
                    resultado = contextData.productos.filter(function(producto) {
                        return producto.id === el.id;
                    });
                    
                    totalCompra= totalCompra + resultado[0].price * el.quantity
                    return (

                            <div className='row' style={{height: 116}}>
                                <div className='col-xxl-4 col-lg-2 col-md-1 col-sm-1'>
                                
                                </div>
                                <div className='col-xxl-1 col-lg-2 col-md-3 col-sm-2'>
                                    <img src={resultado[0].image} style={{"height" : "35%"}} alt="" className='shadow' />
                                </div>
                                <div className='col-xxl-2 col-lg-2 col-md-3 col-sm-3'>
                                    <h6>{resultado[0].name}</h6>
                                    <h6>{resultado[0].description}</h6>
                                    <p>$ {resultado[0].price * el.quantity}</p>
                                </div>
                                <div className='col-xxl-2 col-lg-3 col-md-4 col-sm-4'>
                                    <AddItemButton productId={ el.id } text="Agregar al carrito"/>  
                                </div>
                                <div className='col-xxl-3 col-lg-3 col-md-1 col-sm-1'>
                                
                                </div>
                            </div>

                    )    
                }
                }
            )
        )
    }
 
          




    return (
        <div className='container-md mt-2'>
            <h3>Tu carrito</h3>
            {renderCarrito()}
            <div className='row' style={{height: 172}}>
                                <div className='col-4'>
                                
                                </div>
                                <div className='col-3'>
                                    <h6> Total: </h6>
                                    <form onSubmit={onSubmit} className='mt-5'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Nombre y Apellido</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Repite tu email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Confirmar compra</button>
                                    </form>
                                </div>
                                <div className='col'>
                                    <h6> { totalCompra } </h6>

                                </div>
                                <div className='col-3'>
                                </div>
                            </div>
        </div>
    )
}

export default Checkout;