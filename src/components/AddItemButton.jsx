import { QuantityPicker } from "react-qty-picker";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDoc, getFirestore, getDocs, docs, updateDoc, setDoc, deleteDoc} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import Context from "../context/Context";
import { useContext } from "react";




const AddItemButton = ({productId, text}) => {

    const contextData = useContext(Context) 
    const [carrito, setCarrito] = useState(contextData.carrito)
    // console.log(carrito)

    // useEffect(() => {
    //   const db = getFirestore();
    //   const carritoCollection = collection(db, "carrito");
    //   getDocs(carritoCollection).then((snapshot) => {
    //     const cart = [];
    //     snapshot?.docs?.forEach((item) => {
    //       cart.push({
    //         ...item.data()
    //       })
    //     })
    //     setCarrito(cart)    
    //   })
    // }, [])
  

    // const [cart, setCart] = useState([])

    // const [cantidad, setCantidad] = useState(0)


    let cartAux = carrito
    let existe = false
    let posicion
    let i = 0
    let cantidadAux
    const [cantidad, setCantidad] = useState(0)


        for (const item of cartAux) {
            if ( productId == item.id) {
                posicion = i
                existe = true                
                cantidadAux = item.quantity
            }
            i++    
        }
                
        const buttonType = () => {
                

        if (cantidadAux == 0 || cantidadAux == undefined) {
            return (    
                <button style={{ margin: 8 }}  onClick={() => {


                        if(existe) {
                            cartAux[posicion].quantity = 1
                            contextData.onUpdateCartItem(productId, 1)
                        } else {
                            cartAux.push({
                                id: productId,
                                quantity: 1,
                            })
                            contextData.onCreateCartItem(productId, 1)
                        }

                        cantidadAux = 1
                        setCantidad(1)

                        setCarrito(contextData.carrito)
                        cartAux = carrito                
                        existe = true
                        
                }} 
                className='btn btn-primary'> {text} </button>
            );
        } else if (cantidadAux > 0) {
            return (    
                <QuantityPicker min={0} value={cantidadAux} onChange={(value) => {

                    cartAux[posicion].quantity = value
                    contextData.onUpdateCartItem(productId, value.toString())
                    cantidadAux = value
                    
                    
                    // if (value > 0) {
                    //     contextData.onUpdateCartItem(productId, value.toString())
                    //     cantidadAux = value
                    // } else {
                    //     contextData.onDeleteCartItem(productId)
                    //     cartAux.splice(posicion,1)
                    //     console.log(cartAux)
                    //     cantidadAux = 0        
                    //     // setCantidad(0)
                    // }
                    setCantidad(value)
                    
                    

                    setCarrito(contextData.carrito)
                    cartAux = carrito                

                    
                }} />
            )
        }                          
    }


    return (    
        <div>
            { buttonType() }
        </div>
    );
}

export default AddItemButton;