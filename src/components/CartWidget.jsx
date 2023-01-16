import imgCarrito from "../images/ic_cart.svg"
import Context from "../context/Context";
import { useContext } from "react";
import { useEffect } from "react";

const CartWidget = ({quantity}) => {


    return (
        <div>
            <div>
                <a href="">
                    <img src={imgCarrito} alt="Carrito" width="32" height="32" />
                </a>
            </div>
            <div className="quantity">
                    <p> {quantity} </p>
            </div>
        </div>
    );
}

export default CartWidget;