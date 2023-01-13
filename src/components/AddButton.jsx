import { QuantityPicker } from "react-qty-picker";
import { useState } from "react";
import { useEffect } from "react";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";




const db = getFirestore();
// const cartCollection = collection(db, "carrito");



const AddButton = ({productId}) => {

    // const [cantidad, setCantidad] = useState(0)
    // const buttonType = () => { 
    
    //     if (cantidad == 0) {
    //         return (    
    //             <button onClick={() => {
    //                 setCantidad(cantidad + 1)
    //                 console.log(cantidad)                     
    //             }} 
    //             className='btn btn-primary'>Agregar al carrito</button>
    //         );
    //     } else {
    //         return (    
    //             <QuantityPicker min={0} value={1} onChange={(value) => {
    //                 setCantidad(value)
    //                 console.log(cantidad)
    //             }} />
    //         )
    //     }
    // }


    const [cart, setCart] = useState([
 
    ])


    const [cantidad, setCantidad] = useState(0)

    console.log(cart)

    let cartAux = cart
    let existe = false
    let posicion
    let i = 0

   
    
        for (const item of cart) {
            if ( productId == item.id) {
                posicion = i
                existe = true
                console.log(cantidad)
            }
            i++    
        }
        // setCantidad(cartAux[posicion].quantity)
        
        
        
        const buttonType = () => {  
            console.log("la cantidad es " + cantidad)
        
        if (cantidad == 0) {
            return (    
                <button onClick={() => {
                    if (existe) {
                        cartAux[posicion].quantity = 1
                        setCantidad(1)
                        setCart(cartAux)
                        console.log(cart)                         
                    } else {
                        cartAux.push({
                            id: productId,
                            quantity: 1,
                        })
                        // addDoc(cartCollection, { 
                        //     id: productId,
                        //     quantity: 1, 
                        // })
                        setCantidad(1)
                        setCart(cartAux)
                        console.log(cart)
                        existe = true                        
                    }
                }} 
                className='btn btn-primary'>Agregar al carrito</button>
            );
        } else if (cantidad > 0) {
            return (    
                <QuantityPicker min={0} value={1} onChange={(value) => {
                    cartAux[posicion].quantity = value
                    setCantidad(value)
                    setCart(cartAux)
                    console.log(cart)
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

export default AddButton;