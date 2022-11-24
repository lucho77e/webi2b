import CartWidget from "./CartWidget";
import Logo from "../images/logowebi2b.png"

const NavBar = () => {
    return (
        <div>            
            <nav class="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#0CAB4E'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="160" height="55" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Almacén</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Bebidas</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Cuidado personal</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Limpieza</a>
                            </li>
                        </ul>
                        <div>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;