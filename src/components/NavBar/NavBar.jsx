import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className='navbar'>

            <Link to="/">
                <img src={logo} className="logo" alt="" /> 
            </Link>
            <ul className="categorias">
                <li>
                    <Link to="/category/Vinos">Vinos</Link>
                </li>
                <li>
                    <Link to="/category/Cervezas">Cervezas</Link>
                </li>
                <li>
                    <Link to="/category/Aperitivos">Aperitivos</Link>
                </li>
                <li>
                    <Link to="/category/Licores">Licores</Link>
                </li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar;