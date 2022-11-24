import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            
            <nav class="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#0CAB4E'}}>
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../public/images/logowebi2b.png" alt="Logo Webi2b" width="30" height="24" />
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
                {/* <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
            </nav>

            <p>Prueba</p>
            <CartWidget />
        </div>
    );
}

export default NavBar;