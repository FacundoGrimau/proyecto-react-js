import CartWidget from "./CartWidget";
import logo from "../assets/images/mi-logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row colorNavBarPrincipal">
                <div className="col"></div>
                    <div className="col-md text-center">
                        <Link to={"/"}>
                            <img src={logo} alt="mi-logo" width={200}/>
                        </Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end p-3">
                        <CartWidget/>
                    </div>
            </div>
            <div className="row bg-black p-3">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/remeras"}>Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/pantalones"}>Pantalones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/sweaters"}>Sweaters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white text-uppercase textoNavbar" to={"/category/calzados"}>Calzados</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;