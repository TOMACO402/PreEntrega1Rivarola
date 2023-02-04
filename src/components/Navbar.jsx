import CartWidget from "./CartWidget";
import Logo from "./Logo";

const Navbar = () => {
    return(
        <div className="container mb-4">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                    <div className="col-md-1"><Logo/></div>
                        <a className="navbar-brand text--bs-light" href={"/"}>La Cresta Surf Shop</a>
                        <div className="col d-flex align-items-center justify-content-end me-5">
                              <CartWidget/>
                            </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"><Logo/>La Cresta</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={"/"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"/"}>Accesorios</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Indumentaria
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href={"/"}>Hombres</a></li>
                                <li><a className="dropdown-item" href={"/"}>Mujeres</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr> 
                                </li>
                                <li><a className="dropdown-item" href={"/"}>Todos los articulos</a></li>
                                </ul>
                            </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <button className="btn btn-success" type="submit">Buscar</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Navbar;