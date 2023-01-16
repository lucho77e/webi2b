import Context from "./Context";
import { collection, doc, getDoc, getFirestore, getDocs, docs, updateDoc, setDoc, deleteDoc} from "@firebase/firestore";
import { useEffect, useState } from 'react';


const Provider = ({ children }) => {

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
    
    const [productos, setProductos] = useState([])
    useEffect(() => {
      const db = getFirestore();
      const productsCollection = collection(db, "productos");
      getDocs(productsCollection).then((snapshot) => {
        const products = [];
        snapshot?.docs?.forEach((item) => {
          products.push({
            id: item.id,
            ...item.data()
          })
        })
        setProductos(products)    
      })
    }, [])

    
    const CreateCartItem = (productId, quantity) => {
        const db = getFirestore();                        
        const orderDoc = doc(db, "carrito", productId);
        setDoc(orderDoc, { 
            quantity: quantity, 
            id: productId
        })
    }

    const UpdateCartItem = (productId, quantity) => {
        const db = getFirestore();
        const orderDoc = doc(db, "carrito", productId);
        updateDoc(orderDoc, { quantity: quantity })
    }
    
    
    const DeleteCartItem = (productId) => {
        const db = getFirestore();
        const orderDoc = doc(db, "carrito", productId);
        deleteDoc(orderDoc)
    }

    const getIdQuantity = (posicion) => {
        return carrito[posicion].quantity
    }

    return(
        <Context.Provider value ={{
            carrito,
            productos,
            onCreateCartItem: CreateCartItem,
            onUpdateCartItem: UpdateCartItem,
            onDeleteCartItem: DeleteCartItem,
            onGetIdQuantity: getIdQuantity,
        }}>
            {children}
        </Context.Provider>
    )

}

export default Provider;