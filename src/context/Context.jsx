import { createContext } from 'react';



const Context = createContext({
    carrito: [],
    productos: [],
    onCreateCartItem: () => {},
    onUpdateCartItem: () => {},
    onDeleteCartItem: () => {},
    onGetIdQuantity: () => {},
    onCreateOrder: () => {},

})

export default Context