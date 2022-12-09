import imgCarrito from "../images/ic_cart.svg"

const CartWidget = () => {
    return (
        <div>
            <div>
                <a href="">
                    <img src={imgCarrito} alt="Carrito" width="32" height="32" />
                </a>
            </div>
            <div className="quantity">
                    <p>11</p>
            </div>
        </div>
    );
}

export default CartWidget;