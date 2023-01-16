import { QuantityPicker } from "react-qty-picker";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDoc, getFirestore, getDocs, docs, updateDoc, setDoc, deleteDoc} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import Context from "../context/Context";
import { useContext } from "react";




const AddButton = ({productId, text}) => {
    
    const [carrito, setCarrito] = useState([])
    useEffect(() => {
      const db = getFirestore();
      const carritoCollection = collection(db, "carrito");
      getDocs(carritoCollection).then((snapshot) => {
        const cart = [];
        snapshot?.docs?.forEach((item) => {
          cart.push({
            ...item.data()
          })
        })
        setCarrito(cart)    
      })
    }, [])


    

    // const [cart, setCart] = useState([])

    // const [cantidad, setCantidad] = useState(0)


    let cartAux = carrito
    let existe = false
    let posicion
    let i = 0
    let cantidadAux
    const [cantidad, setCantidad] = useState(0)



        for (const item of carrito) {
            if ( productId == item.id) {
                posicion = i
                existe = true                
                cantidadAux = item.quantity
            }
            i++    
        }
                
        const buttonType = () => {
                    
        console.log(cantidadAux)

        if (cantidadAux == 0 || cantidadAux == undefined) {
            return (    
                <button style={{ margin: 8 }}  onClick={() => {

                        cartAux.push({
                            id: productId,
                            quantity: 1,
                        })

                        setCantidad(1)
                        
                        const db = getFirestore();
                        const orderDoc = doc(db, "carrito", productId);
                        setDoc(orderDoc, { 
                            quantity: "1", 
                            id: productId
                        })

                        setCarrito(cartAux)
                        
                        existe = true
                        


                }} 
                className='btn btn-primary'> {text} </button>
            );
        } else if (cantidadAux > 0) {
            return (    
                <QuantityPicker min={0} value={cantidadAux} onChange={(value) => {
                    cartAux[posicion].quantity = value
                    cantidadAux = value
                    
                    setCantidad(value)

                    const db = getFirestore();
                    const orderDoc = doc(db, "carrito", productId);
                    if (value > 0) {
                        updateDoc(orderDoc, { quantity: value.toString() })
                    } else {
                        deleteDoc(orderDoc)
                    }
                    setCarrito(carrito)
                    
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