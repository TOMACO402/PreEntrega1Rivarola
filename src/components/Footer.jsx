import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import youtube from "./images/youtube.svg";
import logo2 from "./images/logo2.png"

const Footer = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"/"} className="me-3"><img src={facebook} alt={"Facebook"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={instagram} alt={"Instagram"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={twitter} alt={"Twitter"} width={"30"} ></img></a>
                    <a href={"/"} className="me-3"><img src={youtube} alt={"Youtube"} width={"30"} ></img></a>
                </div>
            </div>
            <div className="row my-5">
                <div className="col md-8">
                    <ul className="nav">
                            <li class="nav-item">
                                <a className="nav-link text-secondary" href={"/"}>Politicas de privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href={"/"}>Sobre nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href={"/"}>Defensa al consumidor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4 align-items-center">
                    <p className="text--bs-dark"> <img src={logo2} alt={"lacresta2"} width={100}></img>®LaCrestaSurfShop</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;