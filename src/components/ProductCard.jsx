import ProductImg from "../images/productimg1.jpg"
import { Link } from "react-router-dom";
import AddItemButton from "./AddItemButton";



const ProductCard = ({title, description, price, link, productId}) => {



    return (
        <div className="col-3">
            <div className="card no-link mb-4">
            <Link to={link}><img src= { ProductImg } className="card-img-top" alt="..." /></Link> 
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">${price}</small></p>
                    <AddItemButton text="Agregar" productId={ productId } />
                </div>
            </div>       
             
        </div> 
    );
}

export default ProductCard;