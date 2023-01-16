import CartWidget from "./CartWidget";
import Logo from "../images/logowebi2b.png"
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../context/Context";

const NavBar = () => {

    
    let quantity = 0
    const contextData = useContext(Context)

   
  
    contextData.carrito.map((el) => {
            if (el.quantity != 0) {
                quantity = quantity + parseInt(el.quantity)  
            }
            console.log("la cantidad total es" + quantity)
        }
    )

    return (
        <div>            
            <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#0CAB4E'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                       <Link to={"/"}> <img src={Logo} alt="Logo" width="160" height="55" /> </Link>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to= {'almacen'} activeClassName="active" className="nav-link">Almacén</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= {'bebidas'} activeClassName="active" className="nav-link">Bebidas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= {'cuidado-personal'} activeClassName="active" className="nav-link">Cuidado Personal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= {'limpieza'} activeClassName="active" className="nav-link">Limpieza</NavLink>
                            </li>
                        </ul>   
                        <div>
                        <Link to={"/checkout"}><CartWidget quantity= { quantity } /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;