import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className='navbar'>
            <img src={logo} className="logo" alt="" /> 
            <ul className="categorias">
                <li>Vinos</li>
                <li>Cervezas</li>
                <li>Aperitivos</li>
                <li>Licores</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar;