import ProductImg from "../images/productimg1.jpg"
import { Link } from "react-router-dom";

const ProductCard = ({title, description, price, link}) => {
    return (
        <div className="col-3">
            <Link to={link}><div className="card no-link mb-4">
                <img src= { ProductImg } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">${price}</small></p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>  </Link>       
        </div> 
    );
}

export default ProductCard;